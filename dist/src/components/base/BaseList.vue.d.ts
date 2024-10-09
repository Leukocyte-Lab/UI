import type { VNode } from 'vue';
import type { BaseList } from '../../components/base/BaseList.model';
import type { EmptyObject } from '../../shared/types/object';
declare function __VLS_template(): Readonly<{
    default: (props: {
        item: BaseList.Props["items"][number];
        index: number;
    }) => VNode;
    group?: (props: {
        group: string | number;
        items: BaseList.Props["items"];
    }) => VNode;
    placeholder?: (props: EmptyObject) => VNode;
}> & {
    default: (props: {
        item: BaseList.Props["items"][number];
        index: number;
    }) => VNode;
    group?: (props: {
        group: string | number;
        items: BaseList.Props["items"];
    }) => VNode;
    placeholder?: (props: EmptyObject) => VNode;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<BaseList.Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<BaseList.Props>>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
