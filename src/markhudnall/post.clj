(ns markhudnall.post
  (require [markdown.core :as markdown]
           [clj-time.format :as f]
            [clj-time.core :as t]
           [clojure.string :as string]))

(defn parse [[filename contents]]
  ; post => {:metadata {...} :html "..."}
  (let [post (markdown/md-to-html-string-with-meta contents :footnotes? true)
        metadata (:metadata post)
        ; {key [value]} => {key value}
        parsed-metadata (zipmap (keys metadata) (map first (vals metadata)))
        raw-date (:date parsed-metadata)
        parsed-date (f/parse raw-date)
        permalink (string/replace filename #"\.md$" "/")]
    (-> post 
        (assoc :metadata parsed-metadata)
        (assoc-in [:metadata :permalink] permalink)
        (assoc-in [:metadata :date] parsed-date))))

(defn parse-many [posts]
  (map parse posts))

(defn get-recent [posts] 
  (->> posts 
      (sort-by #(get-in % [:metadata :date]))
      reverse 
      (take 3)))

(defn get-full-path [post]
  (let [permalink (get-in post [:metadata :permalink])
        date (get-in post [:metadata :date])
        year (t/year date)
        month (t/month date)
        day (t/day date)]
    (str "/" year "/" month "/" day permalink)))
