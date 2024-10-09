import { ButtonBox } from '../../../components/element/button/ButtonBox.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ButtonBox.BaseProps>, {
    variant: string;
    level: string;
    size: string;
    color: string;
    mode: string;
    disabled: boolean;
    bobble: boolean;
    loading: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ButtonBox.BaseProps>, {
    variant: string;
    level: string;
    size: string;
    color: string;
    mode: string;
    disabled: boolean;
    bobble: boolean;
    loading: boolean;
}>>> & {
    onClick?: ((event: MouseEvent) => any) | undefined;
}, {
    color: keyof typeof ButtonBox.Color;
    variant: keyof typeof ButtonBox.Variant;
    size: keyof typeof ButtonBox.Size;
    disabled: boolean;
    bobble: boolean | number | string;
    level: keyof typeof ButtonBox.Level;
    mode: keyof typeof ButtonBox.Mode;
    loading: boolean;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
