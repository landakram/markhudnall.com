(import ../static_site/site :as ssg-site)
(import ./post :as post)
(import ./pages :as pages)
(import ./rss :as rss)
(import ./sketches :as sketches)
(import ./obsidian :as obsidian)

(defn build-content []
  (obsidian/load-content sketches/handlers))

(defn build-pages [content]
  (def posts (post/sort-desc (get content :posts)))
  (array/concat @[]
                @[(pages/front-page posts (get content :pages-by-role))
                  (pages/writing-page posts)]
                (pages/post-pages posts)
                @[(rss/page posts)]))

(defn site []
  (def content (build-content))
  @{:out "dist"
    :public-root "resources/public"
    :static-assets (get content :static-assets @[])
    :pages (build-pages content)})

(defn export []
  (ssg-site/export-site (site)))
