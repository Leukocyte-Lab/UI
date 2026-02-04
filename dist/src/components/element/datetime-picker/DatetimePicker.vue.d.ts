import type { DatetimePicker } from './DatetimePicker.model';
declare const __VLS_export: import("vue").DefineComponent<DatetimePicker.BaseProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Date) => any;
    "update:start": (value: Date) => any;
    "update:end": (value: Date) => any;
    confirm: () => any;
}, string, import("vue").PublicProps, Readonly<DatetimePicker.BaseProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    "onUpdate:start"?: ((value: Date) => any) | undefined;
    "onUpdate:end"?: ((value: Date) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    type: DatetimePicker.Type;
    enableTime: boolean;
    weekStart: DatetimePicker.WeekStart;
    lang: string | Intl.Locale | readonly (string | Intl.Locale)[];
    minYear: number;
    maxYear: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
