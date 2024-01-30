import type { ButtonBox } from '../../../components/element/button/ButtonBox.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonBox.BaseProps>, {
    disabled: boolean;
    bobble: boolean;
    variant: string;
    level: string;
    size: string;
    color: string;
    loading: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonBox.BaseProps>, {
    disabled: boolean;
    bobble: boolean;
    variant: string;
    level: string;
    size: string;
    color: string;
    loading: boolean;
}>>> & {
    onClick?: ((event: MouseEvent) => any) | undefined;
}, {
    color: ButtonBox.Color;
    variant: ButtonBox.Variant;
    disabled: boolean;
    bobble: number | boolean;
    level: ButtonBox.Level;
    size: ButtonBox.Size;
    loading: boolean;
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
