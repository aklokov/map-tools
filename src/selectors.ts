export type selector<TSrc, TVal> = ((item: TSrc) => TVal);
export type stringSelector<TSrc> = selector<TSrc, string>;
export type numberSelector<TSrc> = selector<TSrc, number>;
