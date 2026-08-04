const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf8', (error, fileContent) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const studentLines = lines.slice(1);
      let output = `Number of students: ${studentLines.length}\n`;

      const fields = {};

      studentLines.forEach((line) => {
        const studentRecord = line.split(',');
        if (studentRecord.length >= 4) {
          const firstname = studentRecord[0];
          const field = studentRecord[3];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      const entries = Object.entries(fields);
      entries.forEach(([field, students], index) => {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        if (index < entries.length - 1) {
          output += '\n';
        }
      });

      resolve(output);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students';
  try {
    const studentsOutput = await countStudents(databaseFile);
    responseText += `\n${studentsOutput}`;
    res.send(responseText);
  } catch (error) {
    res.status(500).send(`${responseText}\nCannot load the database`);
  }
});

app.listen(port);

module.exports = app;
