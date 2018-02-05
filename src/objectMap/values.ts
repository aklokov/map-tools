import { IMap, INumberMap } from "./interfaces";
import { forIn } from "@vlr/object-tools";

export function values<TVal = any>(map: IMap<TVal>): TVal[];
export function values<TVal = any>(map: INumberMap<TVal>): TVal[];
export function values<TVal>(map: IMap<TVal>): TVal[] {
  const result: TVal[] = [];
  forIn(map, value => result.push(value));
  return result;
}
