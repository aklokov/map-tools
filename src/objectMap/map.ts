import { INumberMap, IMap } from './interfaces';
import { selector, stringSelector, numberSelector } from '../selectors';
import { create } from './create';

export function map<TVal>(array: TVal[], key: stringSelector<TVal>): IMap<TVal>;
export function map<TVal>(array: TVal[], key: numberSelector<TVal>): INumberMap<TVal>;
export function map<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): IMap<TVal>;
export function map<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberMap<TVal>;
export function map<TSrc, TVal>(
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): IMap<TVal> | INumberMap<TVal> {
  if (!array) { return create<IMap<TVal>>(); }
  return valSelector ? valuesMap(array, keySelector, valSelector) : itemsMap(array, keySelector);
}

export function valuesMap<TSrc, TVal>(
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): IMap<TVal> | INumberMap<TVal> {

  const result = create<IMap<TVal>>();
  for (let item of array) {
    result[keySelector(item)] = valSelector(item);
  }
  return result;
}

export function itemsMap<TSrc, TVal>(
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>): IMap<TVal> | INumberMap<TVal> {

  const result = create<IMap<TVal>>();
  for (let item of array) {
    result[keySelector(item)] = <any>item;
  }
  return result;
}
