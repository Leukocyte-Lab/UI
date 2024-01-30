import type { VNode } from 'vue';
import type { ObjectLike } from '../../../shared/types/object';
import type { CardList } from './CardList.model';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CardList.Props>, {
    items: () => never[];
    modelValue: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (option: string) => void;
    "update:sort": (option: CardList.SortOption) => void;
    "update:filter": (option: CardList.FilterOption[]) => void;
    "update:selected": (option: ObjectLike) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CardList.Props>, {
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
}, {}>, Readonly<{
    default: (props: {
        item: ObjectLike;
        index: number;
        selected: boolean;
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    footer?: ((props: {}) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
    placeholder?: ((props: {}) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
}> & {
    default: (props: {
        item: ObjectLike;
        index: number;
        selected: boolean;
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    footer?: ((props: {}) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
    placeholder?: ((props: {}) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
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
