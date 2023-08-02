import type { BaseList } from '../../components/base/BaseList.model';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<BaseList.Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<BaseList.Props>>>, {}, {}>, {
    default: (props: {
        item: import("../../shared/types/object").ObjectLike;
        index: number;
    }) => JSX.Element;
    group?: ((props: {
        group: string | number;
        items: import("../../shared/types/object").ObjectLike[];
    }) => JSX.Element) | undefined;
    placeholder?: ((props: {}) => JSX.Element) | undefined;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
