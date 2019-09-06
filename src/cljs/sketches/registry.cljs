(ns sketches.registry
  (:require [reagent.core :as r]))

(defonce sketches (atom []))

(defn ^:export run-sketches []
  (doseq [sketch @sketches]
    (mount-root sketch)))

(defn register-sketch! [{:keys [host run-sketch-fn width height] :as sketch}]
  (swap! sketches #(conj % sketch)))
