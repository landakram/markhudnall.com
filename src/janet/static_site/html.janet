# Hiccup-like HTML renderer.
#
# General nodes:
#   [:div.class#? attrs? child...]
#   strings/numbers/keywords are escaped text
#   arrays/tuples whose first item is not a keyword are flattened
#   (raw "<span>already html</span>") inserts raw HTML

(def void-tags
  @{"area" true "base" true "br" true "col" true "embed" true "hr" true
    "img" true "input" true "link" true "meta" true "param" true "source" true
    "track" true "wbr" true})

(def raw-key :ssg/raw)

(defn raw [s]
  @{raw-key s})

(defn raw? [x]
  (and (dictionary? x) (not (nil? (get x raw-key)))))

(defn escape [s]
  (def s* (string s))
  (string/replace-all "\"" "&quot;"
    (string/replace-all ">" "&gt;"
      (string/replace-all "<" "&lt;"
        (string/replace-all "&" "&amp;" s*)))))

(defn escape-text [s]
  (def s* (string s))
  (string/replace-all ">" "&gt;"
    (string/replace-all "<" "&lt;"
      (string/replace-all "&" "&amp;" s*))))

(defn tag-parts [tag]
  (def parts (string/split "." (string tag)))
  @{:name (first parts)
    :classes (if (> (length parts) 1) (slice parts 1) @[])})

(defn attr-name [k]
  (if (keyword? k) (string k) (string k)))

(defn class-string [v]
  (cond
    (nil? v) ""
    (string? v) v
    (keyword? v) (string v)
    (symbol? v) (string v)
    (indexed? v) (string/join (filter |(and $ (not= $ "")) (map class-string v)) " ")
    true (string v)))

(defn render-attrs [attrs tag-classes]
  (def pairs @[])
  (var classes (class-string tag-classes))
  (when (and (dictionary? attrs) (get attrs :class))
    (set classes (string/join (filter |(not= $ "") @[classes (class-string (get attrs :class))]) " ")))
  (when (not= classes "")
    (array/push pairs (string " class=\"" (escape classes) "\"")))
  (when (dictionary? attrs)
    (eachp [k v] attrs
      (when (and (not= k :class) (not (nil? v)) (not= v false))
        (def name (attr-name k))
        (if (= v true)
          (array/push pairs (string " " name))
          (array/push pairs (string " " name "=\"" (escape v) "\""))))))
  (string/join pairs ""))

(defn hiccup-node? [x]
  (and (indexed? x) (> (length x) 0) (keyword? (get x 0))))

(var render-node nil)

(defn render-fragment [nodes]
  (string/join (map render-node nodes) ""))

(set render-node (fn [node]
  (cond
    (nil? node) ""
    (= node false) ""
    (raw? node) (get node raw-key)
    (string? node) (escape-text node)
    (number? node) (string node)
    (keyword? node) (escape-text (string node))
    (symbol? node) (escape-text (string node))
    (hiccup-node? node)
    (let [tag (get node 0)
          parsed (tag-parts tag)
          tag-name (get parsed :name)
          tag-classes (get parsed :classes)
          maybe-attrs (if (> (length node) 1) (get node 1) nil)
          has-attrs? (and (dictionary? maybe-attrs) (not (raw? maybe-attrs)))
          attrs (if has-attrs? maybe-attrs @{})
          child-start (if has-attrs? 2 1)
          attr-string (render-attrs attrs tag-classes)]
      (if (get void-tags tag-name)
        (string "<" tag-name attr-string ">")
        (string "<" tag-name attr-string ">"
                (render-fragment (slice node child-start))
                "</" tag-name ">")))
    (indexed? node) (render-fragment node)
    true (escape-text (string node)))))

(defn html5 [node]
  (string "<!DOCTYPE html>" (render-node node)))
