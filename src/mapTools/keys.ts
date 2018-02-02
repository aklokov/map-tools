export function keys<TKey, TVal>(map: Map<TKey, TVal>): TKey[] {
  return Array.from(map.keys());
}
