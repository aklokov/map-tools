import { INumberMap, IMap } from "./interfaces";
import { selector, stringSelector, numberSelector } from "../selectors";
import { nullObject } from "@vlr/object-tools";
import { extend } from "./extend";

export function toMap<TVal>(array: TVal[], key: stringSelector<TVal>): IMap<TVal>;
export function toMap<TVal>(array: TVal[], key: numberSelector<TVal>): INumberMap<TVal>;
export function toMap<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): IMap<TVal>;
export function toMap<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberMap<TVal>;
export function toMap<TSrc, TVal>(
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): IMap<TVal> | INumberMap<TVal> {
  const resultMap = nullObject<IMap<TVal>>();
  if (!array) { return resultMap; }
  return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}

export function addToMap<TVal>(map: IMap<TVal>, array: TVal[], key: stringSelector<TVal>): IMap<TVal>;
export function addToMap<TVal>(map: INumberMap<TVal>, array: TVal[], key: numberSelector<TVal>): INumberMap<TVal>;
export function addToMap<TSrc, TVal>(map: IMap<TVal>, array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): IMap<TVal>;
export function addToMap<TSrc, TVal>(map: INumberMap<TVal>, array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberMap<TVal>;
export function addToMap<TSrc, TVal>(
  map: IMap<TVal>,
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): IMap<TVal> | INumberMap<TVal> {
  const resultMap = extend(map);
  if (!array) { return resultMap; }
  return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}

function valuesMap<TSrc, TVal>(
  resultMap: IMap<TVal>,
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): IMap<TVal> | INumberMap<TVal> {
  for (let item of array) {
    resultMap[keySelector(item)] = valSelector(item);
  }
  return resultMap;
}

function itemsMap<TSrc, TVal>(
  resultMap: IMap<TVal>,
  array: TSrc[],
  keySelector: stringSelector<TSrc> | numberSelector<TSrc>): IMap<TVal> | INumberMap<TVal> {

  for (let item of array) {
    resultMap[keySelector(item)] = <any>item;
  }
  return resultMap;
}
