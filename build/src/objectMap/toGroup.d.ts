import { INumberGroup, IGroup } from "./interfaces";
import { selector, stringSelector, numberSelector } from "../selectors";
export declare function toGroup<TVal>(array: TVal[], key: stringSelector<TVal>): IGroup<TVal>;
export declare function toGroup<TVal>(array: TVal[], key: numberSelector<TVal>): INumberGroup<TVal>;
export declare function toGroup<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): IGroup<TVal>;
export declare function toGroup<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberGroup<TVal>;
export declare function valuesLookup<TSrc, TVal>(array: TSrc[], keySelector: stringSelector<TSrc> | numberSelector<TSrc>, valSelector: selector<TSrc, TVal>): IGroup<TVal> | INumberGroup<TVal>;
export declare function itemsLookup<TSrc, TVal>(array: TSrc[], keySelector: stringSelector<TSrc> | numberSelector<TSrc>): IGroup<TVal> | INumberGroup<TVal>;
