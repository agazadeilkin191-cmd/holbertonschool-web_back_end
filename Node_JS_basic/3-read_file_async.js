const fs = require('fs');

const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        const studentLines = lines.slice(1);
        console.log(`Number of students: ${studentLines.length}`);

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

        for (const [field, students] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      }
    });
  });
};

module.exports = countStudents;
