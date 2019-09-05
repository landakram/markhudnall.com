(ns sketches.circles
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.events :as events]
            [goog.events.EventType :as EventType]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defonce sketch-args (r/atom nil))
(defonce running? (r/atom true))
(defonce ran-first? (r/atom true))

(defn center-x []
  (/ (q/width) 2))

(defn center-y []
  (/ (q/width) 2))

(defn p-r [val]
  "Print and return."
  (js/console.log (clj->js val))
  val)

(defn drunk-walk [val magnitude]
  (let [operator #(if (< (rand) 0.5) + -)]
    ((operator) val (* magnitude (q/noise val)))))

(defn initial-state []
  {:diameter (* 1.5 (q/height))
   :num (drunk-walk 1000 1)
   :fill {:r (rand 255)
          :g (rand 255)
          :b (rand 255)}
   :x (center-x)
   :y (center-y)})

(defn setup []
  (q/smooth)
  (q/frame-rate 30)
  (q/stroke 0)
  (q/stroke-weight 0.5)
  ;; (q/no-stroke)
  (q/background 240)
  (q/no-fill)
  (initial-state))

(defn new-fill-color [prev-val]
  (let [new-val (drunk-walk prev-val 50)]
    (max 0 (min 255 new-val))))

(defn update-state [state]
  #_(when (<= (:diameter state) 0)
    (reset! running? false))

  (if (<= (:diameter state) 0)
    (initial-state)
    {:diameter (- (:diameter state) 3)
     :num (drunk-walk (:num state) 1)
     :fill {:r (new-fill-color (get-in state [:fill :r]))
            :g (new-fill-color (get-in state [:fill :g]))
            :b (new-fill-color (get-in state [:fill :b]))}
     :x (drunk-walk (:x state) 5)
     :y (drunk-walk (:y state) 5)}))

(defn draw-state [state]
  (when @running?
    (do
      ;; (js/console.log (clj->js state))
      ;; (js/console.log (clj->js (:fill state)))
      (q/fill (get-in state [:fill :r])
              (get-in state [:fill :g])
              (get-in state [:fill :b]))
      (q/ellipse (:x state) (:y state) (:diameter state) (:diameter state)))))

(defn run-it [host w h]
  (reset! sketch-args {:host host :w w :h h})
  (q/defsketch circles
     :host host
     :size [w h]
     :setup setup
     :update update-state
     :draw draw-state
     ;; :mouse-clicked (fn [] (run-sketch host))
     :middleware [m/fun-mode]))

(defn canvas [run-count]
  (r/create-class
    {:component-did-mount
     (fn [component]
       (let [node (r/dom-node component)
             width 700
             height 750]
         (run-it node width height)))
     :render
     (fn []
       [:div.canvas])}))

(defn sketch []
  [:div.sketch
    [:button
     {:class ["play-button"
              (when @running? "hidden")
              (when (not @ran-first?) "first-time")]
      :on-click (fn []
                  (js/console.log @running?)
                  (js/console.log @ran-first?)
                  (js/console.log @sketch-args)
                  (reset! running? true)
                  (reset! ran-first? true)
                  (run-it (:host @sketch-args) (:w @sketch-args) (:h @sketch-args)))}
     [:span "▶"]]
    [canvas]])

(defn mount-root [host]
  (r/render [sketch] (.getElementById js/document host)))

(defn ^:export run-sketch [host]
  (mount-root host))

;; Uncomment to reset the sketch:

;; (run-sketch "sketches-circles")


