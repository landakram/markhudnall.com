(ns sketches.core
  (:require [markhudnall.core :as markhudnall]
            [reagent.core :as r]
            [sketches.registry :as registry]
            [sketches.circles :as circles]))

(registry/register-sketch! {:run-sketch-fn circles/my-run-sketch-fn
                            :host "sketches-circles"
                            :width 700
                            :height 750})
