import { selector } from "../selectors";
export interface Lookup<TKey = string, TVal = string> extends Map<TKey, TVal[]> { }

export function lookup<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Lookup<TKey, TVal>;
export function lookup<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Lookup<TKey, TVal>;
export function lookup<TSrc, TKey, TVal>(
  array: TSrc[],
  keySelector: selector<TSrc, TKey>,
  valSelector?: selector<TSrc, TVal>): Lookup<TKey, TVal> {
  if (!array) { return new Map<TKey, TVal[]>(); }
  return valSelector ? valuesLookup(array, keySelector, valSelector) : itemsLookup(array, keySelector);
}

function itemsLookup<TSrc, TKey, TVal>(array: TSrc[], keySelector: selector<TSrc, TKey>): Lookup<TKey, TVal> {
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
  valSelector: selector<TSrc, TVal>): Lookup<TKey, TVal> {
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
