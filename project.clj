(defproject markhudnall.com "0.1.0-SNAPSHOT"
  :description "Source code for markhudnall.com"
  :url "http://markhudnall.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.339" :scope "provided"]
                 [org.clojure/core.async "0.4.490" :scope "provided"]
                 [stasis "2.4.0"]
                 [reagent "0.8.1"]
                 [hiccup "1.0.5"]
                 [ring "1.7.1"]
                 [markdown-clj "1.10.0"]
                 [clj-time "0.15.1"]
                 [optimus "0.20.2"]
                 [quil "3.0.0"]
                 [ring/ring-headers "0.3.0"]
                 [prismatic/dommy "1.1.0"]]

  :ring {:handler markhudnall.core/app
         :auto-refresh? false}

  :plugins [[lein-figwheel "0.5.18"] [lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.15"]]

  :clean-targets ^{:protect false} [:target-path
                                    "resources/public/js/main.js"
                                    "resources/public/js/out"
                                    "resources/public/js/out-prod"
                                    "resources/public/js/posts/"
                                    ]

  :aliases {"build-site" ["do" 
                          "clean"
                          ["cljsbuild" "once" "production"] 
                          ["cljsbuild" "once" "circles-prod"]
                          ["run" "-m" "markhudnall.core/export"]]
            "fig" ["trampoline" "run" "-m" "figwheel.main"]
            "build-dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}

  :source-paths ["src" "src/cljs"]

  :profiles {:dev 
             {:plugins [[lein-ring "0.12.5"]
                        [lein-cljsbuild "1.1.7"]]
              :dependencies [[ring/ring-mock "0.4.0"]
                             [ring/ring-devel "1.7.1"]
                             [com.bhauman/figwheel-main "0.2.3"]
                             [cider/piggieback "0.4.1"]
                             [org.clojure/tools.nrepl "0.2.13"]
                             [pjstadig/humane-test-output "0.9.0"]
                             [org.clojure/clojurescript "1.10.339"]]
              :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}

  :cljsbuild {
    :builds [{:id "production"
              :source-paths ["src/cljs/markhudnall"]
              :compiler {:main "markhudnall.core"
                         :asset-path "/js/out"
                         :source-map "resources/public/js/main.js.map"
                         :optimizations :whitespace ;; Optimized by Optimus
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out-prod"}}
             {:id "circles-prod"
              :source-paths ["src/cljs/markhudnall" "src/cljs/sketches"]
              :compiler {:main "sketches.core"
                         :asset-path "/js/posts/circles_out-prod"
                         :source-map "resources/public/js/posts/widening-circles.js.map"
                         :optimizations :whitespace ;; Optimized by Optimus
                         :output-to "resources/public/js/posts/widening-circles.js"
                         :output-dir "resources/public/js/posts/widening-circles_out-prod"}}]})
