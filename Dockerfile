FROM alpine:3.10
ENV TERM linux
RUN apk --no-cache add apache2-utils

ENTRYPOINT ["/usr/bin/ab"]