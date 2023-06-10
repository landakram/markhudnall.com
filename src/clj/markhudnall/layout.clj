(ns markhudnall.layout
  (:require [hiccup.page :refer [html5 include-js include-css]]
            [hiccup.util :refer [raw-string]]
            [optimus.link :as link]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clojure.string :as string]
            [markdown.core :as markdown]
            [markhudnall.post :as post]))

(def me
  {:image "https://1.gravatar.com/avatar/6d07453a68471e4682e8daceef543820?size=300"})

(defn format-date [date]
  (f/unparse (f/formatter "MMMM d, YYYY") date))

(defn inject-analytics []
  [:script {:type "text/javascript"}
   "var _gauges = _gauges || [];
    (function() {
      var t   = document.createElement('script');
      t.type  = 'text/javascript';
      t.async = true;
      t.id    = 'gauges-tracker';
      t.setAttribute('data-site-id', '567a3795bb922a54720006b5');
      t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif');
      t.src = 'https://track.gaug.es/track.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t, s);
    })();"])

(defn layout-header []
  [:div.header.pointer-events.flex.flex-row.justify-between.items-center
    [:div.logo
     [:a {:href "/"} [:img {:src "/img/logo-circle.svg"}]]]
    [:nav.navigation
      [:ul.space-x-half
        [:li
          [:a {:href "/"} "About"]]
        [:li
          [:a {:href "/writing/"} "Writing"]]
        [:li
          [:a {:href "/rss.xml"} "RSS"]]
        ]]])

(defn title-ify [title]
  (str title " | Mark Hudnall"))

(defn default-js-includes [request]
  (link/bundle-paths request ["main.js"]))

(defn layout-page
  ([request title page]
   (let [js-includes (default-js-includes request)]
     (layout-page request title page js-includes)))
  ([request title page js-includes]
   (html5
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1.0"}]
     [:title title]
     ; Load fonts from typekit
     [:script {:src "https://use.typekit.net/ues0olh.js"}]
     [:script "try{Typekit.load({ async: false });}catch(e){}"]
     ; Load MathJax
     [:script {:src "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}]
     ; Load stylesheet
     [:link {:rel "stylesheet" :href (link/file-path request "/css/main.css")}]]
    [:body
     [:div.life-canvas]
     [:div.body.no-pointer-events.space-y-two.my-one.flex.flex-col.justify-center.mx-auto.p-one
      (layout-header)
      [:div.prose.content.pointer-events
       [:article
        page]]]
     (apply include-js js-includes)
     [:script "hljs.initHighlightingOnLoad();"]
     (inject-analytics)]))
  ([request page] (layout-page request "Mark Hudnall" page)))

(defn p-r [val]
  (println val)
  val)

(defn old-post-warning []
  [:fieldset.border-2.border-solid.border-yellow-300.text-yellow-300.opacity-70.p-4.mb-one
   [:legend.px-2 "⚠️"]
   [:p.m-0.p-0 "This post is over 2 years old. A lot has changed since then! Take these words with a grain of salt and some patience with past me, who no longer exists."]])

(defn layout-post [request post]
  (let [date (get-in post [:metadata :date])
        title (get-in post [:metadata :title])
        permalink (get-in post [:metadata :permalink])
        formatted-date (format-date date)
        content (:html post)
        ;; "posts-<post-name>.js"
        post-js-include (str "posts-" (last (string/split permalink #"/")) ".js")
        js-includes (link/bundle-paths request ["main.js" post-js-include])]
    (layout-page
      request
      (title-ify title)
      [:div
       [:h1.post-title.mb-0 title]
       [:time.post-date.text-gray-600.italic.mb-one.inline-block formatted-date]
       (when (t/before? date (t/ago (t/years 2)))
         (old-post-warning))
       content]
      js-includes)))

(defn layout-post-li [post]
  (let [metadata (:metadata post)
                  title (:title metadata)
                  path (post/get-full-path post)]
    [:li [:a {:href path} title]]))

(defn layout-recent-posts [posts]
  [:ul.recent.mt-2
   (map layout-post-li posts)])

(defn layout-archive-li [post]
  (let [title (get-in post [:metadata :title])
        date (get-in post [:metadata :date])
        formatted-date (format-date date)
        path (post/get-full-path post)]
    [:li.p-0.list-none.mx-0
     [:div
      [:h2.post-title.mb-0 [:a {:href path} title]]
      [:p.post-date.text-gray-600.italic [:time formatted-date]] ]]))

(defn layout-archive-posts [posts]
  [:ul.list-none.mx-0.archive
   (map layout-archive-li posts)])

(defn layout-project-li [project]
  (let [href (:homepage project)
        name (:name project)
        descr (:short-description project)
        live? (not (nil? href))
        link-html (if live?
                    [:a {:href href :target "_blank"} name]
                    name)]
    [:li link-html " " descr]))

(defn layout-front-page [recent-posts]
  [:div
   [:section.bio
    (markdown/md-to-html-string (slurp "resources/md/bio.md"))]
   [:section.recent-posts
    [:h2 "Recent posts"]
    (layout-recent-posts recent-posts)
    [:p "See more of my writing " 
     [:a {:href "/writing/"} "here"]
     "."]]
   [:section.projects
    (markdown/md-to-html-string (slurp "resources/md/projects.md"))]
   [:section.elsewhere
    [:h2 "Elsewhere"]
    (markdown/md-to-html-string (slurp "resources/md/elsewhere.md"))]])

