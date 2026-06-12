(import ./fs :as fs)
(import ./path :as path)
(import ./markdown :as markdown)
(import ./bases :as bases)

(def ignored-prefixes @[".obsidian/" ".trash/" ".git/"])

(defn metadata-key [s]
  (keyword (string/ascii-lower
             (string/replace-all "_" "-"
               (string/replace-all " " "-" (string/trim s))))))

(defn strip-quotes [s]
  (def t (string/trim s))
  (if (and (>= (length t) 2)
           (or (and (string/has-prefix? "\"" t) (string/has-suffix? "\"" t))
               (and (string/has-prefix? "'" t) (string/has-suffix? "'" t))))
    (string/slice t 1 (- (length t) 1))
    t))

(defn split-commas [s]
  (map |(strip-quotes $) (filter |(not= "" (string/trim $)) (string/split "," s))))

(defn parse-scalar [s]
  (def t (string/trim s))
  (def lower (string/ascii-lower t))
  (cond
    (= lower "true") true
    (= lower "false") false
    (= lower "null") nil
    (and (string/has-prefix? "[" t) (string/has-suffix? "]" t))
    (split-commas (string/slice t 1 -1))
    true (strip-quotes t)))

(defn parse-frontmatter [text]
  (def metadata @{})
  (var current-key nil)
  (each raw-line (string/split "\n" (string/replace-all "\r\n" "\n" text))
    (def line (string/trim raw-line))
    (cond
      (or (= line "") (string/has-prefix? "#" line)) nil

      (and current-key (string/has-prefix? "- " line))
      (array/push (get metadata current-key) (parse-scalar (string/slice line 2)))

      (string/find ":" raw-line)
      (let [idx (string/find ":" raw-line)
            k (metadata-key (string/slice raw-line 0 idx))
            v (string/trim (string/slice raw-line (+ idx 1)))]
        (if (= v "")
          (do
            (put metadata k @[])
            (set current-key k))
          (do
            (put metadata k (parse-scalar v))
            (set current-key nil))))))
  metadata)

(defn split-frontmatter [contents]
  (def normalized (string/replace-all "\r\n" "\n" contents))
  (def lines (string/split "\n" normalized))
  (if (and (> (length lines) 0) (= "---" (string/trim (first lines))))
    (do
      (def fm @[])
      (def body @[])
      (var in-fm? true)
      (var first? true)
      (each line lines
        (cond
          first? (set first? false)
          (and in-fm? (= "---" (string/trim line))) (set in-fm? false)
          in-fm? (array/push fm line)
          true (array/push body line)))
      @{:metadata (parse-frontmatter (string/join fm "\n"))
        :body (string/join body "\n")})
    @{:metadata @{} :body normalized}))

(defn truthy? [v]
  (cond
    (= true v) true
    (= false v) false
    (nil? v) false
    (string? v) (= "true" (string/ascii-lower (string/trim v)))
    true false))

(defn published? [note]
  (def metadata (get note :metadata @{}))
  (or (truthy? (get metadata :publish))
      (truthy? (get metadata :dg-publish))))

(defn published-for-query? [query note]
  (def metadata (get note :metadata @{}))
  (var matched? false)
  (each property (get query :properties bases/default-publish-properties)
    (when (truthy? (get metadata property))
      (set matched? true)))
  matched?)

(defn markdown-file? [file]
  (string/has-suffix? ".md" file))

(defn ignored? [rel]
  (or (some |(string/has-prefix? $ rel) ignored-prefixes)
      (string/find "/.obsidian/" (string "/" rel))))

(defn title-from-path [file]
  (path/strip-ext (path/basename file)))

(defn scan-file [vault file]
  (def split (split-frontmatter (slurp file)))
  (def metadata (get split :metadata))
  (def title (get metadata :title (title-from-path file)))
  @{:vault vault
    :source file
    :path (path/relative vault file)
    :metadata metadata
    :title title
    :body (get split :body)})

(defn scan-vault [vault]
  (when (not (fs/exists? vault))
    (error (string "Obsidian vault not found: " vault)))
  (def files (filter |(and (markdown-file? $)
                           (not (ignored? (path/relative vault $))))
                     (fs/list-files-recursive vault)))
  (map |(scan-file vault $) (sort files)))

(defn scan-published [vault]
  (when (not (fs/exists? vault))
    (error (string "Obsidian vault not found: " vault)))
  (def query (bases/load-query vault))
  (def files (bases/matching-files vault query))
  @{:query query
    :notes (map |(scan-file vault $) files)})

