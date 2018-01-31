import { IMap, INumberMap } from "./interfaces";

export function has<TVal>(map: IMap<TVal>, key: string): boolean;
export function has<TVal>(map: INumberMap<TVal>, key: number): boolean;
export function has<TVal>(map: IMap<TVal>, key: string | number): boolean {
  return map.hasOwnProperty ? map.hasOwnProperty(key) : map[key] !== undefined;
}
