const http = require('http');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello World, Node!</h1>');
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
