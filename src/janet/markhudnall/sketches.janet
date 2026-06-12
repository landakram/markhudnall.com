(import ../static_site/html :as html)
(import ../static_site/directives :as directives)

(def sketches
  @{:widening-circles
    @{:asset "/js/posts-widening-circles.js"
      :defaults @{:width 700 :height 750 :auto-run true}}})

(defn data-value [v]
  (cond
    (= v true) "true"
    (= v false) "false"
    (keyword? v) (string v)
    true (string v)))

(defn option-attrs [name opts]
  (def attrs @{:class "sketch" :data-sketch (string name)})
  (eachp [k v] opts
    (put attrs (keyword (string "data-" (string k))) (data-value v)))
  attrs)

(defn sketch-directive [form]
  (when (< (length form) 2)
    (error "sketch directive requires a sketch name"))
  (def name (get form 1))
  (def sketch (get sketches name))
  (when (nil? sketch)
    (error (string "unknown sketch: " name)))
  (def opts (merge @{} (get sketch :defaults @{}) (directives/options-table (slice form 2))))
  @{:html (html/render-node [:div (option-attrs name opts)])
    :assets @[(get sketch :asset)]})

(def handlers
  @{"sketch" sketch-directive})
