import type { InjectionKey } from 'vue';
export declare function createMiddlewareSetup<T>(PROVIDE_KEY: InjectionKey<T>, setup: (...args: any[]) => T, fallback?: T): (...args: any[]) => T;
export declare function createMiddlewareHook<T>(PROVIDE_KEY: InjectionKey<T>, setup: (...args: any[]) => T, fallback?: T): (...args: any[]) => T;
