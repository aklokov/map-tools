import { selector } from '../selectors';
export interface Lookup<TKey = string, TVal = string> extends Map<TKey, TVal[]> {
}
export declare function lookup<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Lookup<TKey, TVal>;
export declare function lookup<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Lookup<TKey, TVal>;
