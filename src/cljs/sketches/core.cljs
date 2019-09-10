(ns sketches.core
  (:require [markhudnall.core :as markhudnall]
            [reagent.core :as r]
            [sketches.registry :as registry]
            [sketches.circles :as circles]))

;; It would be nice to move these to the md file itself.
(registry/register-sketch! {:id :circles
                            :host "sketches-circles"
                            :width 700
                            :height 400
                            :draw-state circles/draw-state
                            :update-state circles/update-state
                            :setup circles/setup})

(registry/register-sketch! {:id :circles
                            :host "sketches-circles-2"
                            :width 700
                            :height 750
                            :draw-state circles/draw-state
                            :update-state circles/update-state
                            :setup circles/setup})
