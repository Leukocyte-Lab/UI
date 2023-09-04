import { ref, reactive } from 'vue';
import { computedEager } from '@vueuse/core';

import type { UseI18n } from '@/middleware/i18n/i18n.model';

const state = reactive({
  language: ref(Intl.DateTimeFormat().resolvedOptions().locale),
  timeZone: ref(Intl.DateTimeFormat().resolvedOptions().timeZone)
});

export const useI18n = (): UseI18n => {
  const getters = {
    language: computedEager(() => state.language),
    timeZone: computedEager(() => state.timeZone)
  };

  const actions = {
    setLanguage: (language: string) => {
      state.language = language;
    },
    setTimeZone: (timeZone: string) => {
      state.timeZone = timeZone;
    }
  };

  return {
    ...getters,
    ...actions
  };
};
