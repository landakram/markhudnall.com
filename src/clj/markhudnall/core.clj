(ns markhudnall.core
  (:require [stasis.core :as stasis]
            [clojure.string :as string]
            [markdown.core :as markdown]
            [clojure.java.io :as io]
            [optimus.assets :as assets]
            [optimus.export]
            [optimus.optimizations :as optimizations]
            [optimus.strategies :refer [serve-live-assets]]
            [optimus.prime :as optimus]
            [optimus.html]
            [clojure.java.io :as io]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.default-charset :refer [wrap-default-charset]]
            [markhudnall.pages :as pages]
            [markhudnall.layout :as layout]
            [markhudnall.post :as post]))

(def export-dir "dist")

(def projects
   [{:name "Clef"
     :homepage "https://web.archive.org/web/20161108070329/https://getclef.com/"
     :short-description "was a better way to log in online"}
    {:name "Kiwi"
     :homepage "https://github.com/landakram/kiwi"
     :short-description "is a personal wiki you write in Markdown"}
    {:name "Instant2FA"
     :homepage "https://www.producthunt.com/posts/instant-2fa"
     :short-description "was a drop-in 2FA integration"}
    {:name "gdax_recurring"
     :homepage "https://github.com/landakram/gdax_recurring"
     :short-description "is a CLI script to automate recurring USD deposits and asset allocation for GDAX"}])

(def me
  {:image "http://1.gravatar.com/avatar/6d07453a68471e4682e8daceef543820?size=300"
   :elsewhere [{:name "GitHub"
               :url "https://github.com/landakram"}
               {:name "Twitter"
               :url "https://twitter.com/landakram"}
               {:name "Keybase"
               :url "https://keybase.io/landakram"}
               {:name "LinkedIn"
               :url "https://www.linkedin.com/in/mark-hudnall-5bb82b1b"}]})

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
   (try
     (assets/load-assets "public" [#"\.js\.map$"])
     ;; Source maps do not exist for production builds.
     (catch Exception e nil))
   (assets/load-assets "public" [#"/img/.*"])))

(defn get-posts []
  (let [posts (concat
               (stasis/slurp-directory "resources/posts" #".(md|sketch)$"))]
    (post/parse-many posts)))

(defn get-raw-pages []
  (let [posts (get-posts)
        sorted-posts (->> posts
                          (filter #(not (get-in % [:metadata :draft?])))
                          (sort-by #(get-in % [:metadata :date]))
                          (reverse))]
    (stasis/merge-page-sources
      {:front-page
       {"/" (pages/front-page sorted-posts projects)}
       :about-page
       {"/about/" (pages/about-page me)}
       :archive-page
       {"/archive/" (pages/archive-page sorted-posts)}
       :posts
       (pages/post-pages sorted-posts)})))

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
             (wrap-default-charset "UTF-8")))

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