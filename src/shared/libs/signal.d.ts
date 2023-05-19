import type { ComputedGetter } from './vue/dist/vue.esm-bundler.js';
export declare const signal: <T extends unknown>(initialValue: T) => {
    (): T;
    set(value: T): void;
    update(updater: (value: T) => T): void;
    mutate(mutator: (value: T) => void): void;
};
export declare const computed: <T>(getter: ComputedGetter<T>) => () => T;
