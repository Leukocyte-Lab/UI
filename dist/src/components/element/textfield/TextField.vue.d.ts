import type { TextField } from '../../../components/element/textfield/TextField.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TextField.Props>, {
    type: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    spellcheck: boolean;
    autocomplete: string;
    iconAlign: string;
}>, {
    checkValidity: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    validation: (value: ValidityState) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TextField.Props>, {
    type: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    spellcheck: boolean;
    autocomplete: string;
    iconAlign: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidation?: ((value: ValidityState) => any) | undefined;
}, {
    type: TextField.Type;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    autocomplete: string;
    spellcheck: boolean;
    iconAlign: "left" | "right";
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
