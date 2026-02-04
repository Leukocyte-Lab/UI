import type { Meta, StoryFn } from '@storybook/vue3-vite';
import TabGroup from './TabGroup.vue';
declare const meta: Meta<typeof TabGroup>;
export default meta;
export declare const DefaultTabGroup: {
    args: {
        tabs: {
            id: string;
            name: string;
            content: string;
        }[];
        modelValue: {
            id: string;
            name: string;
            content: string;
        };
    };
};
export declare const DefaultTabGroupWithoutParentModel: {
    args: {
        tabs: {
            id: string;
            name: string;
            content: string;
        }[];
    };
};
export declare const DefaultTabGroupWithIcon: {
    args: {
        tabs: {
            id: string;
            name: string;
            icon: string;
            content: string;
        }[];
        modelValue: {
            id: string;
            name: string;
            icon: string;
            content: string;
        };
    };
};
export declare const SecondaryTabGroup: {
    args: {
        level: string;
        tabs: {
            id: string;
            name: string;
            icon: string;
            content: string;
        }[];
        modelValue: {
            id: string;
            name: string;
            icon: string;
            content: string;
        };
    };
};
export declare const DefaultTabGroupWithSlot: {
    render: StoryFn<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./TabGroup.model.ts").TabGroup.Props & {
            modelValue?: import("./TabGroup.model.ts").TabGroup.Tab.Model;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import("./TabGroup.model.ts").TabGroup.Tab.Model | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: import("./TabGroup.model.ts").TabGroup.Tab.Model | undefined) => any;
        }, import("vue").PublicProps, {
            level: import("./TabGroup.model.ts").TabGroup.Level & {};
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./TabGroup.model.ts").TabGroup.Props & {
            modelValue?: import("./TabGroup.model.ts").TabGroup.Tab.Model;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import("./TabGroup.model.ts").TabGroup.Tab.Model | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, {
            level: import("./TabGroup.model.ts").TabGroup.Level & {};
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./TabGroup.model.ts").TabGroup.Props & {
        modelValue?: import("./TabGroup.model.ts").TabGroup.Tab.Model;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./TabGroup.model.ts").TabGroup.Tab.Model | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./TabGroup.model.ts").TabGroup.Tab.Model | undefined) => any;
    }, string, {
        level: import("./TabGroup.model.ts").TabGroup.Level & {};
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            [key: string]: (props: {
                tab: import("./TabGroup.model.ts").TabGroup.Tab.Model;
                id: import("./TabGroup.model.ts").TabGroup.Tab.Model["id"];
                index: number;
            }) => import("vue").VNode;
        };
    })>;
    args: {
        tabs: {
            id: string;
            name: string;
            icon: string;
            content: string;
        }[];
        modelValue: {
            id: string;
            name: string;
            icon: string;
            content: string;
        };
    };
};
