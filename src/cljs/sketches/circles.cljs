(ns sketches.circles
  (:require [reagent.core :as r]
            [quil.core :as q :include-macros true]))



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
   :mode :forward
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

(def x-mag 3)
(def y-mag 3)

(defn update-state [state]
  #_(when (<= (:diameter state) 0)
    ((:pause state)))

  (cond
    (in? [:forward :first-run] (:mode state)) 
    (let [prev-mode (:mode state)
          new-mode
          (if (<= (:diameter state) 0)
            (if (= prev-mode :forward) :reverse :forward)
            prev-mode)] 
      (merge state
             {:diameter (- (:diameter state) 3)
              :mode new-mode
              :num (drunk-walk (:num state) 1)
              :fill {:r (new-fill-color (get-in state [:fill :r]))
                     :g (new-fill-color (get-in state [:fill :g]))
                     :b (new-fill-color (get-in state [:fill :b]))}
              :x (drunk-walk (:x state) x-mag)
              :y (drunk-walk (:y state) y-mag)}))
    (= (:mode state) :reverse)
    (let [prev-mode (:mode state)
          new-mode
          (if (>= (:diameter state) (:diameter (initial-state)))
            (if (= prev-mode :forward) :reverse :forward)
            prev-mode)]
      (merge state 
             {:diameter (+ (:diameter state) 3)
              :mode new-mode
              :num (drunk-walk (:num state) 1)
              :fill {:r (new-fill-color (get-in state [:fill :r]))
                     :g (new-fill-color (get-in state [:fill :g]))
                     :b (new-fill-color (get-in state [:fill :b]))}
              :x (drunk-walk (:x state) x-mag)
              :y (drunk-walk (:y state) y-mag)})
      )
    ))

(defn draw-state [state]
  (do
    (cond
      (= (:mode state) :reverse)
      (do
        (q/no-fill)
        (q/stroke (get-in state [:fill :r])
                  (get-in state [:fill :g])
                  (get-in state [:fill :b]))
        (q/stroke-weight 8))
      (= (:mode state) :first-run)
      (do
        (q/stroke-weight 0.5)
        (q/fill (get-in state [:fill :r])
                (get-in state [:fill :g])
                (get-in state [:fill :b])))
      (= (:mode state) :forward)
      (do
        (q/stroke-weight 8)
        (q/stroke (get-in state [:fill :r])
                  (get-in state [:fill :g])
                  (get-in state [:fill :b]))))
    (q/ellipse (:x state) (:y state) (:diameter state) (:diameter state))))

;; Uncomment to reset the sketch:

;; (run-sketch "sketches-circles")


