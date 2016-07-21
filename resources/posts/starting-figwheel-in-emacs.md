Title: Starting Figwheel in Emacs
Date: 2016-4-25

When I use Emacs to write ClojureScript, I often jack in to CIDER just to start Figwheel and get to the ClojureScript REPL. After running `M-x cider-jack-in`, I would type in the REPL: 

```clojure
user> (use 'figwheel-sidecar.repl-api)
user> (start-figwheel!)
user> (cljs-repl)
```

Turns out, there's a faster way to do this using the `cider-cljs-lein-repl` variable. Add the following to your Emacs config:[^1]

```emacs-lisp
(setq cider-cljs-lein-repl
      "(do (require 'figwheel-sidecar.repl-api)
           (figwheel-sidecar.repl-api/start-figwheel!)
           (figwheel-sidecar.repl-api/cljs-repl))")
```

Now, when I'm in a ClojureScript project, I run `M-x cider-jack-in-clojurescript` instead of `M-x cider-jack-in`. The value of `cider-cljs-lein-repl` is used to start the ClojureScript REPL, so figwheel starts automatically and puts me right into the cljs REPL. Magic!

[^1]: I put this in the `:config` block of a [use-package](https://github.com/jwiegley/use-package) declaration for CIDER, if you're into that sort of thing. 
