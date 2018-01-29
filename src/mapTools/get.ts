export function get<TKey, TVal>(map: Map<TKey, TVal>, key: TKey): TVal {
  return map.get(key);
}
