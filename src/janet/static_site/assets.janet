(import ./path :as path)
(import ./fs :as fs)
(import ./command :as command)

(defn short-sha [file]
  (def out (command/capture! (if (os/which :macos)
                               ["shasum" "-a" "256" file]
                               ["sha256sum" file])))
  (string/slice out 0 12))

(defn default-include? [rel]
  (and
    (not (string/has-suffix? ".edn" rel))
    (not (string/find "/cljs-runtime/" (string "/" rel)))))

(defn default-fingerprint? [rel]
  (or (string/has-suffix? ".css" rel)
      (string/has-suffix? ".js" rel)))

(defn copy-public-assets
  "Copy public assets into `out`. Assets matching :fingerprint? are also
   copied to cache-busted paths and added to the returned manifest."
  [public-root out &opt opts]
  (def include? (or (get opts :include?) default-include?))
  (def fingerprint? (or (get opts :fingerprint?) default-fingerprint?))
  (def manifest @{})
  (each src (fs/list-files-recursive public-root)
    (def rel (path/relative public-root src))
    (when (include? rel)
      (def raw-dest (path/join out rel))
      (fs/copy-file src raw-dest)
      (when (fingerprint? rel)
        (def hash (short-sha src))
        (def dir (path/dirname rel))
        (def hashed-rel (if (= dir "")
                          (path/join hash (path/basename rel))
                          (path/join dir hash (path/basename rel))))
        (fs/copy-file src (path/join out hashed-rel))
        (put manifest (path/url-join rel) (path/url-join hashed-rel)))))
  manifest)

(defn asset-url [ctx logical-path]
  (get (get ctx :assets) logical-path logical-path))
