const http = require('http');
const data = require('./characters');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  // console.log(characters);

  // main route
  if (req.method === 'GET' && req.url === '/') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello! This is the main page</h1>');
    res.end();
  }

  // new route --> /about
  else if (req.method === 'GET' && req.url === '/about') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is the about page</h1>');
    res.end();
  }

  // new route --> /contact
  else if (req.method === 'GET' && req.url === '/contact') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is the contact page</h1>');
    res.end();
  }

  // new route --> /data
  else if (req.method === 'GET' && req.url === '/data') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
  }

  // new route --> handle 404
  else {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
