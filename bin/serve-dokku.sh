#!/bin/sh
set -eu

: "${OBSIDIAN_SOURCE:=snapshot}"
: "${OBSIDIAN_CONTENT_ROOT:=content/public}"

if [ ! -d "$OBSIDIAN_CONTENT_ROOT" ]; then
  echo "Public content snapshot does not exist: $OBSIDIAN_CONTENT_ROOT" >&2
  echo "Run npm run obsidian:export locally and commit the generated snapshot." >&2
  exit 1
fi

if [ ! -f dist/index.html ]; then
  echo "Built site does not exist: dist/index.html" >&2
  echo "The Docker image should run npm run build before startup." >&2
  exit 1
fi

exec nginx -c /app/conf/nginx.conf
