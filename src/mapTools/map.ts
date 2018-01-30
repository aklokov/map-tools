import { selector } from "../selectors";
import { cloneMap } from "./cloneMap";

export function map<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export function map<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;

export function map<TSrc, TKey, TVal>(
  array: TSrc[],
  keySelector: selector<TSrc, TKey>,
  valSelector?: selector<TSrc, TVal>): Map<TKey, TVal> {
  const resultMap = new Map<TKey, TVal>();
  if (!array) { return resultMap; }
  return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}

export function addMap<TKey, TVal>(map: Map<TKey, TVal>, array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export function addMap<TSrc, TKey, TVal>(map: Map<TKey, TVal>, array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;
export function addMap<TSrc, TKey, TVal>(
  map: Map<TKey, TVal>,
  array: TSrc[],
  keySelector: selector<TSrc, TKey>,
  valSelector?: selector<TSrc, TVal>): Map<TKey, TVal> {
  const resultMap = cloneMap(map);
  if (!array) { return resultMap; }
  return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}

function itemsMap<TSrc, TKey, TVal>(map: Map<TKey, TVal>, array: TSrc[], keySelector: selector<TSrc, TKey>): Map<TKey, TVal> {
  for (let item of array) {
    map.set(keySelector(item), <any>item);
  }
  return map;
}

function valuesMap<TSrc, TKey, TVal>(map: Map<TKey, TVal>, array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal> {
  for (let item of array) {
    map.set(key(item), val(item));
  }
  return map;
}
