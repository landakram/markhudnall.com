(ns markhudnall.pages
  (:require [markhudnall.layout :as layout]
            [markhudnall.post :as post]
            [markdown.core :as markdown]))

(defn writing-page [posts]
  (fn [req]
    (layout/layout-page
      req
      (layout/title-ify "Writing")
      [:div
       (layout/layout-archive-posts posts)])))

(defn front-page [posts]
  (let [recent-posts (post/get-recent posts)]
    (fn [req]
      (layout/layout-page 
        req 
        (layout/layout-front-page recent-posts)))))

(defn post-pages [posts]
  (->> posts 
        (map (fn [post] 
              (let [path (post/get-full-path post)
                    html-fn #(layout/layout-post % post)]
                [path html-fn])))
        (into {})))
