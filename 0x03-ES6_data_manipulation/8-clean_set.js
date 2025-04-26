export default function cleanSet(set, startString) {
  let result = '';
  if (typeof startString !== 'string' || startString === '') return '';
  for (const value in set) if (value.startWith(startString)) result += (result ? '-' : '') + value.slice(startString.length);
  return result;
}
