import { Group } from "./toGroup";
import { IMap, keys } from "../objectMap";
import * as objectHash from "object-hash";
import { values } from "./values";

export type Key = IMap<any>;
export type Selector<T> = (i: T) => any;
export type KeySelector<T> = (i: T) => Key;

type Result<T> = { key: Key; values: T[]; };
type Store<T> = Map<string, Result<T>[]>;

export function groupBy<T, TKey extends Key>(arr: T[], selector: KeySelector<T>): Group<TKey, T>;
export function groupBy<T>(arr: T[], ...selectors: Selector<T>[]): Group<Key, T>;
export function groupBy<T>(arr: T[], ...selectors: Selector<T>[]): Group<Key, T> {
  const store = new Map<string, Result<T>[]>();

  if (selectors.length === 1) {
    arr.forEach(item => {
      const key = selectors[0](item);
      const hash = objectHash(key);
      getResult(store, hash, key).values.push(item);
    });
  } else {
    arr.forEach(item => {
      const key = createKey(item, selectors);
      const hash = objectHash(key);
      getResult(store, hash, key).values.push(item);
    });
  }

  const output = new Map<Key, T[]>();
  values(store).forEach(results => results.forEach(result => { output.set(result.key, result.values); }));
  return output;
}

function getResult<T>(store: Store<T>, hash: string, key: Key): Result<T> {
  const results = store.get(hash);
  if (!results) {
    const result = { key, values: [] };
    store.set(hash, [result]);
    return result;
  }

  let result = results.find(r => compareKey(r.key, key));
  if (result) { return result; }
  result = { key, values: [] };
  results.push(result);
  return result;
}

function createKey<T>(item: T, by: Selector<T>[]): Key {
  const obj = {};
  let i = by.length;
  while (i--) { obj[i] = by[i](item); }
  return obj;
}

function compareKey(key1: Key, key2: Key): boolean {
  const fields = keys(key1);
  let i = fields.length;
  while (i--) {
    if (key1[fields[i]] !== key2[fields[i]]) { return false; }
  }
  return true;
}
