import type { VNode } from 'vue';
import type { CardList } from './CardList.model';
import type { EmptyObject, ObjectLike } from '../../../shared/types/object';
declare function __VLS_template(): Readonly<{
    default: (props: {
        item: CardList.Props["items"][number];
        index: number;
        selected: boolean;
    }) => VNode;
    footer?: (props: EmptyObject) => VNode;
    placeholder?: (props: EmptyObject) => VNode;
}> & {
    default: (props: {
        item: CardList.Props["items"][number];
        index: number;
        selected: boolean;
    }) => VNode;
    footer?: (props: EmptyObject) => VNode;
    placeholder?: (props: EmptyObject) => VNode;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<CardList.Props>, {
    items: () => never[];
    modelValue: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (option: string) => void;
    "update:sort": (option: CardList.SortOption) => void;
    "update:filter": (option: CardList.FilterOption[]) => void;
    "update:selected": (option: ObjectLike) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<CardList.Props>, {
    items: () => never[];
    modelValue: string;
}>>> & {
    "onUpdate:modelValue"?: ((option: string) => any) | undefined;
    "onUpdate:sort"?: ((option: CardList.SortOption) => any) | undefined;
    "onUpdate:filter"?: ((option: CardList.FilterOption[]) => any) | undefined;
    "onUpdate:selected"?: ((option: ObjectLike) => any) | undefined;
}, {
    items: ObjectLike[];
    modelValue: string;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
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
