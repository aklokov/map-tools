import { selector } from "../selectors";
export interface Group<TKey = string, TVal = string> extends Map<TKey, TVal[]> {
}
export declare function toGroup<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Group<TKey, TVal>;
export declare function toGroup<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Group<TKey, TVal>;
