import type { DropDown } from '../../../components/element/dropdown/DropDown.model';
import type { ObjectLike } from '../../../shared/types/object';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DropDown.Props>, {
    items: () => never[];
    level: string;
    variant: string;
    size: string;
    multiple: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": ((option: ObjectLike) => void) & ((options: ObjectLike[]) => void);
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DropDown.Props>, {
    items: () => never[];
    level: string;
    variant: string;
    size: string;
    multiple: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((options: ObjectLike[]) => any) | undefined;
}, {
    items: ObjectLike[];
    variant: "rect" | "rounded";
    level: "primary" | "secondary" | "tertiary";
    size: "small" | "medium" | "large" | "huge";
    multiple: boolean;
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
