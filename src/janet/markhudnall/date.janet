(def month-names [nil "January" "February" "March" "April" "May" "June" "July" "August" "September" "October" "November" "December"])
(def month-short [nil "Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])
(def weekday-short ["Sun" "Mon" "Tue" "Wed" "Thu" "Fri" "Sat"])

(defn parse-int [s]
  (scan-number (string s)))

(defn require-part [label value source]
  (when (nil? value)
    (error (string "invalid date '" source "': missing " label)))
  value)

(defn pad2 [n]
  (if (< n 10) (string "0" n) (string n)))

(defn parse [s]
  (def parts (string/split " " (string/trim s)))
  (def ymd (string/split "-" (get parts 0)))
  (def hms (if (> (length parts) 1) (string/split ":" (get parts 1)) ["0" "0" "0"]))
  (def year (require-part "year" (parse-int (get ymd 0)) s))
  (def month (require-part "month" (parse-int (get ymd 1)) s))
  (def day (require-part "day" (parse-int (get ymd 2)) s))
  (def hour (require-part "hour" (parse-int (get hms 0)) s))
  (def minute (require-part "minute" (parse-int (get hms 1)) s))
  (def second (require-part "second" (parse-int (get hms 2)) s))
  @{:year year :month month :day day :hour hour :minute minute :second second
    :sort-key (string/format "%04d%02d%02d%02d%02d%02d" year month day hour minute second)})

(defn path-date [d]
  (string/format "%04d/%02d/%02d" (get d :year) (get d :month) (get d :day)))

(defn iso-date [d]
  (string/format "%04d-%02d-%02d" (get d :year) (get d :month) (get d :day)))

(defn display [d]
  (string (get month-names (get d :month)) " " (get d :day) ", " (get d :year)))

(defn leap? [y]
  (or (and (= 0 (% y 4)) (not= 0 (% y 100))) (= 0 (% y 400))))

(defn weekday-index [d]
  # Sakamoto's algorithm. 0 = Sunday.
  (def t [0 3 2 5 0 3 5 1 4 6 2 4])
  (var y (get d :year))
  (def m (get d :month))
  (when (< m 3) (set y (- y 1)))
  (% (+ y (math/floor (/ y 4)) (- (math/floor (/ y 100))) (math/floor (/ y 400)) (get t (- m 1)) (get d :day)) 7))

(defn rss-date [d]
  (string (get weekday-short (weekday-index d)) ", "
          (pad2 (get d :day)) " "
          (get month-short (get d :month)) " "
          (get d :year) " "
          (pad2 (get d :hour)) ":" (pad2 (get d :minute)) ":" (pad2 (get d :second)) " +0000"))

(defn older-than-years? [d years]
  (def now-year (get (os/date) :year))
  (< (get d :year) (- now-year years)))
