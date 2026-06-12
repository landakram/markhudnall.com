(ns markhudnall.core
  (:require [markhudnall.footnotes :as footnotes]
            [markhudnall.life :as life]))

(enable-console-print!)

(defn mount-all! [selector mount!]
  (doseq [el (array-seq (.querySelectorAll js/document selector))]
    (try
      (mount! el)
      (catch :default e
        (.error js/console "Failed to mount widget" selector e)))))

(defn init! []
  (mount-all! "[data-widget='life-background']" life/mount!)
  (mount-all! "[data-widget='footnotes']" footnotes/mount!))

(init!)
