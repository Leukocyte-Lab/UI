import type { ObjectLike } from '../../../shared/types/object';
import type { CardList } from './CardList.model';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    sort: {
        type: import("vue").PropType<CardList.SortOption>;
    };
    filter: {
        type: import("vue").PropType<CardList.FilterOption[]>;
    };
    items: {
        type: import("vue").PropType<ObjectLike[]>;
        required: true;
        default: () => never[];
    };
    groupBy: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    selected: {
        type: import("vue").PropType<ObjectLike | null>;
    };
    fields: {
        type: import("vue").PropType<import("../../element/menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    sortOptions: {
        type: import("vue").PropType<CardList.SortOption[]>;
    };
    filterOptions: {
        type: import("vue").PropType<CardList.FilterOption[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (option: string) => void;
    "update:sort": (option: CardList.SortOption) => void;
    "update:filter": (option: CardList.FilterOption[]) => void;
    "update:selected": (option: ObjectLike) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sort: {
        type: import("vue").PropType<CardList.SortOption>;
    };
    filter: {
        type: import("vue").PropType<CardList.FilterOption[]>;
    };
    items: {
        type: import("vue").PropType<ObjectLike[]>;
        required: true;
        default: () => never[];
    };
    groupBy: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    selected: {
        type: import("vue").PropType<ObjectLike | null>;
    };
    fields: {
        type: import("vue").PropType<import("../../element/menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    sortOptions: {
        type: import("vue").PropType<CardList.SortOption[]>;
    };
    filterOptions: {
        type: import("vue").PropType<CardList.FilterOption[]>;
    };
}>> & {
    "onUpdate:modelValue"?: ((option: string) => any) | undefined;
    "onUpdate:sort"?: ((option: CardList.SortOption) => any) | undefined;
    "onUpdate:filter"?: ((option: CardList.FilterOption[]) => any) | undefined;
    "onUpdate:selected"?: ((option: ObjectLike) => any) | undefined;
}, {
    items: ObjectLike[];
    modelValue: string;
}, {}>, {
    default: (props: {
        item: ObjectLike;
        index: number;
        selected: boolean;
    }) => JSX.Element;
    footer?: ((props: {}) => JSX.Element) | undefined;
    placeholder?: ((props: {}) => JSX.Element) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
