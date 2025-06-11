const http = require('http');

const app = http.createServer((req, res) => {
  const responseText = 'Hello ALX!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.write(Buffer.from(responseText));
});

app.listen(1245);

module.exports = app;
