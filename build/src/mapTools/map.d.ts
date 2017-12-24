import { selector } from '../selectors';
export declare function map<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export declare function map<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;
