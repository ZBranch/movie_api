let addr = request.url;
let q = url.parse(addr, true);
const http = require('http');

const fs = require("fs");

fs.readFile('input.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('File content: ' + data.toString());
});

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Node!\n');
}).listen(8080);

console.log('My first Node test server is running on Port 8080.');
