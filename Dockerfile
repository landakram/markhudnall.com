FROM debian
MAINTAINER Mark Hudnall <mark@getclef.com>

RUN apt-get update && \
    apt-get install -y nginx-light && \
    rm -rf /var/lib/apt/lists/*

ADD dist /app
ADD conf/nginx.conf /app/.nginx.conf

EXPOSE 80

CMD ["nginx", "-c", "/app/.nginx.conf"]