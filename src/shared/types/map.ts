export type Dictionary<T, PK extends keyof T> = Map<T[PK], T>;
