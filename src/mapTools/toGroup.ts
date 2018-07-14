import { selector } from "../selectors";
export interface Group<TKey = string, TVal = string> extends Map<TKey, TVal[]> { }

export function toGroup<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Group<TKey, TVal>;
export function toGroup<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Group<TKey, TVal>;
export function toGroup<TSrc, TKey, TVal>(
  array: TSrc[],
  keySelector: selector<TSrc, TKey>,
  valSelector?: selector<TSrc, TVal>): Group<TKey, TVal> {
  if (!array) { return new Map<TKey, TVal[]>(); }
  return valSelector ? valuesLookup(array, keySelector, valSelector) : itemsLookup(array, keySelector);
}

function itemsLookup<TSrc, TKey, TVal>(array: TSrc[], keySelector: selector<TSrc, TKey>): Group<TKey, TVal> {
  const result = new Map<TKey, TVal[]>();
  for (let item of array) {
    const key = keySelector(item);
    let list = result.get(key);
    if (!list) {
      result.set(key, list = []);
    }
    list.push(<any>item);
  }
  return result;
}

function valuesLookup<TSrc, TKey, TVal>(
  array: TSrc[],
  keySelector: selector<TSrc, TKey>,
  valSelector: selector<TSrc, TVal>): Group<TKey, TVal> {
  const result = new Map<TKey, TVal[]>();
  for (let item of array) {
    const key = keySelector(item);
    let list = result.get(key);
    if (!list) {
      result.set(key, list = []);
    }
    list.push(valSelector(item));
  }
  return result;
}
