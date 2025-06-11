const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const filePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  if (!filePath) {
    res.status(500).send('Cannot load the database');
    return;
  }
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      res.statusCode = 500;
      res.send('Cannot load the database');
      return;
    }

    const lines = fileData.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      res.send('This is the list of our students\nNumber of students: 0');
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

    res.send(response.trim());
  });
});

app.listen(port);

module.exports = app;
