(import ../static_site/obsidian :as obsidian)
(import ../static_site/obsidian_markdown :as obsidian-markdown)
(import ../static_site/path :as path)
(import ./date :as date)

(def default-vault "/Users/mark/Documents/Obsidian/mh/mh")

(defn vault-path []
  (or (os/getenv "OBSIDIAN_VAULT") default-vault))

(defn keyword-value [v]
  (keyword (string/ascii-lower (string/replace-all "_" "-" (string v)))))

(defn content-kind [note]
  (def metadata (get note :metadata @{}))
  (keyword-value (or (get metadata :kind) (get metadata :type) "note")))

(defn draft? [metadata]
  (obsidian/truthy? (get metadata :draft)))

(defn blank? [v]
  (or (nil? v) (= "" (string/trim (string v)))))

(defn add-error! [errors note msg]
  (array/push errors (string (get note :path "unknown note") ": " msg)))

(defn placeholder-slug? [v]
  (= "replace-with-url-slug" (string/trim (string v))))

(defn slug-for [note]
  (def metadata (get note :metadata @{}))
  (or (get metadata :slug)
      (path/strip-ext (path/basename (get note :path)))))

(defn normalize-post! [note]
  (def metadata (get note :metadata))
  (def raw-date (get metadata :date))
  (when (nil? raw-date)
    (error (string "published post missing date: " (get note :path))))
  (def parsed-date (date/parse (string raw-date)))
  (put metadata :date parsed-date)
  (put metadata :date-raw (string raw-date))
  (put metadata :title (get metadata :title (get note :title)))
  (put metadata :permalink (string (slug-for note) "/"))
  (put metadata :draft? (draft? metadata))
  (put note :kind :post)
  (put note :url (string "/" (date/path-date parsed-date) "/" (get metadata :permalink)))
  note)

(defn normalize-page! [note]
  (def metadata (get note :metadata))
  (put metadata :title (get metadata :title (get note :title)))
  (put metadata :draft? (draft? metadata))
  (put note :kind :page)
  (when-let [role (or (get metadata :website-role) (get metadata :role))]
    (put note :role (keyword-value role)))
  (when-let [slug (get metadata :slug)]
    (put note :url (path/url-join slug)))
  note)

(defn normalize-note! [note]
  (case (content-kind note)
    :post (normalize-post! note)
    :page (normalize-page! note)
    (normalize-page! note)))

(defn render-note! [note idx attachments warnings directive-handlers]
  (def static-assets @[])
  (def rendered
    (obsidian-markdown/render
      (get note :body)
      @{:directives directive-handlers
        :obsidian @{:note-index idx
                    :current-note note
                    :vault (get note :vault)
                    :attachments attachments
                    :assets static-assets
                    :warnings warnings
                    :resolve-note obsidian/resolve-note
                    :resolve-attachment obsidian/resolve-attachment
                    :attachment-output-dir "img"}}))
  (put note :html (get rendered :html))
  (put note :assets (get rendered :assets @[]))
  (put note :static-assets (obsidian/dedupe-assets static-assets))
  note)

(defn pages-by-role [pages]
  (def out @{})
  (each page pages
    (when-let [role (get page :role)]
      (put out role page)))
  out)

(defn all-static-assets [notes]
  (def assets @[])
  (each note notes
    (array/concat assets (get note :static-assets @[])))
  (obsidian/dedupe-assets assets))

(defn validate-raw-note! [note errors]
  (def metadata (get note :metadata @{}))
  (case (content-kind note)
    :post
    (do
      (when (blank? (get metadata :title))
        (add-error! errors note "public post missing required title"))
      (when (blank? (get metadata :date))
        (add-error! errors note "public post missing required date"))
      (when (placeholder-slug? (get metadata :slug ""))
        (add-error! errors note "public post still has placeholder slug")))
    nil))

(defn validate-raw-notes! [notes]
  (def errors @[])
  (each note notes
    (validate-raw-note! note errors))
  (when (not (empty? errors))
    (error (string "Content validation failed:\n- " (string/join errors "\n- ")))))

(defn validate-urls! [notes]
  (def errors @[])
  (def urls @{})
  (each note notes
    (when-let [url (get note :url)]
      (if-let [existing (get urls url)]
        (array/push errors (string "duplicate URL " url " for " (get existing :path) " and " (get note :path)))
        (put urls url note))))
  (when (not (empty? errors))
    (error (string "Content validation failed:\n- " (string/join errors "\n- ")))))

(def required-page-roles @[:bio :projects :elsewhere])

(defn validate-page-roles! [pages-by-role]
  (def errors @[])
  (each role required-page-roles
    (when (nil? (get pages-by-role role))
      (array/push errors (string "missing required page role: " role))))
  (when (not (empty? errors))
    (error (string "Content validation failed:\n- " (string/join errors "\n- ")))))

(defn load-content [directive-handlers]
  (def vault (vault-path))
  (def warnings @[])
  (def scan (obsidian/scan-published vault))
  (def raw-notes (get scan :notes))
  (def published (filter |(obsidian/published-for-query? (get scan :query) $) raw-notes))
  (validate-raw-notes! published)
  (def notes (map normalize-note! published))
  (validate-urls! notes)
  (def idx (obsidian/build-note-index notes warnings))
  (def attachments @{})
  (each note notes
    (render-note! note idx attachments warnings directive-handlers))
  (def posts (filter |(= :post (get $ :kind)) notes))
  (def pages (filter |(= :page (get $ :kind)) notes))
  (def roles (pages-by-role pages))
  (validate-page-roles! roles)
  (each warning warnings
    (print (string "Obsidian warning: " warning)))
  @{:vault vault
    :base-query (get scan :query)
    :notes notes
    :posts posts
    :pages pages
    :pages-by-role roles
    :static-assets (all-static-assets notes)
    :warnings warnings})
