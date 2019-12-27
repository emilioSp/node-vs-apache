FROM alpine:3.11
RUN apk --no-cache add apache2 php7-apache2 bash

COPY php/*.php /var/www/localhost/htdocs/

CMD /usr/sbin/httpd -D FOREGROUND