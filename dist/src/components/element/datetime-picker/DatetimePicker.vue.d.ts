import type { DatetimePicker } from './DatetimePicker.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DatetimePicker.BaseProps>, {
    type: string;
    enableTime: boolean;
    weekStart: string;
    minYear: number;
    maxYear: number;
    lang: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date) => void;
    "update:start": (value: Date) => void;
    "update:end": (value: Date) => void;
    confirm: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DatetimePicker.BaseProps>, {
    type: string;
    enableTime: boolean;
    weekStart: string;
    minYear: number;
    maxYear: number;
    lang: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    "onUpdate:start"?: ((value: Date) => any) | undefined;
    "onUpdate:end"?: ((value: Date) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}, {
    type: DatetimePicker.Type;
    enableTime: boolean;
    weekStart: DatetimePicker.WeekStart;
    lang: string | Intl.Locale | readonly (string | Intl.Locale)[];
    minYear: number;
    maxYear: number;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
