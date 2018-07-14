import { IMap, INumberMap } from "./interfaces";
export declare function toEs6Map<TVal>(map: IMap<TVal>): Map<string, TVal>;
export declare function toEs6Map<TVal>(map: INumberMap<TVal>): Map<string, TVal>;
