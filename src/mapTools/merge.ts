export function merge<TKey, TVal>(first: Map<TKey, TVal>, second: Map<TKey, TVal>): Map<TKey, TVal> {
  const result = new Map<TKey, TVal>();
  for (let item of first) {
    result.set(item[0], item[1]);
  }
  for (let item of second) {
    result.set(item[0], item[1]);
  }

  return result;
}
