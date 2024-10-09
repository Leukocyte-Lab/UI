import type { StoryFn } from '@storybook/vue3';
declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (option: string) => void;
            "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
            "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
            "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, {}, {}, {}, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        sort: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
        };
        filter: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
        items: {
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
        };
        fields: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
            required: true;
        };
        sortOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
        };
        filterOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (option: string) => void;
        "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
        "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
        "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
    }, string, {
        items: import("../../../shared/index.js").ObjectLike[];
        modelValue: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        }> & {
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        };
    });
    tags: string[];
    argTypes: {
        items: {
            control: "object";
            description: string;
        };
        fields: {
            control: "object";
            description: string;
        };
        sortOptions: {
            control: "object";
            description: string;
        };
        filterOptions: {
            control: "object";
            description: string;
        };
        modelValue: {
            control: "text";
            description: string;
        };
        selected: {
            control: "object";
            description: string;
        };
        sort: {
            control: "object";
            description: string;
        };
        filter: {
            control: "object";
            description: string;
        };
        groupBy: {
            control: "text";
            description: string;
        };
        'onUpdate:modelValue': {
            action: string;
        };
        'onUpdate:sort': {
            action: string;
        };
        'onUpdate:filter': {
            action: string;
        };
        'onUpdate:selected': {
            action: string;
        };
    };
};
export default _default;
export declare const DefaultCardList: {
    render: StoryFn<{
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (option: string) => void;
            "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
            "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
            "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, {}, {}, {}, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        sort: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
        };
        filter: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
        items: {
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
        };
        fields: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
            required: true;
        };
        sortOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
        };
        filterOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (option: string) => void;
        "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
        "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
        "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
    }, string, {
        items: import("../../../shared/index.js").ObjectLike[];
        modelValue: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        }> & {
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        };
    })>;
    args: {
        items: {
            name: string;
            description: string;
            category: string;
            types: string[];
            recentlyUsed: string;
            installed: string;
        }[];
        fields: {
            key: string;
            title: string;
        };
        sortOptions: {
            label: string;
            detail: string;
            direction: string;
            field: string;
            icon: string;
        }[];
        filterOptions: {
            field: string;
            label: string;
        }[];
        groupBy: string;
    };
};
export declare const SimpleCardList: {
    render: StoryFn<{
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (option: string) => void;
            "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
            "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
            "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, {}, {}, {}, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        sort: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
        };
        filter: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
        items: {
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
        };
        fields: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
            required: true;
        };
        sortOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
        };
        filterOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (option: string) => void;
        "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
        "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
        "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
    }, string, {
        items: import("../../../shared/index.js").ObjectLike[];
        modelValue: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        }> & {
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        };
    })>;
    args: {
        groupBy: undefined;
        items: {
            name: string;
            description: string;
            category: string;
            types: string[];
            recentlyUsed: string;
            installed: string;
        }[];
        fields: {
            key: string;
            title: string;
        };
        sortOptions: {
            label: string;
            detail: string;
            direction: string;
            field: string;
            icon: string;
        }[];
        filterOptions: {
            field: string;
            label: string;
        }[];
    };
};
export declare const MultiFilterCardList: {
    render: StoryFn<{
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (option: string) => void;
            "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
            "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
            "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            sort: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
            };
            filter: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
            items: {
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
                type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
            };
            fields: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
                required: true;
            };
            sortOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
            };
            filterOptions: {
                type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
        }, {}, {}, {}, {}, {
            items: import("../../../shared/index.js").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        sort: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption>;
        };
        filter: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
        items: {
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike[]>;
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
            type: import("vue").PropType<import("../../../shared/index.js").ObjectLike | null>;
        };
        fields: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.Fields>;
            required: true;
        };
        sortOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.SortOption[]>;
        };
        filterOptions: {
            type: import("vue").PropType<import("./CardList.model.js").CardList.FilterOption[]>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.js").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.js").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.js").ObjectLike) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (option: string) => void;
        "update:sort": (option: import("./CardList.model.js").CardList.SortOption) => void;
        "update:filter": (option: import("./CardList.model.js").CardList.FilterOption[]) => void;
        "update:selected": (option: import("../../../shared/index.js").ObjectLike) => void;
    }, string, {
        items: import("../../../shared/index.js").ObjectLike[];
        modelValue: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        }> & {
            default: (props: {
                item: import("./CardList.model.js").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.js").EmptyObject) => import("vue").VNode;
        };
    })>;
    args: {
        filterOptions: ({
            field: string;
            label: string;
            multi: string;
            options: string[];
        } | {
            field: string;
            label: string;
            multi?: undefined;
            options?: undefined;
        })[];
        items: {
            name: string;
            description: string;
            category: string;
            types: string[];
            recentlyUsed: string;
            installed: string;
        }[];
        fields: {
            key: string;
            title: string;
        };
        sortOptions: {
            label: string;
            detail: string;
            direction: string;
            field: string;
            icon: string;
        }[];
        groupBy: string;
    };
};
