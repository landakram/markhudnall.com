# Content

Content lives in Obsidian and is selected for publishing by an Obsidian Base.
The deployed build reads a committed public snapshot from `content/public`; it
does not read or sync the full Obsidian vault.

## Publishing

Notes are private by default. Add `publish: true` to include a note in the
published note set.

The default publish Base is `Website/Public.base` inside the vault. Override it
with `OBSIDIAN_PUBLISH_BASE` when needed. The Base should include the publishing
property and exclude template folders, for example:

```yaml
filters:
  and:
    - publish == true
    - not:
      - file.inFolder("Templates")
      - file.inFolder("templates")
      - file.inFolder("_Templates")
```

Export the public snapshot locally after changing published notes:

```sh
npm run obsidian:export
```

The exporter reads `OBSIDIAN_VAULT`, defaults to
`/Users/mark/Documents/Obsidian/mh/mh`, evaluates the Base, validates the public
content, and writes only selected notes plus referenced assets to
`content/public`. Build from the live vault directly with
`OBSIDIAN_SOURCE=vault npm run build` when debugging local content.

## Posts

Public posts need these properties:

```yaml
---
publish: true
type: post
title: "Post title"
date: "2026-06-11"
---
```

The post URL is `/<yyyy>/<mm>/<dd>/<slug>/`. If `slug` is present, it is used as
the final URL segment. Otherwise the note filename is used.

`draft: true` keeps a public post out of lists and RSS.

## Pages

Public pages use `type: page`. Homepage sections are selected with
`website-role`; currently required roles are:

- `bio`
- `projects`
- `elsewhere`

Example:

```yaml
---
publish: true
type: page
title: "Bio"
website-role: bio
---
```

## Wiki Links

Wiki links resolve only to public notes selected by the Base. Links to private or
missing notes render as unresolved spans and emit an `Obsidian warning` during
export.
