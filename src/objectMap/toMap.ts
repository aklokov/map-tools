import { IMap, INumberMap } from "./interfaces";

export function toMap<TVal>(map: IMap<TVal>): Map<string, TVal>;
export function toMap<TVal>(map: INumberMap<TVal>): Map<string, TVal>;
export function toMap<TVal>(map: IMap<TVal>): Map<string, TVal> {
  const result = new Map<string, TVal>();
  for (let field in map) {
    if (map.hasOwnProperty(field)) {
      result.set(field, map[field]);
    }
  }

  return result;
}
