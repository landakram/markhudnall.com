(ns markhudnall.core
  (:require [markhudnall.footnotes :as footnotes]
            [markhudnall.life :as life]))

(enable-console-print!)

(defn mount-all! [selector mount!]
  (doseq [el (array-seq (.querySelectorAll js/document selector))]
    (mount! el)))

(defn init! []
  (mount-all! "[data-widget='life-background']" life/mount!)
  (mount-all! "[data-widget='footnotes']" footnotes/mount!))

(init!)
