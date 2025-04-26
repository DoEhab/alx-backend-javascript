export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new RangeError('Position outside range');
  const result = new DataView(new ArrayBuffer(length));
  result.setInt8(position, value);
  return result;
}
