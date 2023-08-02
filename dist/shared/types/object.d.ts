export type ObjectLike<T = any> = Record<string, T>;
export type OptionalObject<T, R extends keyof T = keyof T> = Omit<T, R> & {
    [P in R]?: T[P];
};
export type ValueOf<T> = T[keyof T];
