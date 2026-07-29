export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find((g) => g.studentId === student.id);
      return {
        ...student,
        grade: matchedGrade ? matchedGrade.grade : 'N/A',
      };
    });
}
