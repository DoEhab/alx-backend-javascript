export default function getStudentsByLocation(inputArray, city) {
  if (!Array.isArray(inputArray)) return [];
  return inputArray.filter((item) => item.location === city);
}
