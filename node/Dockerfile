FROM alpine:3.11
RUN apk add --no-cache --update bash nodejs

WORKDIR /opt/app
COPY /node/lorem_ipsum.html .
COPY /node/*.js ./

CMD NODE_ENV=production node server.js