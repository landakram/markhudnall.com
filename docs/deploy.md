# Deploy

The Docker image builds the site from source when the container starts, then
serves `dist/` with nginx. This means generated `dist/` output does not need to
be committed.

The container needs the Obsidian vault available at runtime. By default it reads:

```sh
OBSIDIAN_VAULT=/vault
OBSIDIAN_PUBLISH_BASE=Website/Public.base
```

## Dokku Setup

Create persistent storage for the vault on the Dokku host and mount it into the
app:

```sh
dokku storage:ensure-directory markhudnall-vault
dokku storage:mount markhudnall.com /var/lib/dokku/data/storage/markhudnall-vault:/vault
dokku config:set markhudnall.com OBSIDIAN_VAULT=/vault OBSIDIAN_PUBLISH_BASE=Website/Public.base
```

Sync the local Obsidian vault to that storage before deploying:

```sh
rsync -az --delete ~/Documents/Obsidian/mh/mh/ dokku@YOUR_HOST:/var/lib/dokku/data/storage/markhudnall-vault/
```

Then deploy source as usual:

```sh
git push dokku master
```

On startup, the container runs `npm run build` against the mounted vault and then
starts nginx on port `5000`.

## Local Docker Test

```sh
docker build -t markhudnall.com .
docker run --rm -p 5000:5000 \
  -v ~/Documents/Obsidian/mh/mh:/vault:ro \
  markhudnall.com
```

Open <http://127.0.0.1:5000/>.
