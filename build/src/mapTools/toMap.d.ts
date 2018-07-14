import { selector } from "../selectors";
export declare function toMap<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export declare function toMap<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;
export declare function addToMap<TKey, TVal>(map: Map<TKey, TVal>, array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export declare function addToMap<TSrc, TKey, TVal>(map: Map<TKey, TVal>, array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;
