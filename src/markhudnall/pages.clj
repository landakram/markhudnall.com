(ns markhudnall.pages
  (:require [markhudnall.layout :as layout]
            [markhudnall.post :as post]
            [markdown.core :as markdown]))

(defn about-page [me]
  (fn [req]
    (layout/layout-page
      req
      (layout/title-ify "About")
      [:div
       [:img.me {:src (:image me) :alt "Mark Hudnall"}]
       [:section.bio
        (markdown/md-to-html-string (slurp "resources/md/bio.md"))]
       [:section.elsewhere
        [:h2 "Elsewhere"]
        (layout/layout-elsewhere (:elsewhere me))]])))

(defn archive-page [posts]
  (fn [req]
    (layout/layout-page
      req
      (layout/title-ify "Archive")
      [:div
       (layout/layout-archive-posts posts)])))

(defn front-page [posts projects]
  (let [recent-posts (post/get-recent posts)]
    (fn [req]
      (layout/layout-page 
        req 
        (layout/layout-front-page recent-posts projects)))))

(defn post-pages [posts]
  (->> posts 
        (map (fn [post] 
              (let [path (post/get-full-path post)
                    html-fn #(layout/layout-post % post)]
                [path html-fn])))
        (into {})))
