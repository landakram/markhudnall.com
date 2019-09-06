(ns sketches.sketch
  (:require [reagent.core :as r]))

(defonce sketch-args (r/atom {}))
(defonce running? (r/atom false))
(defonce ran-first? (r/atom false))

(defn sketch [{:keys [run-sketch-fn width height state] :as args}]
  (let [{:keys [running? ran-first? sketch-args]} @state])
  [:div.sketch
    [:button
     {:class ["play-button"
              (when running? "hidden")
              (when (not ran-first?) "first-time")]
      :on-click (fn []
                  (swap! state #(update-in % [:running?] true))
                  (swap! state #(update-in % [:ran-first?] true))
                  (run-sketch-fn sketch-args))}
     [:span "▶"]]
    [canvas args]])

(defn empty-state []
  {:sketch-args {}
   :running? false
   :ran-first? false})

(defn mount-root [{:keys [host run-sketch-fn width height]}]
  (let [state (r/atom (empty-state))]
    (r/render [sketch {:run-sketch-fn run-sketch-fn
                       :width width
                       :height height
                       :state state}] (.getElementById js/document host))))
