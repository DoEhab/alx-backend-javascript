export default function getStudentIdsSum(inputArray) {
  return inputArray.reduce((sum, inputArray) => sum + inputArray.id, 0);
}
