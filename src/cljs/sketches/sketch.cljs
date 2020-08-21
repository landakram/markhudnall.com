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
       :update (fn [s]
                 (if (:running? @state)
                   (update-state s)
                   s))
       :draw (fn [s]
               (when (:running? @state)
                 (draw-state s)))
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

(defn empty-state [running?]
  {:canvas-node nil
   :running? running?
   :ran-first? running?})

(defn sketch [{:keys [id width height auto-run] :or {running? false} :as args}]
  (let [state (r/atom (empty-state auto-run))]
    (fn [{:keys [id width height] :as args}]
      (let [{:keys [running? ran-first?]} @state
            args (assoc args :state state)]
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
         [canvas args]]))))

(defn mount-root [args]
  (dom/render [sketch args]
              (.getElementById js/document (:host args))))
