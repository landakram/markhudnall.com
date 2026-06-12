(import ./fs :as fs)

(defn run [args]
  (print (string "→ " (string/join args " ")))
  (flush)
  (os/execute args :px))

(defn run! [args]
  (print (string "→ " (string/join args " ")))
  (flush)
  (os/execute args :px))

(defn capture! [args]
  (def out-path (fs/temp-file "cmd-out" ".txt"))
  (def err-path (fs/temp-file "cmd-err" ".txt"))
  (def out (file/open out-path :wbn))
  (def err (file/open err-path :wbn))
  (def code (os/execute args :p {:out out :err err}))
  (:close out)
  (:close err)
  (def stdout (string (slurp out-path)))
  (def stderr (string (slurp err-path)))
  (os/rm out-path)
  (os/rm err-path)
  (when (not= code 0)
    (error (string "command failed (" code "): " (string/join args " ") "\n" stderr)))
  stdout)

(defn capture [args]
  (def out-path (fs/temp-file "cmd-out" ".txt"))
  (def err-path (fs/temp-file "cmd-err" ".txt"))
  (def out (file/open out-path :wbn))
  (def err (file/open err-path :wbn))
  (def code (os/execute args :p {:out out :err err}))
  (:close out)
  (:close err)
  (def stdout (string (slurp out-path)))
  (def stderr (string (slurp err-path)))
  (os/rm out-path)
  (os/rm err-path)
  @{:code code :out stdout :err stderr})
