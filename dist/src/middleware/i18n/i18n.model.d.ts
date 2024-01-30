import type { Ref } from 'vue';
export interface UseI18n {
    language: Readonly<Ref<string>>;
    timeZone: Readonly<Ref<string>>;
    setLanguage: (language: string) => void;
    setTimeZone: (timeZone: string) => void;
}
