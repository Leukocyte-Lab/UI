import { ButtonBox } from '../../../components/element/button/ButtonBox.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonBox.BaseProps>, {
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
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonBox.BaseProps>, {
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
    mode: "normal" | "danger";
    color: "cyan" | "blue" | "green" | "orange" | "red" | "purple";
    variant: "circle" | "rect" | "text" | "rounded" | "square" | "text-square" | "extendable-rect" | "file";
    disabled: boolean;
    bobble: string | number | boolean;
    level: "primary" | "secondary" | "tertiary";
    size: "small" | "medium" | "large" | "huge";
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
