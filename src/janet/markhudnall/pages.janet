(import ./layout :as layout)
(import ./post :as post)

(defn front-page [posts pages-by-role]
  (def recent-posts (post/recent posts))
  @{:path "/"
    :render (fn [ctx] (layout/layout-page ctx (layout/layout-front-page recent-posts pages-by-role)))})

(defn writing-page [posts]
  @{:path "/writing/"
    :render (fn [ctx]
              (layout/layout-page ctx
                                  (layout/title-ify "Writing")
                                  [:div (layout/layout-archive-posts posts)]))})

(defn post-page [p]
  @{:path (post/full-path p)
    :assets (get p :assets @[])
    :render (fn [ctx] (layout/layout-post ctx p))})

(defn post-pages [posts]
  (map post-page posts))
