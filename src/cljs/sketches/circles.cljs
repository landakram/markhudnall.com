(ns sketches.circles
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

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

(defn setup []
  (q/smooth)
  (q/frame-rate 30)
  (q/stroke 0)
  (q/stroke-weight 1)
  (q/background 240)
  (q/no-fill)
  {:diameter (* 1.5 (q/height))
   :num (drunk-walk 1000 1)
   :fill {:r (rand 255)
          :g (rand 255)
          :b (rand 255)}
   :x (center-x)
   :y (center-y)})

(defn new-fill-color [prev-val]
  (let [new-val (drunk-walk prev-val 50)]
    (max 0 (min 255 new-val))))


(defn update-state [state]
  {:diameter (- (:diameter state) 3)
   :num (drunk-walk (:num state) 1)
   :fill {:r (new-fill-color (get-in state [:fill :r]))
          :g (new-fill-color (get-in state [:fill :g]))
          :b (new-fill-color (get-in state [:fill :b]))}
   :x (drunk-walk (:x state) 5)
   :y (drunk-walk (:y state) 5)})

(defn draw-state [state]
  (if (>= (:diameter state) 0)
    (do
     ;; (js/console.log (clj->js state))
     ;; (js/console.log (clj->js (:fill state)))
     (q/fill (get-in state [:fill :r])
             (get-in state [:fill :g])
             (get-in state [:fill :b]))
     (q/ellipse (:x state) (:y state) (:diameter state) (:diameter state)))
    (q/no-loop)))

(defn ^:export run-sketch [host]
  (q/defsketch circles
    :host host
    :size [700 750]
    :setup setup
    :update update-state
    :draw draw-state
    :mouse-clicked (fn [] (run-sketch host))
    :middleware [m/fun-mode]))

;; Uncomment to reset the sketch:
;; (run-sketch "sketches-circles")


