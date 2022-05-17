// example adapted from the Nodejs.org docs
const http = require('http');
const port = process.env.PORT || 5001;

const postHTML = `<html><head><title>Post Example</title></head><body>
  <form method='post'>
  <label for="name">Name: </label>
  <input type="text" name="name" id="name"><br />
  <label for="email">Email: </label>
  <input type="text" name="email" id="email"><br />
  <input type='submit'>
  </form></body></html>`;

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    console.log('on data: ' + body);
  });
  req.on('end', () => {
    console.log('on end: ' + body);
    res.writeHead(200);
    res.end(postHTML);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
