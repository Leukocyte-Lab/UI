import type { InjectionKey } from 'vue';

import { createMiddlewareHook } from '@/middleware/util/factory';

import { signal } from '@/shared/libs/signal';

import type { UseI18n } from '@/middleware/i18n/i18n.model';

const PROVIDE_KEY: InjectionKey<UseI18n> = Symbol('I18n');

const useI18n$ = () => {
  const language = signal(Intl.DateTimeFormat().resolvedOptions().locale);
  const timeZone = signal(Intl.DateTimeFormat().resolvedOptions().timeZone);

  return {
    language,
    timeZone
  };
};

export const useI18n = createMiddlewareHook(PROVIDE_KEY, useI18n$);
