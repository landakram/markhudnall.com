#!/usr/bin/env janet

(import ../src/janet/static_site/fs :as fs)
(import ../src/janet/static_site/path :as path)
(import ../src/janet/markhudnall/post :as legacy-post)

(def default-vault "/Users/mark/Documents/Obsidian/mh/mh")
(def vault (or (os/getenv "OBSIDIAN_VAULT") default-vault))
(def posts-dir (path/join vault "Website" "Posts"))
(def pages-dir (path/join vault "Website" "Pages"))
(def attachments-dir (path/join vault "Attachments" "Website"))

(defn yaml-quote [s]
  (def escaped (string/replace-all "\"" "\\\"" (string s)))
  (string "\"" escaped "\""))

(defn safe-filename [s]
  (def replaced (string/replace-all ":" " -" (string s)))
  (string/replace-all "/" "-" replaced))

(defn write-if-changed [file contents]
  (if (and (fs/exists? file) (= contents (string (slurp file))))
    false
    (do (fs/write-file file contents) true)))

(defn copy-if-changed [src dest]
  (if (and (fs/exists? dest) (= (string (slurp src)) (string (slurp dest))))
    false
    (do (fs/copy-file src dest) true)))

(defn rewrite-image-links [body copied]
  (def buf @"")
  (var i 0)
  (while (< i (length body))
    (if-let [start (string/find "![" body i)]
      (do
        (buffer/push-string buf (string/slice body i start))
        (if-let [close (string/find "](/img/" body start)]
          (if-let [end (string/find ")" body close)]
            (let [alt (string/slice body (+ start 2) close)
                  img-start (+ close 7)
                  img (string/slice body img-start end)
                  src (path/join "resources/public/img" img)]
              (when (fs/exists? src)
                (put copied img src))
              (buffer/push-string buf (if (= "" alt)
                                        (string "![[" img "]]" )
                                        (string "![[" img "|" alt "]]")))
              (set i (+ end 1)))
            (do
              (buffer/push-string buf (string/slice body start (+ start 2)))
              (set i (+ start 2))))
          (do
            (buffer/push-string buf (string/slice body start (+ start 2)))
            (set i (+ start 2)))))
      (do
        (buffer/push-string buf (string/slice body i))
        (set i (length body)))))
  (string buf))

(defn post-frontmatter [metadata slug]
  (def title (get metadata :title slug))
  (def date (get metadata :date))
  (def draft (get metadata :draft "false"))
  (string "---\n"
          "publish: true\n"
          "type: post\n"
          "title: " (yaml-quote title) "\n"
          "date: " (yaml-quote date) "\n"
          "slug: " (yaml-quote slug) "\n"
          "aliases:\n"
          "  - " (yaml-quote slug) "\n"
          (if (= "true" (string/ascii-lower (string draft))) "draft: true\n" "")
          "---\n\n"))

(defn migrate-post [file copied]
  (def split (legacy-post/split-metadata (slurp file)))
  (def metadata (get split :metadata))
  (def slug (path/strip-ext (path/basename file)))
  (def title (get metadata :title slug))
  (def body (rewrite-image-links (get split :body) copied))
  (def dest (path/join posts-dir (string (safe-filename title) ".md")))
  (write-if-changed dest (string (post-frontmatter metadata slug) body)))

(def page-roles
  @[{"file" "resources/md/bio.md" "title" "Bio" "role" "bio"}
    {"file" "resources/md/projects.md" "title" "Projects" "role" "projects"}
    {"file" "resources/md/elsewhere.md" "title" "Elsewhere" "role" "elsewhere"}
    {"file" "resources/md/short-bio.md" "title" "Short Bio" "role" "short-bio"}])

(defn page-frontmatter [title role]
  (string "---\n"
          "publish: true\n"
          "type: page\n"
          "title: " (yaml-quote title) "\n"
          "website-role: " (yaml-quote role) "\n"
          "---\n\n"))

(defn migrate-page [page]
  (def file (get page "file"))
  (when (fs/exists? file)
    (def title (get page "title"))
    (def role (get page "role"))
    (def dest (path/join pages-dir (string (safe-filename title) ".md")))
    (write-if-changed dest (string (page-frontmatter title role) (slurp file)))))

(defn run []
  (fs/ensure-dir posts-dir)
  (fs/ensure-dir pages-dir)
  (fs/ensure-dir attachments-dir)
  (def copied @{})
  (var post-count 0)
  (var changed-posts 0)
  (each file (sort (filter |(string/has-suffix? ".md" $) (fs/list-files-recursive "resources/posts")))
    (set post-count (+ post-count 1))
    (when (migrate-post file copied)
      (set changed-posts (+ changed-posts 1))))
  (var page-count 0)
  (var changed-pages 0)
  (each page page-roles
    (when (fs/exists? (get page "file"))
      (set page-count (+ page-count 1))
      (when (migrate-page page)
        (set changed-pages (+ changed-pages 1)))))
  (var copied-count 0)
  (var changed-assets 0)
  (eachp [name src] copied
    (set copied-count (+ copied-count 1))
    (when (copy-if-changed src (path/join attachments-dir name))
      (set changed-assets (+ changed-assets 1))))
  (print (string "Migrated posts: " post-count " (changed " changed-posts ")"))
  (print (string "Migrated pages: " page-count " (changed " changed-pages ")"))
  (print (string "Copied attachments: " copied-count " (changed " changed-assets ")"))
  (print (string "Vault: " vault)))

(run)
