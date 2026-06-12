(ns markhudnall.footnotes
  (:require ["tippy.js" :default tippy]))

(defn query [selector]
  (.querySelector js/document selector))

(defn mobile-tooltip-target? []
  (or (<= (.-innerWidth js/window) 640)
      (and (.-matchMedia js/window)
           (.-matches (.matchMedia js/window "(hover: none)")))))

(defn mount! [root]
  (doseq [footnote-el (array-seq (.-children root))]
    (let [backref (.querySelector footnote-el "a[href^='#fnref']")
          footnote-ref (some-> backref .-hash query)
          hover-note (js/document.createElement "div")]
      (when footnote-ref
        (.add hover-note.classList "footnote-tooltip" "bg-gray-700" "p-4" "rounded-md" "shadow-md")
        (doseq [c (-> footnote-el .-childNodes js/Array.from)]
          (.appendChild hover-note (.cloneNode c true)))

        (let [instance (tippy footnote-ref #js {:content hover-note
                                                :interactive true
                                                :arrow false
                                                :duration #js [200 200]
                                                :maxWidth 720
                                                :allowHTML true})]
          (.addEventListener footnote-ref "mouseover" (fn [_] (.show instance)))
          (.addEventListener footnote-ref "focus" (fn [_] (.show instance)))
          (.addEventListener footnote-ref "mouseleave" (fn [_] (.hide instance)))
          (.addEventListener footnote-ref "blur" (fn [_] (.hide instance)))
          (.addEventListener footnote-ref "click"
                             (fn [e]
                               (when (mobile-tooltip-target?)
                                 (.preventDefault e)
                                 (if (.. instance -state -isVisible)
                                   (.hide instance)
                                   (.show instance))))))))))
