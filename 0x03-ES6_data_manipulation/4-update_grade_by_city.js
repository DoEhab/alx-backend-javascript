export default function updateStudentGradeByCity(studentsList, city, gradesList) {
  const filteredStudents = studentsList.filter((item) => item.location === city);
  return filteredStudents.map(
    (student) => gradesList.find((grade) => grade.studentId === student.id),
  );
}
