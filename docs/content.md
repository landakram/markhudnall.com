# Content

Content lives in Obsidian and is selected for publishing by an Obsidian Base.
The build reads the vault from `OBSIDIAN_VAULT`, defaulting to
`/Users/mark/Documents/Obsidian/mh/mh`.

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
