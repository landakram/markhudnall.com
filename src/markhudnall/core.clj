(ns markhudnall.core
  (:require [stasis.core :as stasis]
            [clojure.string :as string]
            [markdown.core :as markdown]
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
     :homepage "https://getclef.com"
     :short-description "a better way to log in online"}
    {:name "Kiwi"
     :homepage "https://github.com/landakram/kiwi"
     :short-description "a personal wiki you write in Markdown"}
    {:name "East Bay Mobile Hack Night"
     :homepage "http://www.meetup.com/east-bay-mobile-hack-night/"
     :short-description "a mobile project meetup I host in downtown Oakland"}])

(def me
  {:image "http://1.gravatar.com/avatar/6d07453a68471e4682e8daceef543820?size=300"
   :elsewhere [{:name "GitHub"
               :url "https://github.com/landakram"}
               {:name "Twitter"
               :url "https://twitter.com/landakram"}
               {:name "PGP"
               :url "https://pgp.mit.edu/pks/lookup?op=get&search=0xB6822DEC4CEACD1C"}
               {:name "LinkedIn"
               :url "https://www.linkedin.com/in/mark-hudnall-5bb82b1b"}]})

(defn get-assets []
  (concat
    (assets/load-bundle "public" 
                        "main.js"
                        ["/js/highlight.pack.js"
                         "/js/main.js"])
    (assets/load-assets "public" [#"/css/.*"])
    (assets/load-assets "public" [#"/img/.*"])))

(defn get-posts []
  (post/parse-many (stasis/slurp-directory "resources/posts" #".md$")))

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
       (pages/post-pages posts)})))

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
               ;optimizations/all
               optimizations/none
               serve-live-assets)
             (wrap-content-type)
             (wrap-default-charset "UTF-8")))

(defn load-export-dir []
  (stasis/slurp-directory export-dir #"\.[^.]+$"))

(defn export []
  (let [assets (optimizations/all (get-assets) {})
        old-files (load-export-dir)]
    (println "Gathering pages...")
    (stasis/empty-directory! export-dir)
    (optimus.export/save-assets assets export-dir)
    (stasis/export-pages (get-pages) export-dir {:optimus-assets assets})
    (println)
    (println "Export complete:")
    (stasis/report-differences old-files (load-export-dir))
    (println)))
