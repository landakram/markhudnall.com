# markhudnall.com

This is my personal website, [markhudnall.com](https://markhudnall.com).

Posts are written in markdown, turned into a static site using [stasis](https://github.com/magnars/stasis), and deployed with [dokku](https://github.com/dokku/dokku) to a Digital Ocean droplet. I also use [dokku-letsencrypt](https://github.com/dokku/dokku-letsencrypt) to provide TLS certificates.

## Usage

If you want your *very own* copy of my personal website, you can clone it and build with: 

```shell
lein build-site
```

If, for whatever reason, you then wanted to *deploy* my personal website on your own server, you could do so with dokku:

```shell
# Assuming you already ran `lein build-site`
git remote add dokku dokku@your-dokku-host
git push dokku master
```

I use dokku's [Dockerfile support](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/) to deploy it. That's a little weird because it means dokku's nginx server is proxying to another nginx server behind docker, but there's too much cognitive overhead to deploying things, and it's worth it to me to deploy stuff in a uniform way.

## Why not use a static site generator? 

I wanted to learn / write more Clojure. That's basically it.

## License

Copyright © 2015 Mark Hudnall

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
