(defproject markhudnall.com "0.1.0-SNAPSHOT"
  :description "Source code for markhudnall.com"
  :url "http://markhudnall.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [stasis "2.2.2"]
                 [ring "1.4.0"]
                 [hiccup "1.0.5"]
                 [markdown-clj "0.9.82"]
                 [clj-time "0.11.0"]
                 [optimus "0.18.3"]]
  :ring {:handler markhudnall.core/app
         :auto-refresh? true}
  :aliases {"build-site" ["run" "-m" "markhudnall.core/export"]}
  :profiles {:dev {:plugins [[lein-ring "0.9.7"]]}})
