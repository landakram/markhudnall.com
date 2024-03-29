(ns markhudnall.core
  (:require [stasis.core :as stasis]
            [clojure.string :as string]
            [markdown.core :as markdown]
            [clojure.java.io :as io]
            [clj-rss.core :as rss]
            [clj-time.coerce :refer [to-date]]
            [optimus.assets :as assets]
            [optimus.export]
            [optimus.optimizations :as optimizations]
            [optimus.strategies :refer [serve-live-assets]]
            [optimus.prime :as optimus]
            [optimus.html]
            [clojure.java.io :as io]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.default-charset :refer [wrap-default-charset]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.logger.timbre :refer [wrap-with-logger]]
            [markhudnall.pages :as pages]
            [markhudnall.layout :as layout]
            [markhudnall.post :as post]))

(def export-dir "dist")

(defn filtered-list-files [dir regexp]
  (let [dir (io/as-file dir)]
    (->> (.listFiles dir)
         (map #(.getPath %))
         (filter #(re-find regexp %)))))

(defn get-assets []
  (concat
   (assets/load-bundles "public"
                        (into
                         {"main.js"
                          ["/js/highlight.pack.js"
                           "/js/main.js"]}
                         (map
                          (fn [path]
                            (let [filename (last (string/split path #"/"))]
                              {filename
                               [(str "/js/" filename)]}))
                          (filtered-list-files "resources/public/js/" #"posts-.*\.js$"))))
   (assets/load-assets "public" [#"/css/.*"])
   (assets/load-assets "public" [#"/kram/.*"])
   (try
     (assets/load-assets "public" [#"\.js\.map$"])
     ;; Source maps do not exist for production builds.
     (catch Exception e nil))
   (assets/load-assets "public" [#"/img/.*"])))

(defn get-posts []
  (let [posts (concat
               (stasis/slurp-directory "resources/posts" #".(md|sketch)$"))]
    (post/parse-many posts)))

(defn rss-feed [posts]
  (let [title "Mark Hudnall's website"
        link "https://markhudnall.com"
        description "Mark Hudnall's piece of cyberspace"]
    (rss/channel-xml
     {:title title
      :link link
      :description description}
     (map
      (fn [{:keys [metadata html] :as post}]
        {:title (:title metadata)
         :link (str link (post/get-full-path post))
         :pubDate (-> metadata :date to-date)
         :description (str "<![CDATA[" html "]]>")})
      posts))))

(defn sort-posts [posts]
  (->> posts
       (filter #(not (get-in % [:metadata :draft?])))
       (sort-by #(get-in % [:metadata :date]))
       (reverse)))

(defn get-raw-pages []
  (let [posts (get-posts)
        sorted-posts (sort-posts posts)]
    (stasis/merge-page-sources
      {:front-page
       {"/" (pages/front-page sorted-posts)}
       :writing-page
       {"/writing/" (pages/writing-page sorted-posts)}
       :posts
       (pages/post-pages sorted-posts)
       :rss
       {"/rss.xml" (rss-feed sorted-posts)}})))

(defn prepare-page [page req]
  (if (string? page) 
    page 
    (page req)))

(defn prepare-pages [pages]
  (zipmap (keys pages)
          (map #(partial prepare-page %) (vals pages))))

(defn get-pages []
  (prepare-pages (get-raw-pages)))

(def app (-> (stasis/serve-pages get-pages) 
             (optimus/wrap 
               get-assets
               optimizations/none
               serve-live-assets)
             (wrap-content-type)
             (wrap-default-charset "UTF-8")
             (wrap-with-logger)))

(defonce dev-server (atom nil))

(defn start-dev-server! []
  (let [reloading-app (wrap-reload #'app)] 
    (->> (run-jetty reloading-app {:port 3000 :join? false})
         (reset! dev-server))))

(defn stop-dev-server! []
  (when-let [d @dev-server]
    (.stop d)))

(defn load-export-dir []
  (stasis/slurp-directory export-dir #"\.[^.]+$"))

(defn optimize
  "Optimize assets, excluding JS files since shadow-cljs already minifies JS."
  [assets options]
  (-> assets
      (optimizations/minify-css-assets options)
      (optimizations/inline-css-imports)
      (optimizations/concatenate-bundles options)
      (optimizations/add-cache-busted-expires-headers)
      (optimizations/add-last-modified-headers)))

(defn export []
  (let [assets (optimize (get-assets) {})
        old-files (load-export-dir)]
    (println "Gathering pages...")
    (stasis/empty-directory! export-dir)
    (optimus.export/save-assets assets export-dir)
    (stasis/export-pages (get-pages) export-dir {:optimus-assets assets})
    (println)
    (println "Export complete:")
    (stasis/report-differences old-files (load-export-dir))
    (println)))
