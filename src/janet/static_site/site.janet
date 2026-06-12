(import ./path :as path)
(import ./fs :as fs)
(import ./assets :as assets)

(defn page-output-path [out route]
  (def route* (if (= route "/") "" (path/trim-leading-slashes route)))
  (if (or (= route "/") (string/has-suffix? "/" route))
    (path/join out route* "index.html")
    (path/join out route*)))

(defn render-page [page ctx]
  (cond
    (get page :render) ((get page :render) (merge ctx @{:page page}))
    (get page :content) (get page :content)
    true (error (string "page has no :render or :content: " (get page :path)))))

(defn write-pages [pages out ctx]
  (each page pages
    (def route (get page :path))
    (def dest (page-output-path out route))
    (fs/write-file dest (render-page page ctx))))

(defn diff-keys [old new pred]
  (def out @[])
  (eachp [k v] new
    (when (pred k v old)
      (array/push out k)))
  (sort out)
  out)

(defn report-differences [old new]
  (def added (diff-keys old new |(nil? (get $2 $0))))
  (def changed (diff-keys old new |(and (get $2 $0) (not= $1 (get $2 $0)))))
  (def removed @[])
  (eachp [k v] old
    (when (nil? (get new k)) (array/push removed k)))
  (sort removed)
  (print "Export complete:")
  (print (string "  added:   " (length added)))
  (each k added (print (string "    + " k)))
  (print (string "  changed: " (length changed)))
  (each k changed (print (string "    ~ " k)))
  (print (string "  removed: " (length removed)))
  (each k removed (print (string "    - " k))))

(defn copy-static-assets [assets out]
  (each asset assets
    (fs/copy-file (get asset :source)
                  (path/join out (path/trim-leading-slashes (get asset :path))))))


(defn export-site [site]
  (def out (get site :out "dist"))
  (def public-root (get site :public-root "resources/public"))
  (def pages (get site :pages @[]))
  (def old (fs/snapshot out))
  (fs/remove-tree out)
  (fs/ensure-dir out)
  (def manifest (assets/copy-public-assets public-root out (get site :assets-options @{})))
  (copy-static-assets (get site :static-assets @[]) out)
  (write-pages pages out @{:assets manifest :site site})
  (def new (fs/snapshot out))
  (report-differences old new)
  manifest)
