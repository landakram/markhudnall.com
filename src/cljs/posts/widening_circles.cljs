(ns posts.widening-circles
  (:require [sketches.registry :as registry]
            [sketches.circles :as circles]))

(registry/register-sketch! {:id :circles2
                            :host "sketches-circles"
                            :width 700
                            :height 750
                            :auto-run true
                            :draw-state circles/draw-state
                            :update-state circles/update-state
                            :setup circles/setup})

(registry/run-sketches)


