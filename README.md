# node-vs-apache
A performance benchmark using [Apache Benchmark](https://httpd.apache.org/docs/2.4/programs/ab.html).
You need Docker engine to execute tests.

https://dev.to/emiliosp/nodejs-vs-apache-performance-battle-for-the-conquest-of-my-5c4n

## NodeJS
```shell script
yarn test-node-simulated-io
yarn test-node-cpu-intensive
```

## Apache + PHP
```shell script
yarn test-php-simulated-io
yarn test-php-cpu-intensive
```
