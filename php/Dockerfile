FROM alpine:3.10
RUN apk --no-cache add apache2 php7-apache2 bash

COPY test.php /var/www/localhost/htdocs

CMD /usr/sbin/httpd -D FOREGROUND