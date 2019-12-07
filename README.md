# node-vs-apache

## httpd
`docker build --no-cache -t httpd-test -f Dockerfile ..`

`docker run --detach -p 9001:9001 httpd-test`


## PHP
`docker build --no-cache -t php-test -f Dockerfile .`

`docker run --detach -p 9000:80 php-test`

## Node
`docker build --no-cache -t node-test -f Dockerfile ..`

`docker run --detach -p 8000:8000 node-test`
