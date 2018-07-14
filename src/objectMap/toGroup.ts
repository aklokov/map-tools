import { INumberGroup, IGroup } from "./interfaces";
import { selector, stringSelector, numberSelector } from "../selectors";
import { nullObject } from "@vlr/object-tools";

export function toGroup<TVal>(array: TVal[], key: stringSelector<TVal>): IGroup<TVal>;
export function toGroup<TVal>(array: TVal[], key: numberSelector<TVal>): INumberGroup<TVal>;
export function toGroup<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): IGroup<TVal>;
export function toGroup<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberGroup<TVal>;
export function toGroup<TSrc, TVal>(
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): IGroup<TVal> | INumberGroup<TVal> {
  if (!array) { return nullObject<IGroup<TVal>>(); }
  return valSelector ? valuesLookup(array, keySelector, valSelector) : itemsLookup(array, keySelector);
}

export function valuesLookup<TSrc, TVal>(
  array: TSrc[], keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector: selector<TSrc, TVal>): IGroup<TVal> | INumberGroup<TVal> {

  const result = nullObject<IGroup<TVal>>();
  for (let item of array) {
    const key = keySelector(item);
    const list = result[key] || (result[key] = []);
    list.push(valSelector(item));
  }
  return result;
}

export function itemsLookup<TSrc, TVal>(
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>): IGroup<TVal> | INumberGroup<TVal> {

  const result = nullObject<IGroup<TVal>>();
  for (let item of array) {
    const key = keySelector(item);
    const list = result[key] || (result[key] = []);
    list.push(<any>item);
  }
  return result;
}
