import { IMap, INumberMap } from '../objectMap';
export declare function toObjectMap<TVal>(map: Map<string, TVal>): IMap<TVal>;
export declare function toObjectMap<TVal>(map: Map<number, TVal>): INumberMap<TVal>;
