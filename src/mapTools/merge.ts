import { cloneMap } from "./cloneMap";

export function merge<TKey, TVal>(first: Map<TKey, TVal>, second?: Map<TKey, TVal>): Map<TKey, TVal> {
  const result = cloneMap(first);
  if (!second) {
    return result;
  }

  for (let item of second) {
    result.set(item[0], item[1]);
  }

  return result;
}
