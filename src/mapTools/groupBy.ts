import { Group } from "./toGroup";
import { IMap } from "../objectMap";
import * as objectHash from "object-hash";
import { values } from "./values";

export type Selector<T> = (item: T) => any;
export type Key = IMap<any>;

interface Result<T> {
  key: Key;
  values: T[];
}

type Store<T> = Map<string, Result<T>[]>;

export function groupBy<T>(arr: T[], ...selectors: Selector<T>[]): Group<Key, T> {
  const store = new Map<string, Result<T>[]>();

  arr.forEach(item => {
    const key = createKey(item, selectors);
    const hash = objectHash(key);
    const result = getResult(store, hash, key, selectors.length);
    result.values.push(item);
  });

  const output = new Map<Key, T[]>();
  values(store).forEach(results => results.forEach(result => { output.set(result.key, result.values); }));
  return output;
}

function getResult<T>(store: Store<T>, hash: string, key: Key, length: number): Result<T> {
  const results = store.get(hash);
  if (!results) {
    const result = { key, values: [] };
    store.set(hash, [result]);
    return result;
  }

  let result = results.find(r => compareKey(r.key, key, length));
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

function compareKey(obj1: Key, obj2: IMap<any>, length: number): boolean {
  let i = length;
  while (i--) {
    if (obj1[i] !== obj2[i]) { return false; }
  }
  return true;
}
