import { IMap, INumberMap } from "./interfaces";
import { forIn } from "@vlr/object-tools";

export function keys<TVal>(map: IMap<TVal>): string[] {
  const result: string[] = [];
  forIn(map, (value, key) => result.push(key));
  return result;
}

export function Nkeys<TVal>(map: INumberMap<TVal>): number[] {
  const result: number[] = [];
  forIn(map, (value, key) => result.push(+key));
  return result;
}
