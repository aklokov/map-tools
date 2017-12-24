import { INumberMap, IMap } from './interfaces';
export declare function get<T>(map: IMap<T>, key: string): T;
export declare function get<T>(map: INumberMap<T>, key: number): T;
