import { inject } from 'vue';

import type { InjectionKey } from 'vue';

import { useCtx } from '@/middleware/context/context.service';

export function createMiddlewareSetup<T>(
  PROVIDE_KEY: InjectionKey<T>,
  setup: (...args: any[]) => T,
  fallback?: T
) {
  return (...args: any[]) => {
    let provided;
    const { app } = useCtx();

    if (fallback) provided = fallback;
    else provided = setup(...args);

    if (app) {
      app.provide(PROVIDE_KEY, provided);
    } else {
      args?.[0]?.app?.provide(PROVIDE_KEY, provided);
    }

    return provided;
  };
}

export function createMiddlewareHook<T>(
  PROVIDE_KEY: InjectionKey<T>,
  setup: (...args: any[]) => T,
  fallback?: T
) {
  return (...args: any[]) => {
    let provided = inject<T>(PROVIDE_KEY);

    if (provided) return provided;

    const { app } = useCtx();

    if (fallback) provided = fallback;
    else provided = setup(...args);

    if (app) {
      app.provide(PROVIDE_KEY, provided);
    } else {
      args?.[0]?.app?.provide(PROVIDE_KEY, provided);
    }

    return provided;
  };
}
