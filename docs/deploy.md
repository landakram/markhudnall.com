# Deploy

The Docker image builds the site from source using the committed public content
snapshot, then serves `dist/` with nginx. This means generated `dist/` output
does not need to be committed and the remote server does not need access to the
full Obsidian vault.

Before deploying, refresh and commit the public snapshot locally:

```sh
npm run obsidian:export
git add content/public
git commit -m "Publish content"
```

## Dokku Setup

Deploy source as usual:

```sh
git push dokku master
```

During image build, Docker runs `npm run build` against `content/public`. On
startup, the container verifies `dist/index.html` exists and starts nginx on port
`5000`.

## Local Docker Test

```sh
docker build -t markhudnall.com .
docker run --rm -p 5000:5000 markhudnall.com
```

Open <http://127.0.0.1:5000/>.
