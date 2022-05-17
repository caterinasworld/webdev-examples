const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  if (req.url === '/readfile') {
    fs.readFile('lorem.txt', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(404, 'Not Found');
        res.write('404: File Not Found!');
        res.end();
        return;
      }
      console.log('\n====== data buffer: ======\n', data);
      // console.log('\n====== data toJSON: ======\n', data.toJSON());
      // console.log('\n====== data toString: ======\n', data.toString());

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h2>Reading buffer...</h2>');
      res.write(data.toString());
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
