import type { VNode } from 'vue';
import type { CardList } from './CardList.model';
import type { EmptyObject, ObjectLike } from '../../../shared/types/object';
type __VLS_Slots = {
    default: (props: {
        item: CardList.Props['items'][number];
        index: number;
        selected: boolean;
    }) => VNode;
    footer?: (props: EmptyObject) => VNode;
    placeholder?: (props: EmptyObject) => VNode;
};
declare const __VLS_base: import("vue").DefineComponent<CardList.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (option: string) => any;
    "update:sort": (option: CardList.SortOption) => any;
    "update:filter": (option: CardList.FilterOption[]) => any;
    "update:selected": (option: ObjectLike) => any;
}, string, import("vue").PublicProps, Readonly<CardList.Props> & Readonly<{
    "onUpdate:modelValue"?: ((option: string) => any) | undefined;
    "onUpdate:sort"?: ((option: CardList.SortOption) => any) | undefined;
    "onUpdate:filter"?: ((option: CardList.FilterOption[]) => any) | undefined;
    "onUpdate:selected"?: ((option: ObjectLike) => any) | undefined;
}>, {
    items: ObjectLike[];
    modelValue: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
