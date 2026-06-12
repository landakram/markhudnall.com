FROM node:24-alpine

ENV OBSIDIAN_SOURCE=snapshot \
    OBSIDIAN_CONTENT_ROOT=content/public

WORKDIR /app

RUN apk add --no-cache \
      ca-certificates \
      git \
      janet \
      openjdk21-jre-headless \
      nginx \
      ripgrep && \
    ln -s /usr/bin/janet /usr/local/bin/janet && \
    git clone --depth 1 https://github.com/janet-lang/jpm.git /tmp/jpm && \
    cd /tmp/jpm && janet bootstrap.janet && \
    rm -rf /tmp/jpm

COPY package.json package-lock.json project.janet lockfile.jdn ./
RUN npm ci && jpm load-lockfile lockfile.jdn

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["bin/serve-dokku.sh"]
