import type { ComputedGetter, ShallowRef } from 'vue';
declare const SIGNAL_DEBUG_INSPECTION: unique symbol;
export type Signal<T> = {
    (): T;
    readonly set: (value: T) => void;
    readonly update: (updater: (value: T) => T) => void;
    readonly mutate: (mutator: (value: T) => void) => void;
    readonly [SIGNAL_DEBUG_INSPECTION]: ShallowRef<T>;
};
export declare const signal: <T>(initialValue: T) => Signal<T>;
export declare const computed: <T>(getter: ComputedGetter<T>) => (() => T);
export declare const toggleSignal: (signal: Signal<boolean>) => void;
export declare const debug: <T>(signal: Signal<T>) => ShallowRef<T>;
export {};
