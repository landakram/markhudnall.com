(ns figwheel.connect (:require [markhudnall.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "markhudnall", :websocket-url "ws://localhost:3449/figwheel-ws"})

