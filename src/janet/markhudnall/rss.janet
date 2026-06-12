(import ../static_site/xml :as xml)
(import ./date :as date)
(import ./post :as post)

(def site-title "Mark Hudnall's website")
(def site-link "https://markhudnall.com")
(def site-description "Mark Hudnall's piece of cyberspace")

(defn item [p]
  (def title (get-in p [:metadata :title]))
  (def link (string site-link (post/full-path p)))
  (def d (get-in p [:metadata :date]))
  (string
    "<item>"
    (xml/tag "title" title)
    (xml/tag "link" link)
    (xml/tag "guid" link)
    (xml/tag "pubDate" (date/rss-date d))
    (xml/raw-tag "description" (string "<![CDATA[" (get p :html) "]]>"))
    "</item>"))

(defn feed [posts]
  (string
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
    "<rss version=\"2.0\"><channel>"
    (xml/tag "title" site-title)
    (xml/tag "link" site-link)
    (xml/tag "description" site-description)
    (string/join (map item posts) "")
    "</channel></rss>"))

(defn page [posts]
  @{:path "/rss.xml"
    :content (feed posts)})
