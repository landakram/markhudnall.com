(import ../src/janet/static_site/command :as command)
(import ../src/janet/static_site/fs :as fs)
(import ../src/janet/markhudnall/site :as site)

(defn clean-generated []
  (fs/remove-tree "resources/public/js/cljs-runtime")
  (when (fs/exists? "resources/public/js/manifest.edn")
    (os/rm "resources/public/js/manifest.edn"))
  (each file (fs/list-files-recursive "resources/public/js")
    (when (string/has-suffix? ".js.map" file)
      (os/rm file))))

(clean-generated)
(command/run! ["npx" "@tailwindcss/cli" "-i" "resources/src/main.css" "-o" "resources/public/css/main.css" "--minify"])
(command/run! ["sh" "-c" "if [ -z \"${JAVA_HOME:-}\" ] && [ -d /opt/homebrew/opt/openjdk ]; then export JAVA_HOME=/opt/homebrew/opt/openjdk; export PATH=\"$JAVA_HOME/bin:$PATH\"; fi; npx shadow-cljs release app"])
(site/export)
