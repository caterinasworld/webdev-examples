const http = require('http');
const port = 5001;

// create the server object
const server = http.createServer((req, res) => {
  // set the response status and the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // write a response to the client
  res.write('Hello World, Node!');

  // end the response
  res.end();
});

// set the server to listen on port 5000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
