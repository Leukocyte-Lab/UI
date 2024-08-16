export type Dictionary<T, PK extends keyof T> = T[PK] extends string | number | symbol ? Map<T[PK], T> : never;
