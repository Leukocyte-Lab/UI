import type { ObjectLike } from '@/shared/types/object';
import type { SelectMenu as SelectMenuNS } from '@/components/element/menu/SelectMenu.model';
declare namespace SearchBar {
    type Props = {
        fields: SelectMenuNS.Props['fields'];
        modelValue?: string;
        items?: ObjectLike<any>[];
        disabled?: boolean;
    };
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SearchBar.Props>, {
    items: () => never[];
    modelValue: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (option: any) => void;
    select: (option: ObjectLike<any>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SearchBar.Props>, {
    items: () => never[];
    modelValue: string;
}>>> & {
    onSelect?: ((option: ObjectLike<any>) => any) | undefined;
    "onUpdate:modelValue"?: ((option: any) => any) | undefined;
}, {
    modelValue: string;
    items: ObjectLike<any>[];
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
