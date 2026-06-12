(import ./path :as path)

(defn exists? [p]
  (not (nil? (os/stat p))))

(defn directory? [p]
  (= :directory (os/stat p :mode)))

(defn file? [p]
  (= :file (os/stat p :mode)))

(defn ensure-dir [dir]
  (when (and dir (not= dir "") (not (exists? dir)))
    (ensure-dir (path/dirname dir))
    (os/mkdir dir))
  dir)

(defn ensure-parent [file]
  (ensure-dir (path/dirname file)))

(defn write-file [file contents]
  (ensure-parent file)
  (spit file contents))

(defn copy-file [src dest]
  (ensure-parent dest)
  (def in (file/open src :rbn))
  (def out (file/open dest :wbn))
  (file/write out (file/read in :all))
  (:close in)
  (:close out)
  dest)

(defn list-files-recursive [dir]
  (def out @[])
  (when (exists? dir)
    (each name (os/dir dir)
      (when (and (not= name ".") (not= name ".."))
        (def p (path/join dir name))
        (cond
          (directory? p) (array/concat out (list-files-recursive p))
          (file? p) (array/push out p)))))
  out)

(defn remove-tree [p]
  (when (exists? p)
    (if (directory? p)
      (do
        (each name (os/dir p)
          (when (and (not= name ".") (not= name ".."))
            (remove-tree (path/join p name))))
        (os/rmdir p))
      (os/rm p))))

(defn snapshot [dir]
  (def files @{})
  (when (exists? dir)
    (each file (list-files-recursive dir)
      (put files (path/relative dir file) (string (slurp file)))))
  files)

(defn temp-file [prefix ext]
  (ensure-dir ".build/tmp")
  (path/join ".build/tmp" (string prefix "-" (os/getpid) "-" (math/floor (* 1000000000 (math/random))) ext)))
