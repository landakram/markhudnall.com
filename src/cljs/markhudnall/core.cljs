(ns markhudnall.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [dommy.core :refer [sel1]])
  (:require [cljs.core.async :refer [chan put! <! timeout]]
            [dommy.core :as dommy]))

(enable-console-print!)
(.log js/console "Hello world!")

(defn get-canvas [] 
  (first (array-seq (.getElementsByClassName js/document "life-canvas"))))


(def number-of-rows 100)

(defn get-cell-size []
  (let [canvas (get-canvas)
        canvas-width (.-width canvas)
        canvas-height (.-height canvas)
        canvas-size (max canvas-height canvas-width)]
    (/ canvas-size number-of-rows)))

(def cell-size (get-cell-size))

(defn rand-bool [& args] (zero? (rand-int 10)))

(defn render-cell!
  "Renders a cell on a canvas"
  [ctx x y value]
  (let [color (if value "rgb(0,200,0)" nil)]
    (when
      (set! (.-fillStyle ctx) color)
      (.fillRect ctx (* x cell-size) (* y cell-size) cell-size cell-size))))

(defn render-grid!
  "Given a grid, render it to the page."
  [canvas grid size]
  (let [canvas (get-canvas)
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-offsetWidth canvas) (.-offsetHeight canvas))
    (doseq [x (range size)
            y (range size)]
      (render-cell! ctx x y (grid [x y])))))

(defn neighbors
  "Returns a sequence of tuples that are neighbors of the given cell"
  [[x y]]
  (for [mx [-1 0 1]
        my [-1 0 1]
        :when (not= [mx my] [0 0])]
    [(+ x mx) (+ y my)]))


(defn build-grid [prev]
  (let [all-neighbors (mapcat neighbors prev)
        neighbor-count (frequencies all-neighbors)]
    (set (for [[cell count] neighbor-count
               :when (or (= count 3)
                         (and (= count 2)
                              (prev cell)))]
           cell))))

(defn build-initial-grid [size alive?]
  (into #{} (for [x (range size)
                  y (range size)
                  :when (alive? x y)]
              [x y])))

(defn render-game!
  "Recursively renders successive game states."
  [canvas game]
  (render-grid! canvas game number-of-rows))

(.setAttribute (get-canvas) "width" (str (.-offsetWidth js/document.body)))
(.setAttribute (get-canvas) "height" (str (.-offsetHeight js/document.body)))

(defonce render-chan (chan))
(defonce grid-chan (chan))

(defn animation-loop! [ch prev timestamp] 
  (let [diff (- timestamp prev)]
    (if (> diff 200)
      (do
        (put! ch timestamp)
        (.requestAnimationFrame js/window (partial animation-loop! ch timestamp)))
      (.requestAnimationFrame js/window (partial animation-loop! ch prev)))))

(defn handle-canvas-click [e]
  (let [canvas (.-target e)]
    (println "got " canvas)))

(defn loop-game! []
  (let [canvas (get-canvas)
        animation-ch (chan)
        starting-grid (build-initial-grid number-of-rows rand-bool)]
        ;starting-grid #{}]

    (dommy/listen! (sel1 :canvas) :click handle-canvas-click)

    (animation-loop! animation-ch 0 0)

    (put! grid-chan starting-grid)

    (go-loop [grid (<! render-chan)]
      (render-game! canvas grid)
      (recur (<! render-chan)))
    
    (go-loop [t (<! animation-ch) 
              grid (<! grid-chan)]
      (put! render-chan grid)
      (put! grid-chan (build-grid grid))
      (recur (<! animation-ch) (<! grid-chan)))))


;(listen (get-canvas) handle-canvas-click)

(defonce game (loop-game!))

;(let 
  ;(render-game! (get-canvas) grid))


