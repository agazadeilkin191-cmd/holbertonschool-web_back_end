import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];
    try {
      const students = await readDatabase(dbPath);
      let responseText = 'This is the list of our students';

      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        responseText += `\nNumber of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
      });

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(dbPath);
      const majorStudents = students[major] || [];
      res.status(200).send(`List: ${majorStudents.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
