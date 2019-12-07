# node-vs-apache

## Apache
`docker build --no-cache -t apache-test -f Dockerfile ..`

`docker run --detach -p 8001:80 apache-test`
## Node
`docker build --no-cache -t node-test -f Dockerfile ..`

`docker run --detach -p 8000:8000 node-test`
