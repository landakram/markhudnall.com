(ns markhudnall.post
  (:require [markdown.core :as markdown]
            [clj-time.format :as f]
            [clj-time.core :as t]
            [clojure.string :as string]))

(defn parse-metadata [metadata filename]
  (let [parsed-metadata (zipmap (keys metadata) (map first (vals metadata)))
        draft? (= (:draft parsed-metadata) "true")
        raw-date (:date parsed-metadata)
        parsed-date (f/parse raw-date)
        permalink (string/replace filename #"\.md$" "/")]
    (-> parsed-metadata
        (assoc :permalink permalink)
        (assoc :date parsed-date)
        (dissoc :draft)
        (assoc :draft? draft?))))

(defn parse [[filename contents]]
  ; post => {:metadata {...} :html "..."}
  (let [post (markdown/md-to-html-string-with-meta
              contents
              :footnotes? true
              :inhibit-separator "%")
        metadata (:metadata post)
        ; {key [value]} => {key value}
        parsed-metadata (parse-metadata metadata filename)]
    (-> post 
        (assoc :metadata parsed-metadata))))

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
        formatted-date (f/unparse (f/formatters :year-month-day) date)
        [year month day] (string/split formatted-date #"-")]
    (str "/" year "/" month "/" day permalink)))




