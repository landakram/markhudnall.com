(ns sketches.mount
  (:require [goog.object :as gobj]))

(defn parse-int [s default]
  (let [parsed (js/parseInt s 10)]
    (if (js/isNaN parsed) default parsed)))

(defn parse-bool [s default]
  (cond
    (= s "true") true
    (= s "false") false
    (nil? s) default
    :else default))

(defn dataset [el]
  (let [d (.-dataset el)]
    {:sketch (gobj/get d "sketch")
     :width (parse-int (gobj/get d "width") nil)
     :height (parse-int (gobj/get d "height") nil)
     :auto-run (parse-bool (gobj/get d "autoRun") false)}))

(defn mount-all! [sketch-name mount!]
  (doseq [el (array-seq (.querySelectorAll js/document (str "[data-sketch='" sketch-name "']")))]
    (when-not (gobj/get el "__markhudnallSketchMounted")
      (gobj/set el "__markhudnallSketchMounted" true)
      (mount! el (dataset el)))))
