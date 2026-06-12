(import ./command :as command)
(import ./fs :as fs)
(import ./path :as path)

(def default-publish-properties @[:publish :dg-publish])

(def default-base-candidates
  @["Website/Public.base"
    "Website/Published.base"
    "Website/Publish.base"
    "Public.base"
    "Published.base"
    "Publish.base"])

(defn strip-quotes [s]
  (def t (string/trim (string s)))
  (if (and (>= (length t) 2)
           (or (and (string/has-prefix? "\"" t) (string/has-suffix? "\"" t))
               (and (string/has-prefix? "'" t) (string/has-suffix? "'" t))))
    (string/slice t 1 -1)
    t))

(defn trim-list-marker [line]
  (def t (string/trim line))
  (if (string/has-prefix? "- " t)
    (string/trim (string/slice t 2))
    t))

(defn between [start end s]
  (when-let [i (string/find start s)]
    (def from (+ i (length start)))
    (when-let [j (string/find end s from)]
      (string/slice s from j))))

(defn line-source [line]
  (strip-quotes (trim-list-marker line)))

(defn indent-width [line]
  (var n 0)
  (while (and (< n (length line)) (= 32 (get line n)))
    (set n (+ n 1)))
  n)

(defn find-base-file [vault]
  (if-let [configured (os/getenv "OBSIDIAN_PUBLISH_BASE")]
    (if (string/has-prefix? "/" configured)
      configured
      (path/join vault configured))
    (do
      (var found nil)
      (each candidate default-base-candidates
        (when (and (nil? found) (fs/exists? (path/join vault candidate)))
          (set found (path/join vault candidate))))
      found)))

(defn file-in-folder [source]
  (or (between "file.inFolder(\"" "\")" source)
      (between "file.inFolder('" "')" source)))

(defn bracket-property [source]
  (or (between "note[\"" "\"]" source)
      (between "note['" "']" source)
      (between "file.properties[\"" "\"]" source)
      (between "file.properties['" "']" source)))

(defn dot-property [source]
  (cond
    (string/has-prefix? "note." source) (string/slice source 5)
    (string/has-prefix? "file." source) nil
    true source))

(defn true-filter-property [source]
  (when-let [idx (string/find "==" source)]
    (def left (string/trim (string/slice source 0 idx)))
    (def right (string/ascii-lower (string/trim (string/slice source (+ idx 2)))))
    (when (= right "true")
      (def prop (or (bracket-property left) (dot-property left)))
      (when (and prop (not= "" prop) (not (string/find "." prop)))
        (keyword prop)))))

(defn unique [xs]
  (def seen @{})
  (def out @[])
  (each x xs
    (when (and x (nil? (get seen x)))
      (put seen x true)
      (array/push out x)))
  out)

(defn parse-query [text]
  (def folders @[])
  (def excluded-folders @[])
  (def properties @[])
  (var not-indent nil)
  (each line (string/split "\n" text)
    (def indent (indent-width line))
    (def source (line-source line))
    (when (and not-indent (not= "" source) (<= indent not-indent) (not= "not:" source) (not= "- not:" source))
      (set not-indent nil))
    (when (or (= "not:" source) (= "- not:" source))
      (set not-indent indent))
    (def in-not? (and not-indent (> indent not-indent)))
    (when-let [folder (file-in-folder source)]
      (if in-not?
        (array/push excluded-folders folder)
        (array/push folders folder)))
    (when-let [prop (true-filter-property source)]
      (when (not in-not?)
        (array/push properties prop))))
  @{:folders (unique folders)
    :excluded-folders (unique excluded-folders)
    :properties (if (empty? properties)
                  default-publish-properties
                  (unique properties))})

(defn load-query [vault]
  (if-let [base-file (find-base-file vault)]
    (merge (parse-query (slurp base-file))
           @{:source base-file})
    (error (string "No Obsidian publish Base found. Set OBSIDIAN_PUBLISH_BASE or create one of: "
                   (string/join default-base-candidates ", ")))))

(defn regex-escape [s]
  (def specials "\\.^$|?*+()[]{}")
  (def buf @"")
  (each b (string s)
    (when (string/find (string b) specials)
      (buffer/push-byte buf 92))
    (buffer/push-byte buf b))
  (string buf))

(defn existing-roots [vault folders]
  (if (empty? folders)
    @[vault]
    (map |(path/join vault $) folders)))

(defn property-search-pattern [property]
  (string "^" (regex-escape (string property)) ":[ \t]*(true|yes|1|on)[ \t]*(#.*)?$"))

(defn rg-files [roots property]
  (def result (command/capture
                (array/concat @["rg" "-l"
                                "-g" "*.md"
                                "-g" "!.obsidian/**"
                                "-g" "!.trash/**"
                                "-g" "!.git/**"
                                (property-search-pattern property)]
                              roots)))
  (case (get result :code)
    0 (filter |(not= "" $) (string/split "\n" (get result :out)))
    1 @[]
    (error (string "base-backed note search failed:\n" (get result :err)))))

(defn in-folder? [rel folder]
  (or (= rel folder)
      (string/has-prefix? (string folder "/") rel)
      (string/find (string "/" folder "/") (string "/" rel))))

(defn excluded-file? [query vault file]
  (def rel (path/relative vault file))
  (var excluded? false)
  (each folder (get query :excluded-folders @[])
    (when (in-folder? rel folder)
      (set excluded? true)))
  excluded?)

(defn matching-files [vault query]
  (def roots (existing-roots vault (get query :folders @[])))
  (def files @[])
  (when (not (empty? roots))
    (each property (get query :properties default-publish-properties)
      (array/concat files (rg-files roots property))))
  (sort (filter |(not (excluded-file? query vault $)) (unique files))))
