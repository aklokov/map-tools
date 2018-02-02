export function values<TKey, TVal>(map: Map<TKey, TVal>): TVal[] {
  return Array.from(map.values());
}
