import type { Meta, StoryFn } from '@storybook/vue3';
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
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            level: {
                type: import("vue").PropType<"primary" | "secondary">;
                default: string;
            };
            modelValue: {
                type: import("vue").PropType<import("./TabGroup.model.js").TabGroup.Tab.Model>;
            };
            tabs: {
                type: import("vue").PropType<Map<string, import("./TabGroup.model.js").TabGroup.Tab.Model> | import("./TabGroup.model.js").TabGroup.Tab.Model[]>;
                required: true;
            };
        }>> & {
            "onUpdate:modelValue"?: ((modelValue: import("./TabGroup.model.js").TabGroup.Tab.Model) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (modelValue: import("./TabGroup.model.js").TabGroup.Tab.Model) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            level: {
                type: import("vue").PropType<"primary" | "secondary">;
                default: string;
            };
            modelValue: {
                type: import("vue").PropType<import("./TabGroup.model.js").TabGroup.Tab.Model>;
            };
            tabs: {
                type: import("vue").PropType<Map<string, import("./TabGroup.model.js").TabGroup.Tab.Model> | import("./TabGroup.model.js").TabGroup.Tab.Model[]>;
                required: true;
            };
        }>> & {
            "onUpdate:modelValue"?: ((modelValue: import("./TabGroup.model.js").TabGroup.Tab.Model) => any) | undefined;
        }, {
            level: import("./TabGroup.model.js").TabGroup.Level & {};
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            level: {
                type: import("vue").PropType<"primary" | "secondary">;
                default: string;
            };
            modelValue: {
                type: import("vue").PropType<import("./TabGroup.model.js").TabGroup.Tab.Model>;
            };
            tabs: {
                type: import("vue").PropType<Map<string, import("./TabGroup.model.js").TabGroup.Tab.Model> | import("./TabGroup.model.js").TabGroup.Tab.Model[]>;
                required: true;
            };
        }>> & {
            "onUpdate:modelValue"?: ((modelValue: import("./TabGroup.model.js").TabGroup.Tab.Model) => any) | undefined;
        }, {}, {}, {}, {}, {
            level: import("./TabGroup.model.js").TabGroup.Level & {};
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        level: {
            type: import("vue").PropType<"primary" | "secondary">;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<import("./TabGroup.model.js").TabGroup.Tab.Model>;
        };
        tabs: {
            type: import("vue").PropType<Map<string, import("./TabGroup.model.js").TabGroup.Tab.Model> | import("./TabGroup.model.js").TabGroup.Tab.Model[]>;
            required: true;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: import("./TabGroup.model.js").TabGroup.Tab.Model) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (modelValue: import("./TabGroup.model.js").TabGroup.Tab.Model) => void;
    }, string, {
        level: import("./TabGroup.model.js").TabGroup.Level & {};
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            [key: string]: (props: {
                tab: import("./TabGroup.model.js").TabGroup.Tab.Model;
                id: import("./TabGroup.model.js").TabGroup.Tab.Model["id"];
                index: number;
            }) => import("vue").VNode;
        }> & {
            [key: string]: (props: {
                tab: import("./TabGroup.model.js").TabGroup.Tab.Model;
                id: import("./TabGroup.model.js").TabGroup.Tab.Model["id"];
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
