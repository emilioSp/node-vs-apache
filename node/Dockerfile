FROM alpine:3.10

RUN apk add --no-cache --update bash nodejs

WORKDIR /opt/app
COPY lorem_ipsum.html .
COPY /node/static.js .

CMD NODE_ENV=production node static.js