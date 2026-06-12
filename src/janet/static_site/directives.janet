# Generic block directive extraction for Markdown documents.
#
# A block directive starts on its own line with a Janet-looking form prefixed by
# `@`, for example:
#
#   @(sketch :widening-circles :width 700)
#
# This module parses the form as data and dispatches to user-provided handlers;
# it never evals content.

(defn paren-balance [s]
  (- (length (string/find-all "(" s))
     (length (string/find-all ")" s))))

(defn directive-line? [line]
  (string/has-prefix? "@(" (string/trim line)))

(defn fence-line? [line]
  (def trimmed (string/trim line))
  (or (string/has-prefix? "```" trimmed)
      (string/has-prefix? "~~~" trimmed)))

(defn options-table [items]
  (def opts @{})
  (var i 0)
  (while (< i (length items))
    (def k (get items i))
    (def v (if (< (+ i 1) (length items)) (get items (+ i 1)) true))
    (put opts k v)
    (set i (+ i 2)))
  opts)

(defn parse-directive [source]
  (def trimmed (string/trim source))
  (when (not (string/has-prefix? "@" trimmed))
    (error (string "directive must start with @: " trimmed)))
  (def form (parse (string/slice trimmed 1)))
  (when (not (indexed? form))
    (error (string "directive must be a form: " trimmed)))
  form)

(defn dispatch [form handlers]
  (def name (string (get form 0)))
  (def handler (get handlers name))
  (when (nil? handler)
    (error (string "unknown directive: " name)))
  (handler form))

(defn extract [markdown handlers]
  (def lines (string/split "\n" markdown))
  (def out @[])
  (def replacements @{})
  (def assets @[])
  (var in-fence? false)
  (var i 0)
  (var n 0)
  (while (< i (length lines))
    (def line (get lines i))
    (if (fence-line? line)
      (do
        (set in-fence? (not in-fence?))
        (array/push out line)
        (set i (+ i 1)))
      (if (and (not in-fence?) (directive-line? line))
        (do
          (def collected @[])
          (var balance 0)
          (while (< i (length lines))
            (def directive-line (get lines i))
            (array/push collected directive-line)
            (set balance (+ balance (paren-balance directive-line)))
            (set i (+ i 1))
            (when (<= balance 0) (break)))
          (def source (string/join collected "\n"))
          (def form (parse-directive source))
          (def result (dispatch form handlers))
          (def token (string "SSGDIRECTIVETOKEN" n "TOKENEND"))
          (put replacements token (get result :html ""))
          (array/concat assets (get result :assets @[]))
          (array/push out "" token "")
          (set n (+ n 1)))
        (do
          (array/push out line)
          (set i (+ i 1))))))
  @{:markdown (string/join out "\n")
    :replacements replacements
    :assets assets})

(defn replace-placeholders [html replacements]
  (var out html)
  (eachp [token replacement] replacements
    (set out (string/replace-all (string "<p>" token "</p>") replacement out))
    (set out (string/replace-all token replacement out)))
  out)
