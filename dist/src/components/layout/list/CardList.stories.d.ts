import type { StoryFn } from '@storybook/vue3-vite';
declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
            "update:modelValue": (option: string) => any;
            "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
            "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
            "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
        }, import("vue").PublicProps, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        "update:modelValue": (option: string) => any;
        "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
        "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
        "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
    }, string, {
        items: import("../../../shared/index.ts").ObjectLike[];
        modelValue: string;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default: (props: {
                item: import("./CardList.model.ts").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
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
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
            "update:modelValue": (option: string) => any;
            "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
            "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
            "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
        }, import("vue").PublicProps, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        "update:modelValue": (option: string) => any;
        "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
        "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
        "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
    }, string, {
        items: import("../../../shared/index.ts").ObjectLike[];
        modelValue: string;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default: (props: {
                item: import("./CardList.model.ts").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
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
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
            "update:modelValue": (option: string) => any;
            "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
            "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
            "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
        }, import("vue").PublicProps, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        "update:modelValue": (option: string) => any;
        "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
        "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
        "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
    }, string, {
        items: import("../../../shared/index.ts").ObjectLike[];
        modelValue: string;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default: (props: {
                item: import("./CardList.model.ts").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
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
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
            "update:modelValue": (option: string) => any;
            "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
            "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
            "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
        }, import("vue").PublicProps, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
            "onUpdate:modelValue"?: ((option: string) => any) | undefined;
            "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
            "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
            "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
        }>, {}, {}, {}, {}, {
            items: import("../../../shared/index.ts").ObjectLike[];
            modelValue: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./CardList.model.ts").CardList.Props> & Readonly<{
        "onUpdate:modelValue"?: ((option: string) => any) | undefined;
        "onUpdate:sort"?: ((option: import("./CardList.model.ts").CardList.SortOption) => any) | undefined;
        "onUpdate:filter"?: ((option: import("./CardList.model.ts").CardList.FilterOption[]) => any) | undefined;
        "onUpdate:selected"?: ((option: import("../../../shared/index.ts").ObjectLike) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        "update:modelValue": (option: string) => any;
        "update:sort": (option: import("./CardList.model.ts").CardList.SortOption) => any;
        "update:filter": (option: import("./CardList.model.ts").CardList.FilterOption[]) => any;
        "update:selected": (option: import("../../../shared/index.ts").ObjectLike) => any;
    }, string, {
        items: import("../../../shared/index.ts").ObjectLike[];
        modelValue: string;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default: (props: {
                item: import("./CardList.model.ts").CardList.Props["items"][number];
                index: number;
                selected: boolean;
            }) => import("vue").VNode;
            footer?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
            placeholder?: (props: import("../../../shared/types/object.ts").EmptyObject) => import("vue").VNode;
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
