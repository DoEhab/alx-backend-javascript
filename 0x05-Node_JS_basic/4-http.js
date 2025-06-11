// create temp server
const http = require('http');

const app = http.createServer((req, res) => {
  const responseText = 'Hello ALX!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(responseText);
});

app.listen(1245);

module.exports = app;
