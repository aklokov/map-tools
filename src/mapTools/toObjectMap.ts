import { IMap, INumberMap } from "../objectMap";
import { nullObject } from "@vlr/object-tools";

export function toObjectMap<TVal>(map: Map<string, TVal>): IMap<TVal>;
export function toObjectMap<TVal>(map: Map<number, TVal>): INumberMap<TVal>;
export function toObjectMap<TVal>(map: Map<string | number, TVal>): IMap<TVal> {
  const result = nullObject<IMap<TVal>>();
  for (let [key, val] of map) {
    result[key] = val;
  }

  return result;
}
