(ns markhudnall.layout
  (:require [hiccup.page :refer [html5 include-js include-css]]
            [optimus.link :as link]
            [clj-time.format :as f]
            [markdown.core :as markdown]
            [markhudnall.post :as post]))

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
  [:div.header 
    [:div.logo 
      [:a {:href "/"} "Mark Hudnall"]]
    [:nav.navigation
      [:ul
        [:li
          [:a {:href "/"} "Home"]]
        [:li
          [:a {:href "/about/"} "About"]]
        [:li
          [:a {:href "/archive/"} "Archive"]]
        ]]])

(defn layout-page [request page]
  (html5
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1.0"}]
     [:title "Mark Hudnall"]
     ; Load fonts from typekit
     [:script {:src "https://use.typekit.net/ues0olh.js"}]
     [:script "try{Typekit.load({ async: false });}catch(e){}"]
     [:link {:rel "stylesheet" :href (link/file-path request "/css/main.css")}]]
    [:body
     [:div.life-canvas]
     [:div.body
      (layout-header)
      [:div.content 
       [:article 
        page]]]
     (apply include-js (link/bundle-paths request ["main.js"]))
     [:script "hljs.initHighlightingOnLoad();"]
     (inject-analytics)]))

(defn layout-post [request post]
  (let [date (get-in post [:metadata :date])
        title (get-in post [:metadata :title])
        formatted-date (format-date date)
        content (:html post)]
    (layout-page 
      request 
      [:div
        [:h1.post-title title]
        [:time.post-date formatted-date]
        content])))

(defn layout-post-li [post]
  (let [metadata (:metadata post)
                  title (:title metadata)
                  path (post/get-full-path post)]
    [:li [:a {:href path} title]]))

(defn layout-recent-posts [posts]
  [:ul.recent
   (map layout-post-li posts)])

(defn layout-archive-li [post]
  (let [title (get-in post [:metadata :title])
        date (get-in post [:metadata :date])
        formatted-date (format-date date)
        path (post/get-full-path post)]
    [:li 
     [:div
      [:h2.post-title [:a {:href path} title]]
      [:p.post-date [:time formatted-date]] ]]))

(defn layout-archive-posts [posts]
  [:ul.archive
   (map layout-archive-li posts)])

(defn layout-project-li [project]
  (let [href (:homepage project)
        name (:name project)
        descr (:short-description project)
        live? (not (nil? href))
        link-html (if live?
                    [:a {:href href} name]
                    name)]
    [:li link-html (str " is " descr)]))

(defn layout-front-page [recent-posts projects]
  [:div
   (markdown/md-to-html-string (slurp "resources/md/short-bio.md"))
   [:h2 "Recent posts"]
   (layout-recent-posts recent-posts)
   [:h2 "Projects"]
   [:ul
    (map layout-project-li projects)]])

(defn layout-elsewhere [elsewhere]
  [:ul
    (map (fn [place] 
          [:li [:a {:href (:url place)} (:name place)]]) 
        elsewhere)])
