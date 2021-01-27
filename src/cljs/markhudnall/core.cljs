(ns markhudnall.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [dommy.core :refer [sel1]])
  (:require [cljs.core.async :refer [chan put! <! timeout]]
            [dommy.core :as dommy]
            [clojure.set]
            [reagent.dom :as dom]
            [reagent.core :as r]
            ["tippy.js" :default tippy]
            ))

(enable-console-print!)

(defn build-initial-grid [size alive?]
  (into #{} (for [x (range size)
                  y (range size)
                  :when (alive? x y)]
              [x y])))

(def number-of-rows 110)
(def cell-size 5)

(defn rand-bool [& args] (zero? (rand-int 5)))

(defonce state (r/atom #{}))

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

(defonce render-chan (chan))
(defonce grid-chan (chan))

(defn printr [v] 
  (println v)
  v)

(defn distinct-mapcat [& args]
  (-> (apply mapcat args)
      set))

(defn handle-canvas-click [e]
  (let [target (.-target e)
        x (.-pageX e)
        y (.-pageY e)
        closest-cell-x (-> x
                           (/ cell-size)
                           js/Math.floor)
        closest-cell-y (-> y
                           (/ cell-size)
                           js/Math.floor)

        cell [closest-cell-x closest-cell-y]
        surrounding-cells (->> cell 
                               (neighbors)
                               ((apply comp (repeat 4 #(distinct-mapcat neighbors %))))
                               (filter rand-bool))]
    (when (= (.-buttons e) 1)
      (swap! state #(clojure.set/union % (set surrounding-cells))))))


(defn game-of-life []
  (fn []
    (let [width (.-offsetWidth js/document.body)
          height (.-offsetHeight js/document.body)]
      [:svg {:width (str width) 
             :height (str height) 
             :viewBox (str "0 " "0 " width " " height)
             :on-mouse-down handle-canvas-click
             :on-mouse-move handle-canvas-click}
      (for [[x y] @state]
        [:rect {:key (str "x" x "y" y)
                :width cell-size
                :height cell-size
                :fill "#C3C3C3"
                :x (* x cell-size)
                :y (* y cell-size)}])])))

(defn hook-footnotes []
  (doseq [footnote-el (some-> (sel1 ".footnotes") .-childNodes (js/Array.from))]
    (let [footnote-ref (-> footnote-el .-lastChild .-hash sel1)
          hover-note (js/document.createElement "div")]

      (.add hover-note.classList "bg-gray-700" "p-4" "mx-4" "rounded-md" "shadow-md")
      (doseq [c (-> footnote-el .-childNodes js/Array.from)]
        (.appendChild hover-note (.cloneNode c true)))

      (tippy footnote-ref #js {:content hover-note
                               :interactive true
                               :arrow false
                               :duration #js [200 200]
                               :maxWidth 720
                               :allowHTML true}))))

(hook-footnotes)

(dom/render [game-of-life] (sel1 ".life-canvas"))

(def wait-time 100)
(defonce game (go-loop []
  (<! (timeout wait-time))
  (swap! state build-grid)
  (recur)))

