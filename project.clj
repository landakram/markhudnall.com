(defproject markhudnall.com "0.1.0-SNAPSHOT"
  :description "Source code for markhudnall.com"
  :url "http://markhudnall.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [stasis "2.4.0"]
                 [hiccup "1.0.5"]
                 [ring "1.7.1"]
                 [markdown-clj "1.10.0"]
                 [clj-time "0.15.1"]
                 [optimus "0.20.2"]
                 [ring/ring-headers "0.3.0"]]

  :ring {:handler markhudnall.core/app
         :auto-refresh? false}

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.15"]]

  :source-paths ["src/clj"]

  :profiles {:dev 
             {:plugins [[lein-ring "0.12.5"]]
              :dependencies [[ring/ring-mock "0.4.0"]
                             [ring/ring-devel "1.7.1"]
                             [cider/piggieback "0.4.1"]
                             [org.clojure/tools.nrepl "0.2.13"]
                             [pjstadig/humane-test-output "0.9.0"]
                             [org.clojure/clojurescript "1.10.339"]]
              :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}})
