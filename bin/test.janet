#!/usr/bin/env janet

(import ../src/janet/static_site/bases :as bases)
(import ../src/janet/static_site/fs :as fs)
(import ../src/janet/static_site/path :as path)
(import ../src/janet/markhudnall/obsidian :as content)

(defn assert= [expected actual label]
  (when (not= expected actual)
    (error (string label ": expected " expected ", got " actual))))

(defn assert-array= [expected actual label]
  (assert= (length expected) (length actual) (string label " length"))
  (for i 0 (length expected)
    (assert= (get expected i) (get actual i) (string label " item " i))))

(defn temp-dir []
  (def dir (path/join ".build/tmp" (string "test-vault-" (os/getpid) "-" (math/floor (* 1000000000 (math/random))))))
  (fs/ensure-dir dir)
  dir)

(defn write [file contents]
  (fs/write-file file contents))

(defn contains? [xs x]
  (var found? false)
  (each item xs
    (when (= item x)
      (set found? true)))
  found?)

(defn contains-string? [s needle]
  (not (nil? (string/find needle s))))

(defn expect-error [label f expected]
  (var message nil)
  (try
    (f)
    ([err] (set message (string err))))
  (when (nil? message)
    (error (string label ": expected error")))
  (when (not (contains-string? message expected))
    (error (string label ": expected error containing " expected ", got " message))))

(defn test-base-query []
  (def q (bases/parse-query "filters:\n  and:\n    - file.inFolder(\"Website\")\n    - publish == true\n"))
  (assert-array= @["Website"] (get q :folders) "base folders")
  (assert-array= @[:publish] (get q :properties) "base publish property")
  (def all-vault-q (bases/parse-query "filters:\n  and:\n    - publish == true\n    - not:\n      - file.inFolder(\"Templates\")\n"))
  (assert-array= @[] (get all-vault-q :folders) "all-vault base folders")
  (assert-array= @["Templates"] (get all-vault-q :excluded-folders) "all-vault excluded folders")
  (assert-array= @[:publish] (get all-vault-q :properties) "all-vault base publish property"))

(defn test-load-content []
  (def vault (temp-dir))
  (fs/ensure-dir (path/join vault "Website" "Posts"))
  (fs/ensure-dir (path/join vault "Website" "Pages"))
  (fs/ensure-dir (path/join vault "Templates"))
  (write (path/join vault "Website" "Public.base")
         "filters:\n  and:\n    - publish == true\n    - not:\n      - file.inFolder(\"Templates\")\n")
  (write (path/join vault "Website" "Pages" "Bio.md")
         "---\npublish: true\ntype: page\ntitle: Bio\nwebsite-role: bio\n---\n\nHello [[Test Post|post]] and [[Private]].\n")
  (write (path/join vault "Website" "Pages" "Projects.md")
         "---\npublish: true\ntype: page\ntitle: Projects\nwebsite-role: projects\n---\n\nProjects.\n")
  (write (path/join vault "Website" "Pages" "Elsewhere.md")
         "---\npublish: true\ntype: page\ntitle: Elsewhere\nwebsite-role: elsewhere\n---\n\nElsewhere.\n")
  (write (path/join vault "Website" "Posts" "Test Post.md")
         "---\npublish: true\ntype: post\ntitle: Test Post\ndate: 2024-01-02\nslug: test-post\n---\n\nBody.\n")
  (write (path/join vault "Random Public Post.md")
         "---\npublish: true\ntype: post\ntitle: Random Public Post\ndate: 2024-01-04\nslug: random-public-post\n---\n\nBody.\n")
  (write (path/join vault "Templates" "Public Post Template.md")
         "---\npublish: true\ntype: post\ntitle: \"{{title}}\"\ndate: \"{{date}}\"\n---\n\n")
  (write (path/join vault "Website" "Posts" "Private.md")
         "---\npublish: false\ntype: post\ntitle: Private\ndate: 2024-01-03\nslug: private\n---\n\nNope.\n")
  (def old-vault (os/getenv "OBSIDIAN_VAULT"))
  (os/setenv "OBSIDIAN_VAULT" vault)
  (def loaded (content/load-content @{}))
  (assert= 2 (length (get loaded :posts)) "public post count")
  (assert= 3 (length (get loaded :pages)) "public page count")
  (def titles (map |(get-in $ [:metadata :title]) (get loaded :posts)))
  (when (not (contains? titles "Test Post"))
    (error "missing Website post"))
  (when (not (contains? titles "Random Public Post"))
    (error "missing random published post"))
  (def bio (get-in loaded [:pages-by-role :bio]))
  (when (not (contains-string? (get bio :html) "<a class=\"internal-link\" href=\"/2024/01/02/test-post/\">post</a>"))
    (error "public wiki link did not resolve"))
  (when (not (contains-string? (get bio :html) "class=\"internal-link is-unresolved\""))
    (error "private wiki link did not render unresolved"))
  (when (not= 1 (length (get loaded :warnings)))
    (error "expected one unresolved wiki-link warning"))
  (if old-vault
    (os/setenv "OBSIDIAN_VAULT" old-vault)
    (os/setenv "OBSIDIAN_VAULT" ""))
  (fs/remove-tree vault))

(defn test-duplicate-url-validation []
  (def vault (temp-dir))
  (fs/ensure-dir (path/join vault "Website"))
  (write (path/join vault "Website" "Public.base")
         "filters:\n  and:\n    - publish == true\n")
  (write (path/join vault "One.md")
         "---\npublish: true\ntype: post\ntitle: One\ndate: 2024-01-02\nslug: same\n---\n\nBody.\n")
  (write (path/join vault "Two.md")
         "---\npublish: true\ntype: post\ntitle: Two\ndate: 2024-01-02\nslug: same\n---\n\nBody.\n")
  (write (path/join vault "Bio.md")
         "---\npublish: true\ntype: page\ntitle: Bio\nwebsite-role: bio\n---\n\nBio.\n")
  (write (path/join vault "Projects.md")
         "---\npublish: true\ntype: page\ntitle: Projects\nwebsite-role: projects\n---\n\nProjects.\n")
  (write (path/join vault "Elsewhere.md")
         "---\npublish: true\ntype: page\ntitle: Elsewhere\nwebsite-role: elsewhere\n---\n\nElsewhere.\n")
  (def old-vault (os/getenv "OBSIDIAN_VAULT"))
  (os/setenv "OBSIDIAN_VAULT" vault)
  (expect-error "duplicate URLs" (fn [] (content/load-content @{})) "duplicate URL")
  (if old-vault
    (os/setenv "OBSIDIAN_VAULT" old-vault)
    (os/setenv "OBSIDIAN_VAULT" ""))
  (fs/remove-tree vault))

(test-base-query)
(test-load-content)
(test-duplicate-url-validation)
(print "Tests passed")
