(ns sketches.sketch
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn run-sketch [{:keys [id host width height state setup update-state draw-state] :as args}]
  (let [{:keys [running? ran-first? canvas-node]} @state]
    (let [pause #(swap! state assoc :running? false)]
      (q/sketch
       :host canvas-node
       :size [width height]
       ;; Make a `pause` fn available to state
       :setup (fn []
                (let [state (setup)]
                  (assoc state :pause pause)))
       :update update-state
       :draw (fn [state]
               (when running?
                 (draw-state state)))
       :middleware [m/fun-mode]))))


(defn canvas [{:keys [id run-sketch-fn width height state] :as args}]
  (r/create-class
    {:component-did-mount
     (fn [component]
       (let [node (dom/dom-node component)]
         (swap! state assoc :canvas-node node)
         (run-sketch args)))
     :render
     (fn []
       [:div.canvas])}))

(defn sketch [{:keys [id width height state] :as args}]
  (let [{:keys [running? ran-first?]} @state]
    [:div.sketch
     [:button
      {:class ["play-button"
               (when running? "hidden")
               (when (not ran-first?) "first-time")]
       :on-click (fn []
                   (swap! state assoc :running? true)
                   (swap! state assoc :ran-first? true)
                   (run-sketch args))}
      [:span "▶"]]
     [canvas args]]))

(defn empty-state []
  {:canvas-node nil
   :running? false
   :ran-first? false})

(defn mount-root [args]
  (let [state (r/atom (empty-state))]
    (dom/render [sketch (assoc args :state state)]
                (.getElementById js/document (:host args)))))
