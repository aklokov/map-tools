import { IMap, INumberMap } from "./interfaces";
export declare function toMap<TVal>(map: IMap<TVal>): Map<string, TVal>;
export declare function toMap<TVal>(map: INumberMap<TVal>): Map<string, TVal>;
