FROM node:24-alpine

ARG JANET_VERSION=1.41.2

ENV OBSIDIAN_VAULT=/vault \
    OBSIDIAN_PUBLISH_BASE=Website/Public.base

WORKDIR /app

RUN apk add --no-cache \
      build-base \
      ca-certificates \
      git \
      openjdk21-jre-headless \
      nginx \
      ripgrep && \
    git clone --depth 1 --branch "v${JANET_VERSION}" https://github.com/janet-lang/janet.git /tmp/janet && \
    make -C /tmp/janet && \
    make -C /tmp/janet install && \
    git clone --depth 1 https://github.com/janet-lang/jpm.git /tmp/jpm && \
    cd /tmp/jpm && janet bootstrap.janet && \
    rm -rf /tmp/janet /tmp/jpm

COPY package.json package-lock.json project.janet lockfile.jdn ./
RUN npm ci && jpm load-lockfile lockfile.jdn

COPY . .
RUN npm run build:js

EXPOSE 5000

CMD ["bin/serve-dokku.sh"]
