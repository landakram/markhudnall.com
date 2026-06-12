(ns posts.widening-circles
  (:require [sketches.mount :as mount]
            [sketches.sketch :as sketch]
            [sketches.circles :as circles]))

(defn args [{:keys [width height auto-run]}]
  {:id :widening-circles
   :width (or width 700)
   :height (or height 750)
   :auto-run auto-run
   :draw-state circles/draw-state
   :update-state circles/update-state
   :setup circles/setup})

(defn mount! [el opts]
  (sketch/mount-root el (args opts)))

(mount/mount-all! "widening-circles" mount!)


