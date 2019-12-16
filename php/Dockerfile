FROM alpine:3.10
RUN apk --no-cache add apache2 php7-apache2 bash

COPY php/static.php /var/www/localhost/htdocs
COPY php/simulated-io.php /var/www/localhost/htdocs

CMD /usr/sbin/httpd -D FOREGROUND