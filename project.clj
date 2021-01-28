
(defproject markhudnall.com "0.1.0-SNAPSHOT"
  :description "Source code for markhudnall.com"
  :url "http://markhudnall.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.2"]
                 [stasis "2.5.0"]
                 [hiccup "2.0.0-alpha2"]
                 [ring "1.8.2"]
                 [clj-rss "0.2.6"]
                 [markdown-clj "1.10.5"]
                 [clj-time "0.15.2"]
                 [optimus "1.0.0-rc3"]
                 [ring-logger-timbre "0.7.6"]
                 [ring/ring-headers "0.3.0"]]

  :source-paths ["src/clj"]

  :repl-options {:init-ns markhudnall.core
                 :init (start-dev-server!)}

  :profiles {:dev 
             {:dependencies [[ring/ring-mock "0.4.0"]
                             [ring/ring-devel "1.8.2"]
                             [pjstadig/humane-test-output "0.10.0"]]}})
