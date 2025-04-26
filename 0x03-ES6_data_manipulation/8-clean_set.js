export default function cleanSet(set, startString) {
  let result = '';
  if (typeof startString !== 'string' || startString === '') return '';
  for (const value of set) if (value.startsWith(startString)) result += (result ? '-' : '') + value.slice(startString.length);
  return result;
}
