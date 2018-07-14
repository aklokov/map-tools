import { Group } from "./toGroup";
import { IMap } from "../objectMap";
export declare type Selector<T> = (item: T) => any;
export declare type Key = IMap<any>;
export declare function groupBy<T>(arr: T[], ...selectors: Selector<T>[]): Group<Key, T>;
