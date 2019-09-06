(ns sketches.circles
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.events :as events]
            [goog.events.EventType :as EventType]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defonce my-state (atom {}))


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
  (q/frame-rate 60)
  (q/stroke 0)
  (q/stroke-weight 0.5)
  ;; (q/no-stroke)
  (q/background 240)
  (q/no-fill)
  (initial-state))

(defn new-fill-color [prev-val]
  (let [new-val (drunk-walk prev-val 50)]
    (max 0 (min 255 new-val))))

(defn in? 
  "true if coll contains elm"
  [coll elm]  
  (some #(= elm %) coll))

(def x-mag (r/atom 5))
(def y-mag (r/atom 5))

(defonce mode (r/atom :forward))
(defn update-state [state]
  #_(when (<= (:diameter state) 0)
      (reset! running? false))

  (cond
    (in? [:forward :first-run] @mode) 
    (do
      (when (<= (:diameter state) 0)
        (swap! mode (fn [prev-mode] (if (= prev-mode :forward) :reverse :forward))))
      {:diameter (- (:diameter state) 3)
       :num (drunk-walk (:num state) 1)
       :fill {:r (new-fill-color (get-in state [:fill :r]))
              :g (new-fill-color (get-in state [:fill :g]))
              :b (new-fill-color (get-in state [:fill :b]))}
       :x (drunk-walk (:x state) @x-mag)
       :y (drunk-walk (:y state) @y-mag)}
      )
    (= @mode :reverse)
    (do
      (when (>= (:diameter state) (:diameter (initial-state)))
        (swap! mode (fn [prev-mode] (if (= prev-mode :forward) :reverse :forward))))
      {:diameter (+ (:diameter state) 3)
       :num (drunk-walk (:num state) 1)
       :fill {:r (new-fill-color (get-in state [:fill :r]))
              :g (new-fill-color (get-in state [:fill :g]))
              :b (new-fill-color (get-in state [:fill :b]))}
       :x (drunk-walk (:x state) @x-mag)
       :y (drunk-walk (:y state) @y-mag)}
      )
    ))

(defn draw-state [state]
  (when @running?
    (do
      ;; (js/console.log (clj->js state))
      ;; (js/console.log (clj->js (:fill state)))
      (cond
        (= @mode :reverse)
        (do
          (q/no-fill)
          (q/stroke (get-in state [:fill :r])
                    (get-in state [:fill :g])
                    (get-in state [:fill :b]))
          (q/stroke-weight 8))
        (= @mode :first-run)
        (do
          (q/stroke-weight 0.5)
          (q/fill (get-in state [:fill :r])
                  (get-in state [:fill :g])
                  (get-in state [:fill :b])))
        (= @mode :forward)
        (do
          (q/stroke-weight 8)
          (q/stroke (get-in state [:fill :r])
                  (get-in state [:fill :g])
                  (get-in state [:fill :b]))))
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

(defn canvas [{:keys [run-sketch-fn width height]}]
  (r/create-class
    {:component-did-mount
     (fn [component]
       (let [node (r/dom-node component)]
         (swap! sketch-args (fn [] {:host node :w width :h height}))
         (run-sketch-fn @sketch-args)))

     :render
     (fn []
       [:div.canvas])}))

(defn my-run-sketch-fn [sketch-args]
  (run-it (:host sketch-args) (:w sketch-args) (:h sketch-args)))

;; Uncomment to reset the sketch:

;; (run-sketch "sketches-circles")


