const http = require('http');
const url = require('url');
const computePrimeSequence = require('./primeNumbers');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = http.createServer( async (req, res) => {
  const requestUrl = url.parse(req.url);
  const path = requestUrl.pathname;
  switch (path) {
    case '/simulated-io':
      res.writeHead(200, {'Content-Type': 'application/json'});
      await sleep(100);
      res.end('OK');
      break;
    case '/cpu-intensive':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(computePrimeSequence(5000)));
      break;
    default:
      res.writeHead(404, 'route not defined');
      res.end();
  }
});

server.listen(8000);