(ns markhudnall.layout
  (:require [hiccup.page :refer [html5 include-js include-css]]
            [optimus.link :as link]
            [clj-time.format :as f]
            ))

(defn fonts []
  ; Load fonts from Typekit
  [:script 
  "(function(d) {
      var config = {
        kitId: 'ues0olh',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,'')+' wf-inactive';},config.scriptTimeout),tk=d.createElement('script'),f=false,s=d.getElementsByTagName('script')[0],a;h.className+=' wf-loading';tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!='complete'&&a!='loaded')return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);"])

(defn header []
  [:div.header 
    [:div.logo 
      [:a {:href "/"} "Mark Hudnall"]]
    [:nav.navigation
      [:ul
        [:li
          [:a {:href "/"} "Home"]]
        [:li
          [:a {:href "/about"} "About"]]
        [:li
          [:a {:href "http://wwww.google.com"} "Archive"]]
        ]]])

(defn layout-page [request page]
  (html5
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1.0"}]
     [:title "Mark Hudnall"]
     (fonts)
     (include-css "http://cdnjs.cloudflare.com/ajax/libs/emojify.js/0.9.5/emojify.min.css")
     [:link {:rel "stylesheet" :href (link/file-path request "/css/main.css")}]]
    [:body
     [:div.life-canvas]
     [:div.body
      (header)
      [:div.content 
       [:article 
        page]]]
     (include-js "/js/highlight.pack.js")
     (include-js "http://cdnjs.cloudflare.com/ajax/libs/emojify.js/0.9.5/emojify.min.js")
     (include-js "/js/main.js")
     [:script "
        emojify.setConfig({
          // use githubs CDN
          img_dir: 'https://github.global.ssl.fastly.net/images/icons/emoji/'
        })
        emojify.run();"]
     [:script "hljs.initHighlightingOnLoad();"]]))

(defn format-date [date]
  (f/unparse (f/formatter "MMMM d, YYYY") date))

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
