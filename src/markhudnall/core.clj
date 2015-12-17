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
            [clj-time.format :as f]
            [markhudnall.layout :as layout]
            ))

(defn parse-post [[filename contents]]
  ; post => {:metadata {...} :html "..."}
  (let [post (markdown/md-to-html-string-with-meta contents :footnotes? true)
        metadata (:metadata post)
        parsed-metadata (zipmap (keys metadata) (map #(first %) (vals metadata)))
        raw-date (:date parsed-metadata)
        parsed-date (f/parse raw-date)
        permalink (string/replace filename #"\.md$" "/")]
    (-> post 
        (assoc :metadata parsed-metadata)
        (assoc-in [:metadata :permalink] permalink)
        (assoc-in [:metadata :date] parsed-date))))

(defn parse-posts [posts]
  (map parse-post posts))


(defn recent-posts [posts] 
  (->> posts 
      (sort-by #(get-in % [:metadata :date]))
      reverse 
      (take 3)))

(defn layout-recent-post [post]
  (let [metadata (:metadata post)
                  title (:title metadata)
                  permalink (:permalink metadata)]
    [:li [:a {:href permalink} title]]))

(defn layout-recent-posts [posts]
  [:ul
   (map layout-recent-post posts)])

(defn layout-front-page [recent-posts]
  [:div
   (markdown/md-to-html-string (slurp "resources/md/short-bio.md"))
   [:h2 "Recent posts"]
   (layout-recent-posts recent-posts)
   [:h2 "Projects"]
   [:ul
    [:li [:a {:href "https://getclef.com"} "Clef"] " is a better way to log in online"]
    [:li [:a {:href ""} "Kiwi"] " is a personal wiki you write in Markdown"]
    [:li [:a {:href "http://www.meetup.com/east-bay-mobile-hack-night/"} "East Bay Mobile Hack Night"] " is a mobile project meetup I host in downtown Oakland"]
    ]]) 

(defn front-page [posts]
  (let [recent-posts (recent-posts posts)]
    (fn [req]
      (layout/layout-page 
        req 
        (layout-front-page recent-posts)))))

(defn get-assets[]
  (assets/load-assets "public" [#".*"]))


(defn post-pages [posts]
  (let [post-pairs (map #(vector (get-in % [:metadata :permalink]) %) posts)
        post-map (into {} post-pairs)]
    (zipmap (keys post-map)
            (map 
              #(fn [req] 
                  (layout/layout-post req %))
              (vals post-map)))))

(defn get-raw-pages []
  (let [posts (parse-posts (stasis/slurp-directory "resources/posts" #".md$"))]
    (stasis/merge-page-sources
      {:public 
       (stasis/slurp-directory "resources/public" #".*\.(html|css|js)$")
       :front-page
       {"/" (front-page posts)}
       :posts 
       (post-pages posts)})))

(defn prepare-page [page req]
  (if (string? page) page (page req)))

(defn prepare-pages [pages]
  (zipmap (keys pages)
          (map #(partial prepare-page %) (vals pages))))

(defn get-pages []
  (prepare-pages (get-raw-pages)))

(def app (optimus/wrap (stasis/serve-pages get-pages)
                       get-assets
                       optimizations/all
                       serve-live-assets))

(def export-dir "dist")

(defn export []
  (let [assets (optimizations/all (get-assets) {})]
    (stasis/empty-directory! export-dir)
    (optimus.export/save-assets assets export-dir)
    (stasis/export-pages (get-pages) export-dir {:optimus-assets assets})))
