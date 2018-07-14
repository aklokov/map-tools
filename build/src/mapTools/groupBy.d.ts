import { Group } from "./toGroup";
import { IMap } from "../objectMap";
export declare type Key = IMap<any>;
export declare type Selector<T> = (i: T) => any;
export declare type KeySelector<T> = (i: T) => Key;
export declare function groupBy<T, TKey extends Key>(arr: T[], selector: KeySelector<T>): Group<TKey, T>;
export declare function groupBy<T>(arr: T[], ...selectors: Selector<T>[]): Group<Key, T>;
