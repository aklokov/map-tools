export interface IMap<TValue = string> { [id: string]: TValue; }
export interface IGroup<TValue = string> extends IMap<TValue[]> { }

export interface INumberMap<TValue = string> { [id: number]: TValue; }
export interface INumberGroup<TValue = string> extends INumberMap<TValue[]> { }
