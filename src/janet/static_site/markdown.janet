(import remarkable)
(import ./directives :as directives)
(import ./html :as html)

(defn make-token [prefix n]
  (string prefix n "TOKENEND"))

(defn extract-inhibit-percent [markdown]
  (def replacements @{})
  (var n 0)
  (defn raw-token [content]
    (def token (make-token "SSGRAWTOKEN" n))
    (put replacements token content)
    (set n (+ n 1))
    token)
  (defn wrapping-line [line]
    (def trimmed (string/trim line))
    (if (and (string/has-prefix? "%" trimmed)
             (string/has-suffix? "%" trimmed)
             (or (string/find "\\" line) (string/find "<" line)))
      (let [start (string/find "%" line)
            end (last (string/find-all "%" line))]
        (string (string/slice line 0 start)
                (raw-token (string/slice line (+ start 1) end))
                (string/slice line (+ end 1))))
      line))
  (defn inline [line]
    (def buf @"")
    (var i 0)
    (while (< i (length line))
      (def b (get line i))
      (def next-b (if (< (+ i 1) (length line)) (get line (+ i 1)) nil))
      (if (and (= b 37) (or (= next-b 92) (= next-b 60)))
        (let [end (string/find "%" line (+ i 1))]
          (if end
            (do
              (buffer/push-string buf (raw-token (string/slice line (+ i 1) end)))
              (set i (+ end 1)))
            (do
              (buffer/push-byte buf b)
              (set i (+ i 1)))))
        (do
          (buffer/push-byte buf b)
          (set i (+ i 1)))))
    (string buf))
  @{:markdown (string/join
                (map |(inline (wrapping-line $))
                     (string/split "\n" markdown))
                "\n")
    :replacements replacements})

(defn fence-line? [line]
  (def trimmed (string/trim line))
  (or (string/has-prefix? "```" trimmed)
      (string/has-prefix? "~~~" trimmed)))

(defn footnote-definition [line]
  (when (string/has-prefix? "[^" line)
    (when-let [end (string/find "]:" line)]
      @{:id (string/slice line 2 end)
        :text (string/trim (string/slice line (+ end 2)))})))

(defn extract-footnotes [markdown]
  (def lines (string/split "\n" markdown))
  (def body @[])
  (def order @[])
  (def defs @{})
  (var in-fence? false)
  (each line lines
    (if (fence-line? line)
      (do
        (set in-fence? (not in-fence?))
        (array/push body line))
      (if-let [note (and (not in-fence?) (footnote-definition line))]
        (do
          (def id (get note :id))
          (when (nil? (get defs id))
            (array/push order id))
          (put defs id (get note :text)))
        (array/push body line))))
  @{:markdown (string/join body "\n")
    :order order
    :definitions defs})

(defn footnote-numbers [footnotes]
  (def numbers @{})
  (var n 1)
  (each id (get footnotes :order)
    (put numbers id n)
    (set n (+ n 1)))
  numbers)

(defn replace-footnote-refs [markdown footnotes]
  (def numbers (footnote-numbers footnotes))
  (defn replace-line [line]
    (def buf @"")
    (var i 0)
    (while (< i (length line))
      (if (and (= (get line i) 91)
               (< (+ i 1) (length line))
               (= (get line (+ i 1)) 94))
        (let [end (string/find "]" line (+ i 2))]
          (if end
            (let [id (string/slice line (+ i 2) end)
                  n (get numbers id)]
              (if n
                (do
                  (buffer/push-string buf (string "<sup><a id=\"fnref" n "\" href=\"#fn-" n "\">" n "</a></sup>"))
                  (set i (+ end 1)))
                (do
                  (buffer/push-byte buf (get line i))
                  (set i (+ i 1)))))
            (do
              (buffer/push-byte buf (get line i))
              (set i (+ i 1)))))
        (do
          (buffer/push-byte buf (get line i))
          (set i (+ i 1)))))
    (string buf))
  (def out @[])
  (var in-fence? false)
  (each line (string/split "\n" markdown)
    (if (fence-line? line)
      (do
        (set in-fence? (not in-fence?))
        (array/push out line))
      (array/push out (if in-fence? line (replace-line line)))))
  (string/join out "\n"))

