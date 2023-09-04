import type { Signal } from '@/shared/libs/signal';

export interface UseI18n {
  language: Signal<string>;
  timeZone: Signal<string>;
};
