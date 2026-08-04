const http = require('http');
const fs = require('fs');

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentsOutput = await countStudents(databaseFile);
      res.end(studentsOutput);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
