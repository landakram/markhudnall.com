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
            [clj-time.core :as t]
            [markhudnall.layout :as layout]))

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


(defn get-recent [posts] 
  (->> posts 
      (sort-by #(get-in % [:metadata :date]))
      reverse 
      (take 3)))

(defn get-post-path [post]
  (let [permalink (get-in post [:metadata :permalink])
        date (get-in post [:metadata :date])
        year (t/year date)
        month (t/month date)
        day (t/day date)]
    (str "/" year "/" month "/" day permalink)))

(defn layout-post-list-item [post]
  (let [metadata (:metadata post)
                  title (:title metadata)
                  path (get-post-path post)]
    [:li [:a {:href path} title]]))

(defn layout-recent-posts [posts]
  [:ul.recent
   (map layout-post-list-item posts)])

(defn layout-archive-li [post]
  (let [title (get-in post [:metadata :title])
        date (get-in post [:metadata :date])
        formatted-date (layout/format-date date)
        path (get-post-path post)]
    [:li 
     [:div
      [:h2.post-title [:a {:href path} title]]
      [:p.post-date [:time formatted-date]] ]]))

(defn layout-archive-posts [posts]
  [:ul.archive
   (map layout-archive-li posts)])

(def projects 
   [{:name "Clef"
     :homepage "https://getclef.com"
     :short-description "a better way to log in online"}
    {:name "Kiwi"
     :homepage "http://kiwi.markhudnall.com"
     :short-description "a personal wiki you write in Markdown"}
    {:name "East Bay Mobile Hack Night"
     :homepage "http://www.meetup.com/east-bay-mobile-hack-night/"
     :short-description "a mobile project meetup I host in downtown Oakland"}])

(defn layout-project-list-item [project]
  (let [href (:homepage project)
        name (:name project)
        descr (:short-description project)]
    [:li [:a {:href href} name] (str " is " descr)]))

(defn layout-front-page [recent-posts]
  [:div
   (markdown/md-to-html-string (slurp "resources/md/short-bio.md"))
   [:h2 "Recent posts"]
   (layout-recent-posts recent-posts)
   [:h2 "Projects"]
   [:ul
    (map layout-project-list-item projects)]])

(defn front-page [posts]
  (let [recent-posts (get-recent posts)]
    (fn [req]
      (layout/layout-page 
        req 
        (layout-front-page recent-posts)))))

(def me {:image "http://1.gravatar.com/avatar/6d07453a68471e4682e8daceef543820?size=300"
         :elsewhere [{:name "GitHub"
                      :url "https://github.com/landakram"}
                     {:name "Twitter"
                      :url "https://twitter.com/landakram"}
                     {:name "PGP"
                      :url "https://pgp.mit.edu/pks/lookup?op=get&search=0xB6822DEC4CEACD1C"}
                     {:name "LinkedIn"
                      :url "https://www.linkedin.com/in/mark-hudnall-5bb82b1b"}]})

(defn layout-elsewhere []
  (let [elsewhere-data (:elsewhere me)]
    [:ul
     (map (fn [place] 
            [:li [:a {:href (:url place)} (:name place)]]) 
          elsewhere-data)]))

(defn about-page []
  (fn [req]
    (layout/layout-page 
      req
      [:div
       [:img.me {:src (:image me) :alt "Mark Hudnall"}]
       [:section.bio
        (markdown/md-to-html-string (slurp "resources/md/bio.md"))]
       [:section.elsewhere
        [:h2 "Elsewhere"]
        (layout-elsewhere)]])))

(defn archive-page [posts]
  (fn [req]
    (layout/layout-page
      req
      [:div
       (layout-archive-posts posts)])))

(defn get-assets []
  (assets/load-assets "public" [#".*"]))

(defn post-pages [posts]
  (let [post-pairs (map #(vector (get-in % [:metadata :permalink]) %) posts)
        post-map (into {} post-pairs)]
    (->> posts 
         (map (fn [post] 
                (let [path (get-post-path post)
                      html-fn #(layout/layout-post % post)]
                  [path html-fn])))
         (into {}))))

(defn get-raw-pages []
  (let [posts (parse-posts (stasis/slurp-directory "resources/posts" #".md$"))]
    (stasis/merge-page-sources
      {:public 
       (stasis/slurp-directory "resources/public" #".*\.(html|css|js)$")
       :front-page
       {"/" (front-page posts)}
       :about-page
       {"/about/" (about-page)}
       :archive-page
       {"/archive/" (archive-page (reverse (sort-by #(get-in % [:metadata :date]) posts)))}
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
