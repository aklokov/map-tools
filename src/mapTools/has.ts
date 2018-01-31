export function has<TKey, TVal>(map: Map<TKey, TVal>, key: TKey): boolean {
  return map.has(key);
}
