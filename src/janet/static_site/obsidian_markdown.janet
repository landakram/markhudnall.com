(import remarkable)
(import ./html :as html)
(import ./markdown :as markdown)
(import ./path :as path)
(import ./obsidian :as obsidian)

(var configured? false)
(var custom-inlines nil)
(var custom-protocols nil)

(defn split-once [needle s]
  (if-let [idx (string/find needle s)]
    [(string/slice s 0 idx) (string/slice s (+ idx (length needle)))]
    [s nil]))

(defn parse-target [raw]
  (def [without-alias alias] (split-once "|" raw))
  (def [target subpath] (split-once "#" without-alias))
  (def attrs @{:raw raw
               :path (string/trim target)})
  (when alias (put attrs :alias (string/trim alias)))
  (when subpath
    (def s (string/trim subpath))
    (if (string/has-prefix? "^" s)
      (put attrs :block (string/slice s 1))
      (put attrs :heading s)))
  attrs)

(defn wikilink-node [raw]
  [:obsidian-wikilink (parse-target raw) @[]])

(defn embed-node [raw]
  (def attrs (parse-target raw))
  (put attrs :embed? true)
  [:obsidian-embed attrs @[]])

(defn comment-node [raw]
  [:obsidian-comment @{:content raw} @[]])

(defn configure! []
  (when (not configured?)
    (def wikilink-grammar
      ~{:obsidian-wikilink (/ (* "[[" (% '(some (if-not "]]" 1))) "]]") ,wikilink-node)})
    (def embed-grammar
      ~{:obsidian-embed (/ (* "![[" (% '(some (if-not "]]" 1))) "]]") ,embed-node)})
    (def comment-grammar
      ~{:obsidian-comment (/ (* "%%" (% '(some (if-not "%%" 1))) "%%") ,comment-node)})
    (remarkable/extend/add-inline :obsidian-embed embed-grammar nil :first? true)
    (remarkable/extend/add-inline :obsidian-wikilink wikilink-grammar nil :first? true)
    (remarkable/extend/add-inline :obsidian-comment comment-grammar nil :first? true :delimiters "%")
    (set custom-inlines (peg/compile (remarkable/extend/build-inlines-grammar)))
    (set custom-protocols (remarkable/extend/build-protocols))
    (set configured? true)))

(defn parser-opts []
  (configure!)
  @{:inlines custom-inlines
    :protocols custom-protocols})

(defn warn! [opts msg]
  (when-let [warnings (get-in opts [:obsidian :warnings])]
    (array/push warnings msg)))

(defn source-label [opts]
  (if-let [note (get-in opts [:obsidian :current-note])]
    (get note :path "unknown note")
    "unknown note"))

(defn render-node [node renderers opts]
  (if (bytes? node)
    (html/escape-text node)
    (let [renderer (get renderers (get node 0))]
      (when (nil? renderer)
        (error (string "no renderer for markdown node: " (get node 0))))
      (renderer node renderers opts))))

(defn render-children [children renderers opts]
  (string/join (map |(render-node $ renderers opts) children) ""))

(defn link-label [attrs]
  (or (get attrs :alias)
      (get attrs :heading)
      (get attrs :block)
      (path/basename (get attrs :path))))

(defn render-wikilink [node renderers opts]
  (def attrs (get node 1))
  (def resolver (get-in opts [:obsidian :resolve-note] obsidian/resolve-note))
  (if-let [url (resolver attrs opts)]
    (string "<a class=\"internal-link\" href=\"" (html/escape url) "\">"
            (html/escape-text (link-label attrs)) "</a>")
    (do
      (warn! opts (string (source-label opts) " links to unpublished or missing note: " (get attrs :raw)))
      (string "<span class=\"internal-link is-unresolved\" data-href=\""
              (html/escape (get attrs :raw)) "\">"
              (html/escape-text (link-label attrs)) "</span>"))))

(defn digits? [s]
  (and (> (length s) 0)
       (all |(and (>= $ 48) (<= $ 57)) s)))

(defn image-size [s]
  (when s
    (def lower (string/ascii-lower (string/trim s)))
    (if-let [x (string/find "x" lower)]
      (let [w (string/slice lower 0 x)
            h (string/slice lower (+ x 1))]
        (when (and (digits? w) (digits? h)) @{:width w :height h}))
      (when (digits? lower) @{:width lower}))))

(defn render-image-embed [attrs attachment opts]
  (when-let [assets (get-in opts [:obsidian :assets])]
    (array/push assets @{:source (get attachment :source) :path (get attachment :path)}))
  (def size (image-size (get attrs :alias)))
  (def alt (if size "" (get attrs :alias "")))
  (def extra (if size
               (string (if (get size :width) (string " width=\"" (html/escape (get size :width)) "\"") "")
                       (if (get size :height) (string " height=\"" (html/escape (get size :height)) "\"") ""))
               ""))
  (string "<img src=\"" (html/escape (get attachment :url)) "\" alt=\"" (html/escape alt) "\"" extra ">"))

(defn render-embed [node renderers opts]
  (def attrs (get node 1))
  (def resolver (get-in opts [:obsidian :resolve-attachment] obsidian/resolve-attachment))
  (if-let [attachment (resolver attrs opts)]
    (if (obsidian/image-ext? (path/extname (get attachment :source)))
      (render-image-embed attrs attachment opts)
      (string "<a class=\"internal-embed file-embed\" href=\"" (html/escape (get attachment :url)) "\">"
              (html/escape-text (link-label attrs)) "</a>"))
    (do
      (warn! opts (string (source-label opts) " embeds unpublished or missing resource: " (get attrs :raw)))
      (string "<span class=\"internal-embed is-unresolved\" data-href=\""
              (html/escape (get attrs :raw)) "\">"
              (html/escape-text (link-label attrs)) "</span>"))))

(defn render-comment [_node _renderers _opts]
  "")

(defn comment-or-space? [child]
  (cond
    (bytes? child) (= "" (string/trim child))
    (indexed? child) (= :obsidian-comment (get child 0))
    true false))

(defn all-comment-or-space? [children]
  (var ok? true)
  (each child children
    (when (not (comment-or-space? child))
      (set ok? false)))
  ok?)

(defn render-paragraph [node renderers opts]
  (def [_ _ children] node)
  (def {:inner? inner?} opts)
  (if (all-comment-or-space? children)
    ""
    (string (if inner? "" "<p>")
            (render-children children renderers opts)
            (if inner? "" "</p>"))))

(defn parse-callout-marker [text]
  (when (string/has-prefix? "[!" text)
    (when-let [end (string/find "]" text)]
      (def callout-type (string/ascii-lower (string/trim (string/slice text 2 end))))
      (var rest (string/slice text (+ end 1)))
      (var fold nil)
      (when (> (length rest) 0)
        (def ch (get rest 0))
        (when (or (= ch 43) (= ch 45))
          (set fold (string (string/slice rest 0 1)))
          (set rest (string/slice rest 1))))
      (set rest (string/triml rest " \t"))
      (def newline (string/find "\n" rest))
      (def title (if newline (string/slice rest 0 newline) rest))
      (def remainder (if newline (string/slice rest (+ newline 1)) ""))
      @{:type callout-type
        :fold fold
        :title (if (= "" (string/trim title)) callout-type (string/trim title))
        :remainder remainder})))

(defn render-regular-blockquote [node renderers opts]
  (def [_ _ children] node)
  (string "<blockquote>" (render-children children renderers opts) "\n</blockquote>"))

(defn callout-body-children [first-paragraph callout rest-children]
  (def [_ attrs children] first-paragraph)
  (def remainder (get callout :remainder ""))
  (def new-first-children @[])
  (when (not= "" remainder)
    (array/push new-first-children remainder))
  (var first? true)
  (each child children
    (if first?
      (set first? false)
      (array/push new-first-children child)))
  (def out @[])
  (when (> (length new-first-children) 0)
    (array/push out [:paragraph attrs new-first-children]))
  (array/concat out rest-children)
  out)

(defn render-callout [node renderers opts]
  (def [_ _ children] node)
  (def first-child (first children))
  (if (and first-child (= :paragraph (get first-child 0))
           (> (length (get first-child 2 @[])) 0))
    (let [first-inline (first (get first-child 2))]
      (if (bytes? first-inline)
        (if-let [callout (parse-callout-marker first-inline)]
          (let [kind (get callout :type)
                body-children (callout-body-children first-child callout (slice children 1))]
            (string "<div class=\"callout callout-" (html/escape kind) "\" data-callout=\"" (html/escape kind) "\""
                    (if (get callout :fold) (string " data-callout-fold=\"" (html/escape (get callout :fold)) "\"") "")
                    ">"
                    "<div class=\"callout-title\">" (html/escape-text (get callout :title)) "</div>"
                    "<div class=\"callout-content\">" (render-children body-children renderers opts) "</div>"
                    "</div>"))
          (render-regular-blockquote node renderers opts))
        (render-regular-blockquote node renderers opts)))
    (render-regular-blockquote node renderers opts)))

(def obsidian-renderers
  {:obsidian-wikilink render-wikilink
   :obsidian-embed render-embed
   :obsidian-comment render-comment
   :paragraph render-paragraph
   :blockquote render-callout})

(defn render [source &opt opts]
  (default opts @{})
  (def p (parser-opts))
  (markdown/render source
                   (merge opts @{:parser p
                                  :renderers (merge obsidian-renderers (get opts :renderers @{}))})))

(defn render-string [source &opt opts]
  (get (render source opts) :html))
