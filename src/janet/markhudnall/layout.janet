(import ../static_site/html :as html)
(import ../static_site/assets :as assets)
(import ../static_site/markdown :as markdown)
(import ./date :as date)
(import ./post :as post)

(defn title-ify [title]
  (string title " | Mark Hudnall"))

(defn unique [xs]
  (def seen @{})
  (def out @[])
  (each x xs
    (when (nil? (get seen x))
      (put seen x true)
      (array/push out x)))
  out)

(defn script-tags [ctx js-assets]
  (map |[:script {:src (assets/asset-url ctx $) :type "text/javascript"}]
       (unique js-assets)))

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
    [:a {:href "/"} [:img {:src "/img/logo-tarot.svg"}]]]
   [:nav.navigation
    [:ul.space-x-half
     [:li [:a {:href "/"} "About"]]
     [:li [:a {:href "/writing/"} "Writing"]]
     [:li [:a {:href "/rss.xml"} "RSS"]]]]])

(defn layout-footer []
  [:div.footer.flex.flex-col.justify-center.items-center.space-y-one
   [:div.footer-logo
    [:img {:src "/img/logo.png"}]]])

(def default-js-assets @["/js/highlight.pack.js" "/js/main.js"])

(defn layout-page [ctx title-or-page &opt maybe-page maybe-js-assets]
  (def title (if maybe-page title-or-page "Mark Hudnall"))
  (def page (if maybe-page maybe-page title-or-page))
  (def js-assets (or maybe-js-assets default-js-assets))
  (html/html5
    [:html
     [:head
      [:meta {:charset "utf-8"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
      [:title title]
      [:script {:src "https://use.typekit.net/ues0olh.js"}]
      [:script "try{Typekit.load({ async: false });}catch(e){}"]
      [:script {:src "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}]
      [:link {:rel "stylesheet" :href (assets/asset-url ctx "/css/main.css")}]]
     [:body
      [:div.life-canvas {:data-widget "life-background"}]
      [:div.body.no-pointer-events.my-one.flex.flex-col.justify-center.mx-auto.p-one
       (layout-header)
       [:div.prose.content.pointer-events.mt-two
        [:article page]]
       (layout-footer)]
      (script-tags ctx js-assets)
      [:script "
        (function () {
          function highlightAll() {
            if (!window.hljs) return;
            var blocks = document.querySelectorAll('pre code');
            Array.prototype.forEach.call(blocks, function (block) {
              window.hljs.highlightBlock(block);
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', highlightAll);
          } else {
            highlightAll();
          }
        })();"]
      (inject-analytics)]]))

(defn old-post-warning []
  [:fieldset.border-2.border-solid.border-yellow-300.text-yellow-300.opacity-70.p-4.mb-one
   [:legend.px-2 "⚠️"]
   [:p.m-0.p-0 "This post is over 2 years old. A lot has changed since then! Take these words with a grain of salt and some patience with past me, who no longer exists."]])

(defn layout-post [ctx p]
  (def d (get-in p [:metadata :date]))
  (def title (get-in p [:metadata :title]))
  (def js-assets (array/concat @[] default-js-assets (get p :assets @[])))
  (layout-page
    ctx
    (title-ify title)
    [:div
     [:h1.post-title.mb-0 title]
     [:time.post-date.text-gray-600.italic.mb-one.inline-block (date/display d)]
     (when (date/older-than-years? d 2) (old-post-warning))
     (html/raw (get p :html))]
    js-assets))

(defn layout-post-li [p]
  [:li [:a {:href (post/full-path p)} (get-in p [:metadata :title])]])

(defn layout-recent-posts [posts]
  [:ul.recent.mt-2 (map layout-post-li posts)])

(defn layout-archive-li [p]
  (def title (get-in p [:metadata :title]))
  (def d (get-in p [:metadata :date]))
  [:li.p-0.list-none.mx-0
   [:div
    [:h2.post-title.mb-0 [:a {:href (post/full-path p)} title]]
    [:p.post-date.text-gray-600.italic [:time (date/display d)]]]])

(defn layout-archive-posts [posts]
  [:ul.list-none.mx-0.archive (map layout-archive-li posts)])

(defn render-md-file [file]
  (html/raw (markdown/render-string (slurp file))))

(defn render-content-role [pages-by-role role fallback-file]
  (if-let [page (get pages-by-role role)]
    (html/raw (get page :html))
    [:div]))

(defn layout-front-page [recent-posts pages-by-role]
  [:div
   [:section.bio (render-content-role pages-by-role :bio "resources/md/bio.md")]
   [:section.recent-posts
    [:h2 "Recent posts"]
    (layout-recent-posts recent-posts)
    [:p "See more of my writing " [:a {:href "/writing/"} "here"] "."]]
   [:section.projects (render-content-role pages-by-role :projects "resources/md/projects.md")]
   [:section.elsewhere
    [:h2 "Elsewhere"]
    (render-content-role pages-by-role :elsewhere "resources/md/elsewhere.md")]])
