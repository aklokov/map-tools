import { cloneMap } from "./cloneMap";

export function add<TKey, TVal>(map: Map<TKey, TVal>, newKey: TKey, newVal: TVal): Map<TKey, TVal> {
  const result = cloneMap(map);
  result.set(newKey, newVal);
  return result;
}
