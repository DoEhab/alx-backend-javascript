const fileStream = require('fs');

function countStudents(path) {
  try {
    const fileData = fileStream.readFileSync(path, 'utf8');

    const lines = fileData.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) return;

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
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldsCount) {
      if (Object.hasOwn(fieldsCount, field)) {
        const count = fieldsCount[field];
        const list = studentData[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
