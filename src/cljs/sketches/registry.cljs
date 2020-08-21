(ns sketches.registry
  (:require [reagent.core :as r]
            [sketches.sketch :as sketch]))

(defonce sketches (atom []))

(defn ^:export run-sketches []
  (doseq [sketch @sketches]
    (sketch/mount-root sketch)))

(defn register-sketch! [sketch]
  (swap! sketches #(conj % sketch)))
