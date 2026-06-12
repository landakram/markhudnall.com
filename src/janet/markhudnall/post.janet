(import ../static_site/path :as path)
(import ../static_site/fs :as fs)
(import ../static_site/markdown :as markdown)
(import ./date :as date)

(defn metadata-key [s]
  (keyword (string/ascii-lower (string/replace-all " " "-" s))))

(defn parse-metadata-line [line]
  (def idx (string/find ":" line))
  (if idx
    [(metadata-key (string/trim (string/slice line 0 idx)))
     (string/trim (string/slice line (+ idx 1)))]
    nil))

(defn split-metadata [contents]
  (def lines (string/split "\n" (string/replace-all "\r\n" "\n" contents)))
  (def meta @{})
  (def body @[])
  (var in-meta? true)
  (each line lines
    (if in-meta?
      (if (= "" (string/trim line))
        (set in-meta? false)
        (let [pair (parse-metadata-line line)]
          (if pair
            (put meta (get pair 0) (get pair 1))
            (do
              (set in-meta? false)
              (array/push body line)))))
      (array/push body line)))
  @{:metadata meta :body (string/join body "\n")})

(defn permalink-from-file [file]
  (string (path/strip-ext (path/basename file)) "/"))

(defn normalize-metadata [metadata file]
  (def raw-date (get metadata :date))
  (when (nil? raw-date)
    (error (string "post missing Date metadata: " file)))
  (def parsed-date (date/parse raw-date))
  (put metadata :date parsed-date)
  (put metadata :date-raw raw-date)
  (put metadata :permalink (permalink-from-file file))
  (put metadata :draft? (= "true" (string/ascii-lower (get metadata :draft "false"))))
  metadata)

(defn parse-file [file directive-handlers]
  (def split (split-metadata (slurp file)))
  (def metadata (normalize-metadata (get split :metadata) file))
  (def rendered (markdown/render (get split :body) @{:directives directive-handlers}))
  @{:source file
    :metadata metadata
    :html (get rendered :html)
    :assets (get rendered :assets)})

(defn parse-many [dir directive-handlers]
  (def files (filter |(string/has-suffix? ".md" $) (fs/list-files-recursive dir)))
  (sort files)
  (map |(parse-file $ directive-handlers) files))

(defn full-path [post]
  (def d (get-in post [:metadata :date]))
  (string "/" (date/path-date d) "/" (get-in post [:metadata :permalink])))

(defn visible? [post]
  (not (get-in post [:metadata :draft?])))

(defn sort-desc [posts]
  (sort (filter visible? posts)
        |(> (get-in $0 [:metadata :date :sort-key])
            (get-in $1 [:metadata :date :sort-key]))))

(defn recent [posts]
  (take 3 (sort-desc posts)))
