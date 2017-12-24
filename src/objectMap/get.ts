import { INumberMap, IMap } from './interfaces';
import { isFunction } from '@vlr/object-tools';

export function get<T>(map: IMap<T>, key: string): T;
export function get<T>(map: INumberMap<T>, key: number): T;

export function get<T>(map: IMap<T> | INumberMap<T>, key: string | number): T {
  if (isFunction(map.hasOwnProperty) && !map.hasOwnProperty(key)) {
    return undefined;
  }

  return map[key];
}

