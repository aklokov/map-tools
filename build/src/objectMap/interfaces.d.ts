export interface IMap<TValue = string> {
    [id: string]: TValue;
}
export interface ILookup<TValue = string> extends IMap<TValue[]> {
}
export interface INumberMap<TValue = string> {
    [id: number]: TValue;
}
export interface INumberLookup<TValue = string> extends INumberMap<TValue[]> {
}