(defn plain-text [node]
  (cond
    (bytes? node) (string node)
    (indexed? node) (string/join (map plain-text (get node 2 @[])) "")
    true ""))

(defn slugify [text]
  (def lower (string/ascii-lower text))
  (def buf @"")
  (var prev-sep? false)
  (each b lower
    (cond
      (or (and (>= b 97) (<= b 122))
          (and (>= b 48) (<= b 57)))
      (do (buffer/push-byte buf b) (set prev-sep? false))

      (or (= b 32) (= b 45) (= b 95))
      (when (and (> (length buf) 0) (not prev-sep?))
        (buffer/push-byte buf 95)
        (set prev-sep? true))))
  (var out (string buf))
  (while (string/has-suffix? "_" out)
    (set out (string/slice out 0 -1)))
  out)

(defn render-node [node renderers opts]
  (if (bytes? node)
    (html/escape-text node)
    (let [renderer (get renderers (get node 0))]
      (when (nil? renderer)
        (error (string "no renderer for markdown node: " (get node 0))))
      (renderer node renderers opts))))

(defn render-children [children renderers opts]
  (string/join (map |(render-node $ renderers opts) children) ""))
(defn render-document [node renderers opts]
  (def [_ _ children] node)
  (string/join (map |(string (render-node $ renderers (merge opts {:start-nl? false})) "\n") children) ""))



(defn render-heading [node renderers opts]
  (def [_ attrs children] node)
  (def level (get attrs :level))
  (def id (slugify (plain-text node)))
  (string "<h" level " id=\"" (html/escape id) "\" tabindex=\"-1\">"
          (render-children children renderers opts)
          "</h" level ">"))

(def markdown-renderers
  {:document render-document
   :heading render-heading})

(defn render-core [markdown &opt opts]
  (default opts @{})
  (def parser (get opts :parser @{}))
  (def renderers (merge markdown-renderers (get opts :renderers @{})))
  (remarkable/render-html
    (remarkable/parse-md markdown
                         :blocks (get parser :blocks)
                         :inlines (get parser :inlines)
                         :protocols (get parser :protocols)
                         :priorities (get parser :priorities))
    (merge opts {:renderers renderers})))

(defn render-footnotes [footnotes &opt opts]
  (def order (get footnotes :order))
  (if (empty? order)
    ""
    (do
      (def defs (get footnotes :definitions))
      (def parts @[])
      (var n 1)
      (array/push parts "<ol class=\"footnotes\" data-widget=\"footnotes\">\n")
      (each id order
        (def note-html (render-core (get defs id "") opts))
        (array/push parts (string "<li id=\"fn-" n "\">" note-html "<a href=\"#fnref" n "\">&#8617;</a></li>\n"))
        (set n (+ n 1)))
      (array/push parts "</ol>\n")
      (string/join parts ""))))

(defn render
  "Render Markdown with optional block directive handlers.
   Returns {:html ... :assets [...]}."
  [markdown &opt opts]
  (default opts @{})
  (def handlers (get opts :directives @{}))
  (def extracted (if (> (length handlers) 0)
                   (directives/extract markdown handlers)
                   @{:markdown markdown :replacements @{} :assets @[]}))
  (def raw-extracted (extract-inhibit-percent (get extracted :markdown)))
  (def footnotes (extract-footnotes (get raw-extracted :markdown)))
  (def source (replace-footnote-refs (get footnotes :markdown) footnotes))
  (def html-output (string (render-core source opts) (render-footnotes footnotes opts)))
  (def with-raw (directives/replace-placeholders html-output (get raw-extracted :replacements)))
  @{:html (directives/replace-placeholders with-raw (get extracted :replacements))
    :assets (get extracted :assets)})

(defn render-string [markdown &opt opts]
  (get (render markdown opts) :html))