(defn as-array [v]
  (cond
    (nil? v) @[]
    (indexed? v) v
    true @[v]))

(defn normalize-link-key [s]
  (var out (string/trim (string s)))
  (set out (string/replace-all "\\" "/" out))
  (when (string/has-suffix? ".md" out)
    (set out (string/slice out 0 (- (length out) 3))))
  (string/ascii-lower out))

(defn note-link-keys [note]
  (def rel (path/strip-ext (get note :path)))
  (def base (path/strip-ext (path/basename (get note :path))))
  (def metadata (get note :metadata @{}))
  (def keys @[rel base (get note :title)])
  (each alias (as-array (get metadata :aliases))
    (array/push keys alias))
  (each alias (as-array (get metadata :alias))
    (array/push keys alias))
  (filter |(and $ (not= "" (string/trim (string $)))) keys))

(defn put-index! [idx key note warnings]
  (def normalized (normalize-link-key key))
  (when (not= "" normalized)
    (if-let [existing (get idx normalized)]
      (when (not= (get existing :source) (get note :source))
        (array/push warnings (string "ambiguous Obsidian link key '" key "' for "
                                    (get existing :path) " and " (get note :path))))
      (put idx normalized note))))

(defn build-note-index [notes &opt warnings]
  (default warnings @[])
  (def idx @{})
  (each note notes
    (each key (note-link-keys note)
      (put-index! idx key note warnings)))
  idx)

(defn image-ext? [ext]
  (def e (string/ascii-lower ext))
  (or (= e ".png") (= e ".jpg") (= e ".jpeg") (= e ".gif")
      (= e ".webp") (= e ".svg") (= e ".avif")))

(defn attachment-file? [file]
  (and (not (markdown-file? file))
       (not (string/has-suffix? ".mdenc" file))
       (not (string/has-suffix? ".DS_Store" file))))

(defn build-attachment-index [vault]
  (def idx @{})
  (each file (fs/list-files-recursive vault)
    (def rel (path/relative vault file))
    (when (and (attachment-file? file) (not (ignored? rel)))
      (put idx (normalize-link-key rel) file)
      (put idx (normalize-link-key (path/basename rel)) file)))
  idx)

(defn existing-file [candidates]
  (var found nil)
  (each candidate candidates
    (when (and (nil? found) candidate (fs/file? candidate))
      (set found candidate)))
  found)

(defn resolve-attachment-source [target opts]
  (def obs (get opts :obsidian @{}))
  (def vault (get obs :vault))
  (def current-note (get obs :current-note))
  (def current-dir (when current-note (path/dirname (get current-note :path ""))))
  (def attachments (get obs :attachments @{}))
  (or (get attachments (normalize-link-key target))
      (get attachments (normalize-link-key (path/basename target)))
      (when vault
        (existing-file
          @[(path/join vault target)
            (when current-dir (path/join vault current-dir target))
            (path/join vault "Attachments" "Website" target)
            (path/join vault "Attachments" target)
            (path/join vault "Website" "Attachments" target)
            (path/join vault "Attachments" "Website" (path/basename target))
            (path/join vault "Attachments" (path/basename target))]))))

(defn note-anchor [attrs]
  (cond
    (get attrs :heading) (string "#" (markdown/slugify (get attrs :heading)))
    (get attrs :block) (string "#" (get attrs :block))
    true ""))

(defn resolve-note [attrs opts]
  (def obs (get opts :obsidian @{}))
  (def target (get attrs :path ""))
  (def note (if (= target "")
              (get obs :current-note)
              (get (get obs :note-index @{}) (normalize-link-key target))))
  (when note
    (string (get note :url "") (note-anchor attrs))))

(defn resolve-attachment [attrs opts]
  (def obs (get opts :obsidian @{}))
  (def target (get attrs :path ""))
  (def source (resolve-attachment-source target opts))
  (when source
    (def basename (path/basename source))
    @{:source source
      :path (path/join (get obs :attachment-output-dir "img") basename)
      :url (path/url-join (get obs :attachment-output-dir "img") basename)}))

(defn dedupe-assets [assets]
  (def seen @{})
  (def out @[])
  (each asset assets
    (def k (get asset :path))
    (when (and k (nil? (get seen k)))
      (put seen k true)
      (array/push out asset)))
  out)
