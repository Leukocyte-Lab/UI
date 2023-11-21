import type { DatetimePicker } from './DatetimePicker.model';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<DatetimePicker.Type>;
        default: string;
    };
    lang: {
        type: import("vue").PropType<string | Intl.Locale | readonly (string | Intl.Locale)[]>;
        default: string;
    };
    end: {
        type: import("vue").PropType<Date>;
    };
    start: {
        type: import("vue").PropType<Date>;
    };
    modelValue: {
        type: import("vue").PropType<Date>;
    };
    enableTime: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    weekStart: {
        type: import("vue").PropType<DatetimePicker.WeekStart>;
        default: string;
    };
    minYear: {
        type: import("vue").PropType<number>;
        default: number;
    };
    maxYear: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date) => void;
    "update:start": (value: Date) => void;
    "update:end": (value: Date) => void;
    confirm: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<DatetimePicker.Type>;
        default: string;
    };
    lang: {
        type: import("vue").PropType<string | Intl.Locale | readonly (string | Intl.Locale)[]>;
        default: string;
    };
    end: {
        type: import("vue").PropType<Date>;
    };
    start: {
        type: import("vue").PropType<Date>;
    };
    modelValue: {
        type: import("vue").PropType<Date>;
    };
    enableTime: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    weekStart: {
        type: import("vue").PropType<DatetimePicker.WeekStart>;
        default: string;
    };
    minYear: {
        type: import("vue").PropType<number>;
        default: number;
    };
    maxYear: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    "onUpdate:start"?: ((value: Date) => any) | undefined;
    "onUpdate:end"?: ((value: Date) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}, {
    type: DatetimePicker.Type;
    lang: string | Intl.Locale | readonly (string | Intl.Locale)[];
    enableTime: boolean;
    weekStart: DatetimePicker.WeekStart;
    minYear: number;
    maxYear: number;
}, {}>;
export default _default;
