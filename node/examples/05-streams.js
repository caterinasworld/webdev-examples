const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const readable = fs.createReadStream('lorem.txt');
  const writeable = fs.createWriteStream('out.txt');
  readable.pipe(writeable);
  readable.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
