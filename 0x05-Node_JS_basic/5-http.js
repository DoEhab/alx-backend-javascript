const http = require('http');
const fs = require('fs');

const filePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) {
        res.statusCode = 404;
        res.end('This is the list of our students\nCannot load the database');
        return;
      }
      res.statusCode = 200;
      const lines = fileData.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        res.end('This is the list of our students\nNumber of students: 0');
        return;
      }

      const headers = lines[0].split(',');
      const fieldsIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      const fieldsCount = {};
      const studentData = {};

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].trim();
        if (line !== '') {
          const fields = line.split(',');
          const field = fields[fieldsIndex];
          const studName = fields[firstNameIndex];

          if (!fieldsCount[field]) {
            fieldsCount[field] = 0;
            studentData[field] = [];
          }

          fieldsCount[field] += 1;
          studentData[field].push(studName);
        }
      }

      const totalStudents = Object.values(fieldsCount).reduce((sum, val) => sum + val, 0);
      let response = 'This is the list of our students\n';
      response += `Number of students: ${totalStudents}\n`;

      for (const field in fieldsCount) {
        if (Object.hasOwn(fieldsCount, field)) {
          const count = fieldsCount[field];
          const list = studentData[field].join(', ');
          response += `Number of students in ${field}: ${count}. List: ${list}\n`;
        }
      }

      res.end(response.trim());
    });
  } else {
    res.statusCode = 404;
    res.end('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);
module.exports = app;
