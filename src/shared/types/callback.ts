export type Callback<Args extends any[] = any[], T = any> = (
  ...args: Args
) => T;

export type PromiseCallback<Args extends any[] = any[], T = any> = (
  ...args: Args
) => Promise<T>;
