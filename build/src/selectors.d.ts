export declare type selector<TSrc, TVal> = ((item: TSrc) => TVal);
export declare type stringSelector<TSrc> = selector<TSrc, string>;
export declare type numberSelector<TSrc> = selector<TSrc, number>;
