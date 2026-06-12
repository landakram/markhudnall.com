(defn escape [s]
  (def s* (string s))
  (string/replace-all "\"" "&quot;"
    (string/replace-all "'" "&apos;"
      (string/replace-all ">" "&gt;"
        (string/replace-all "<" "&lt;"
          (string/replace-all "&" "&amp;" s*))))))

(defn tag [name content]
  (string "<" name ">" (escape content) "</" name ">"))

(defn raw-tag [name content]
  (string "<" name ">" content "</" name ">"))
