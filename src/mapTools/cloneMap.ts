export function cloneMap<TKey, TVal>(map: Map<TKey, TVal>): Map<TKey, TVal> {
  return new Map<TKey, TVal>(map);
}
