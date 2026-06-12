# markhudnall.com

This is my personal website, [markhudnall.com](https://markhudnall.com).

Content is managed in Obsidian and turned into a static site with a small Janet static-site library in `src/janet/static_site`. Site-specific Janet code lives in `src/janet/markhudnall`, executable build entrypoints live in `bin`, and Markdown is rendered in Janet with [Remarkable](https://github.com/pyrmont/remarkable) plus an Obsidian-flavored Markdown layer for wiki links, embeds, comments, and callouts. Browser interactivity is still written in ClojureScript and compiled with Shadow CLJS. The site is deployed with [dokku](https://github.com/dokku/dokku) to a Digital Ocean droplet, with [dokku-letsencrypt](https://github.com/dokku/dokku-letsencrypt) providing TLS certificates.

## Usage

If you want your *very own* copy of my personal website, you can clone it and build with: 

```shell
npm install
jpm load-lockfile lockfile.jdn
npm run build
```

You will need [Janet](https://janet-lang.org/), `jpm`, Node/npm, and a Java runtime for Shadow CLJS. `jpm load-lockfile lockfile.jdn` installs the Janet dependencies globally, including Remarkable.

The build reads public notes from the committed snapshot at `content/public`. Notes are private by default in Obsidian; add `publish: true` to publish, then run `npm run obsidian:export` locally to refresh the snapshot. The exported note set is driven by an Obsidian Base file. Set `OBSIDIAN_PUBLISH_BASE` to a `.base` path, or use one of the default names such as `Website/Public.base`. See `docs/content.md` for the content contract.

To serve the production build locally:

```shell
python3 -m http.server --directory dist/ 3001
```

If, for whatever reason, you then wanted to *deploy* my personal website on your own server, you could do so with dokku:

```shell
git remote add dokku dokku@your-dokku-host
git push dokku master
```

I use dokku's [Dockerfile support](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/) to deploy it. The Docker image builds `dist/` from source and the committed public content snapshot, then serves it with nginx. See `docs/deploy.md` for the deploy flow.

## Developing

Development is done in Emacs.

1. Run `npm run dev:js` for the Shadow CLJS watcher.
2. Run `npm run dev:css` for the Tailwind CSS watcher.
3. Run `npm run obsidian:export` after publishing content in Obsidian.
4. Run `npm run export` after Janet site-library changes.

## Why not use a static site generator? 
I wanted a site that is assembled from library pieces rather than a full framework. Originally that meant Clojure/Stasis; now it means a small Janet library with site-specific code layered on top.

## License

Copyright © 2020 Mark Hudnall

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
