#!/bin/sh
set -eu

: "${OBSIDIAN_VAULT:=/vault}"
: "${OBSIDIAN_PUBLISH_BASE:=Website/Public.base}"

if [ ! -d "$OBSIDIAN_VAULT" ]; then
  echo "OBSIDIAN_VAULT does not exist: $OBSIDIAN_VAULT" >&2
  echo "Mount or sync the Obsidian vault before starting the app." >&2
  exit 1
fi

npm run build
exec nginx -c /app/conf/nginx.conf
