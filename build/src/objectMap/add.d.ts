import { IMap, INumberMap } from "./interfaces";
export declare function add<TVal>(map: IMap<TVal>, newKey: string, newVal: TVal): IMap<TVal>;
export declare function add<TVal>(map: INumberMap<TVal>, newKey: number, newVal: TVal): INumberMap<TVal>;
