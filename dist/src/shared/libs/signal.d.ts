import type { ComputedGetter } from 'vue';
export type Signal<T> = {
    (): T;
    set: (value: T) => void;
    update: (updater: (value: T) => T) => void;
    mutate: (mutator: (value: T) => void) => void;
};
export declare const signal: <T extends unknown>(initialValue: T) => Signal<T>;
export declare const computed: <T>(getter: ComputedGetter<T>) => () => T;
