import { INumberLookup, ILookup } from './interfaces';
import { selector, stringSelector, numberSelector } from '../selectors';
export declare function lookup<TVal>(array: TVal[], key: stringSelector<TVal>): ILookup<TVal>;
export declare function lookup<TVal>(array: TVal[], key: numberSelector<TVal>): INumberLookup<TVal>;
export declare function lookup<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): ILookup<TVal>;
export declare function lookup<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberLookup<TVal>;
export declare function valuesLookup<TSrc, TVal>(array: TSrc[], keySelector: stringSelector<TSrc> | numberSelector<TSrc>, valSelector: selector<TSrc, TVal>): ILookup<TVal> | INumberLookup<TVal>;
export declare function itemsLookup<TSrc, TVal>(array: TSrc[], keySelector: stringSelector<TSrc> | numberSelector<TSrc>): ILookup<TVal> | INumberLookup<TVal>;
