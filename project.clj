(defproject markhudnall.com "0.1.0-SNAPSHOT"
  :description "Source code for markhudnall.com"
  :url "http://markhudnall.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]
                 [org.clojure/core.async "0.2.374" :scope "provided"]
                 [stasis "2.3.0"]
                 [reagent "0.5.1"]
                 [ring "1.4.0"]
                 [hiccup "1.0.5"]
                 [markdown-clj "0.9.89"]
                 [clj-time "0.11.0"]
                 [figwheel "0.5.0-1"]
                 [cljsbuild "1.1.1"]
                 [optimus "0.18.3"]
                 [ring/ring-headers "0.1.3"]
                 [prismatic/dommy "1.1.0"]]

  :ring {:handler markhudnall.core/app
         :auto-refresh? false}

  :plugins [[lein-figwheel "0.5.0-1"] [lein-cljsbuild "1.1.1"]]

  :clean-targets ^{:protect false} [:target-path "resources/public/js/main.js" "resources/public/js/out" "resources/public/js/out-prod"]

  :aliases {"build-site" ["do" 
                          "clean"
                          ["cljsbuild" "once" "production"] 
                          ["run" "-m" "markhudnall.core/export"]]}

  :source-paths ["src" "src/cljs"]

  :profiles {:dev 
             {:plugins [[lein-ring "0.9.7"]
                        [lein-figwheel "0.5.0-1"]
                        [lein-cljsbuild "1.1.1"]]
              :dependencies [[ring/ring-mock "0.3.0"]
                             [ring/ring-devel "1.4.0"]
                             [lein-figwheel "0.5.0-1"]
                             [com.cemerick/piggieback "0.2.1"]
                             [org.clojure/tools.nrepl "0.2.11"]
                             [pjstadig/humane-test-output "0.7.0"]
                             [org.clojure/clojurescript "1.7.170"]]}}

  :cljsbuild {
    :builds [{:id "dev" 
              :source-paths ["src/cljs"]
              :figwheel true
              :compiler {:main "markhudnall.core"
                         :asset-path "/js/out"
                         :source-map true
                         :optimizations :none
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out" } }
             {:id "production"
              :source-paths ["src/cljs"]
              :compiler {:main "markhudnall.core"
                         :asset-path "/js/out"
                         :source-map "resources/public/js/main.js.map"
                         :optimizations :whitespace ;; Optimized by Optimus
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out-prod"}}]
  }

  :figwheel {:ring-handler markhudnall.core/app })
