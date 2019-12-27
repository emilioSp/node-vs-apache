const http = require('http');
const fs = require('fs');
const url = require('url');
const computePrimeSequence = require('./primeNumbers');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = http.createServer( async (req, res) => {
  const requestUrl = url.parse(req.url);
  const path = requestUrl.pathname;
  switch (path) {
    case '/static':
      res.writeHead(200, {'Content-Type': 'text/html'});
      const stream = fs.createReadStream('lorem_ipsum.html');
      stream.pipe(res);
      break;
    case '/simulated-io':
      res.writeHead(200, {'Content-Type': 'application/json'});
      await sleep(100);
      res.end('OK');
      break;
    case '/cpu-intensive':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(computePrimeSequence(1000)));
      break;
    default:
      res.writeHead(404, 'route not defined');
      res.end();
  }
});

server.listen(8000);