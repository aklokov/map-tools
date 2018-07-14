import { IMap, INumberMap } from "./interfaces";

export function toEs6Map<TVal>(map: IMap<TVal>): Map<string, TVal>;
export function toEs6Map<TVal>(map: INumberMap<TVal>): Map<string, TVal>;
export function toEs6Map<TVal>(map: IMap<TVal>): Map<string, TVal> {
  const result = new Map<string, TVal>();
  for (let field in map) {
    if (map.hasOwnProperty(field)) {
      result.set(field, map[field]);
    }
  }

  return result;
}
