# markhudnall.com

This is my personal website, [markhudnall.com](https://markhudnall.com).

Posts are written in markdown, turned into a static site using [stasis](https://github.com/magnars/stasis), and deployed with [dokku](https://github.com/dokku/dokku) to a Digital Ocean droplet. I also use [dokku-letsencrypt](https://github.com/dokku/dokku-letsencrypt) to provide TLS certificates.

## Usage

If you want your *very own* copy of my personal website, you can clone it and build with: 

```shell
bb build
```

You will need to install [babashka](https://babashka.org/) to get `bb`.

This also starts a local server with the production build at [localhost:3001](http://localhost:3001).

If, for whatever reason, you then wanted to *deploy* my personal website on your own server, you could do so with dokku:

```shell
# Assuming you already ran `make build`
git remote add dokku dokku@your-dokku-host
git push dokku master
```

I use dokku's [Dockerfile support](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/) to deploy it. That's a little weird because it means dokku's nginx server is proxying to another nginx server behind docker, but there's too much cognitive overhead to deploying things, and it's worth it to me to deploy stuff in a uniform way.

## Developing

Development is done in Emacs.

1. Run `M-x cider-jack-in-clojurescript` with `shadow-cljs`.
2. Run `M-x cider-jack-in` with `lein`. This will automatically start a development server at [localhost:3000](http://localhost:3000).
3. Run `M-x compile` with `npm run dev`

## Why not use a static site generator? 

I wanted to learn / write more Clojure. That's basically it.

## License

Copyright © 2020 Mark Hudnall

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
