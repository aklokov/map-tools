import { IMap, INumberMap } from "./interfaces";
import { extend } from "./extend";

export function add<TVal>(map: IMap<TVal>, newKey: string, newVal: TVal): IMap<TVal>;
export function add<TVal>(map: INumberMap<TVal>, newKey: number, newVal: TVal): INumberMap<TVal>;
export function add<TVal>(map: IMap<TVal>, newKey: string | number, newVal: TVal): IMap<TVal> {
  const newMap = extend(map);
  newMap[newKey] = newVal;
  return newMap;
}
