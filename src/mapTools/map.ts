import { selector } from "../selectors";
export function map<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export function map<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;

export function map<TSrc, TKey, TVal>(
  array: TSrc[],
  keySelector: selector<TSrc, TKey>,
  valSelector?: selector<TSrc, TVal>): Map<TKey, TVal> {
  if (!array) { return new Map<TKey, TVal>(); }
  return valSelector ? valuesMap(array, keySelector, valSelector) : itemsMap(array, keySelector);
}

function itemsMap<TSrc, TKey, TVal>(array: TSrc[], keySelector: selector<TSrc, TKey>): Map<TKey, TVal> {
  const result = new Map<TKey, TVal>();
  for (let item of array) {
    result.set(keySelector(item), <any>item);
  }
  return result;
}

function valuesMap<TSrc, TKey, TVal>(array: TSrc[], keySelector: selector<TSrc, TKey>, valSelector: selector<TSrc, TVal>): Map<TKey, TVal> {
  const result = new Map<TKey, TVal>();
  for (let item of array) {
    result.set(keySelector(item), valSelector(item));
  }
  return result;
}
