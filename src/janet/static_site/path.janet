# Small path helpers for the static-site library. Paths are normalized to
# forward slashes because the site targets URLs and Unix-like build hosts.

(defn trim-leading-slashes [p]
  (var out p)
  (while (string/has-prefix? "/" out)
    (set out (string/slice out 1)))
  out)

(defn trim-trailing-slashes [p]
  (var out p)
  (while (and (> (length out) 1) (string/has-suffix? "/" out))
    (set out (string/slice out 0 -1)))
  out)

(defn normalize [p]
  (def absolute? (string/has-prefix? "/" p))
  (def parts (string/split "/" p))
  (def kept @[])
  (each part parts
    (when (and (not= part "") (not= part "."))
      (if (= part "..")
        (array/pop kept)
        (array/push kept part))))
  (def joined (string/join kept "/"))
  (if absolute?
    (string "/" joined)
    joined))

(defn join [& parts]
  (def clean @[])
  (each part parts
    (when (and part (not= (string part) ""))
      (array/push clean (string part))))
  (if (empty? clean)
    ""
    (normalize (string/join clean "/"))))

(defn basename [p]
  (def parts (string/split "/" (trim-trailing-slashes p)))
  (if (empty? parts) p (last parts)))

(defn dirname [p]
  (def trimmed (trim-trailing-slashes p))
  (def idxs (string/find-all "/" trimmed))
  (if (empty? idxs)
    ""
    (let [idx (last idxs)]
      (if (= idx 0) "/" (string/slice trimmed 0 idx)))))

(defn extname [p]
  (def base (basename p))
  (def idxs (string/find-all "." base))
  (if (empty? idxs)
    ""
    (string/slice base (last idxs))))

(defn strip-ext [p]
  (def ext (extname p))
  (if (= ext "") p (string/slice p 0 (- (length p) (length ext)))))

(defn relative [root p]
  (def root* (trim-trailing-slashes (normalize root)))
  (def p* (normalize p))
  (def prefix (string root* "/"))
  (if (string/has-prefix? prefix p*)
    (string/slice p* (length prefix))
    p*))

(defn url-join [& parts]
  (string "/" (trim-leading-slashes (apply join parts))))
