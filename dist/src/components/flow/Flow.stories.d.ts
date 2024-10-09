import type { StoryFn } from '@storybook/vue3';
declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {
            devtools: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            devtools: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        devtools: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        initialScale: {
            type: import("vue").PropType<number | "cover" | "contain">;
            default: number;
        };
        autoLayout: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        debugOptions: {
            type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
        };
        toolbar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        zoomable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        toolbarPosition: {
            type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
            default: string;
        };
        toolbarDirection: {
            type: import("vue").PropType<"vertical" | "horizontal">;
            default: string;
        };
        acceleration: {
            type: import("vue").PropType<WebGLPowerPreference>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        devtools: boolean;
        initialScale: number | "cover" | "contain";
        autoLayout: boolean;
        toolbar: boolean;
        zoomable: boolean;
        toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
        toolbarDirection: "vertical" | "horizontal";
        acceleration: WebGLPowerPreference;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: () => import("vue").VNode;
        }> & {
            default: () => import("vue").VNode;
        };
    });
    tags: string[];
    argTypes: {
        devtools: {
            control: "boolean";
            description: string;
            defaultValue: boolean;
        };
        toolbar: {
            control: "boolean";
            description: string;
            defaultValue: boolean;
        };
        toolbarPosition: {
            control: "select";
            description: string;
            defaultValue: string;
            options: string[];
        };
        toolbarDirection: {
            control: "select";
            description: string;
            defaultValue: string;
            options: string[];
        };
        zoomable: {
            control: "boolean";
            description: string;
            defaultValue: boolean;
        };
        autoLayout: {
            control: "boolean";
            description: string;
            defaultValue: boolean;
        };
        initialScale: {
            control: {
                type: "range";
                min: number;
                max: number;
                step: number;
            };
            description: string;
            defaultValue: number;
            options: (string | number)[];
        };
        acceleration: {
            control: "select";
            description: string;
            defaultValue: string;
            options: string[];
        };
        debugOptions: {
            control: "object";
            description: string;
            defaultValue: {
                showBoundingBox: boolean;
                showControlPoint: boolean;
            };
        };
    };
};
export default _default;
export declare const Flow: {
    render: StoryFn<{
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {
            devtools: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            devtools: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        devtools: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        initialScale: {
            type: import("vue").PropType<number | "cover" | "contain">;
            default: number;
        };
        autoLayout: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        debugOptions: {
            type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
        };
        toolbar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        zoomable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        toolbarPosition: {
            type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
            default: string;
        };
        toolbarDirection: {
            type: import("vue").PropType<"vertical" | "horizontal">;
            default: string;
        };
        acceleration: {
            type: import("vue").PropType<WebGLPowerPreference>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        devtools: boolean;
        initialScale: number | "cover" | "contain";
        autoLayout: boolean;
        toolbar: boolean;
        zoomable: boolean;
        toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
        toolbarDirection: "vertical" | "horizontal";
        acceleration: WebGLPowerPreference;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: () => import("vue").VNode;
        }> & {
            default: () => import("vue").VNode;
        };
    })>;
    args: {
        devtools: boolean;
        toolbar: boolean;
        toolbarPosition: string;
        toolbarDirection: string;
        zoomable: boolean;
        autoLayout: boolean;
        initialScale: number;
        acceleration: string;
        debugOptions: {
            showBoundingBox: boolean;
            showControlPoint: boolean;
        };
        graph: ({
            id: string;
            name: string;
            to: string[];
            position: {
                x: number;
                y: number;
            };
            relative: boolean;
        } | {
            id: string;
            name: string;
            position: {
                x: number;
                y: number;
            };
            relative: boolean;
            to?: undefined;
        })[];
    };
};
export declare const ActiveFlow: {
    render: StoryFn<{
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {
            devtools: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            initialScale: {
                type: import("vue").PropType<number | "cover" | "contain">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
            };
            toolbar: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zoomable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            toolbarPosition: {
                type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            toolbarDirection: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
            acceleration: {
                type: import("vue").PropType<WebGLPowerPreference>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            devtools: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        devtools: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        initialScale: {
            type: import("vue").PropType<number | "cover" | "contain">;
            default: number;
        };
        autoLayout: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        debugOptions: {
            type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Debugger.Options>;
        };
        toolbar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        zoomable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        toolbarPosition: {
            type: import("vue").PropType<import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position>;
            default: string;
        };
        toolbarDirection: {
            type: import("vue").PropType<"vertical" | "horizontal">;
            default: string;
        };
        acceleration: {
            type: import("vue").PropType<WebGLPowerPreference>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        devtools: boolean;
        initialScale: number | "cover" | "contain";
        autoLayout: boolean;
        toolbar: boolean;
        zoomable: boolean;
        toolbarPosition: import("./Flow.model.js").Flow.UI.Layout.Toolbar.Position;
        toolbarDirection: "vertical" | "horizontal";
        acceleration: WebGLPowerPreference;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default: () => import("vue").VNode;
        }> & {
            default: () => import("vue").VNode;
        };
    })>;
    args: {
        activeNodeId: string;
        devtools: boolean;
        toolbar: boolean;
        toolbarPosition: string;
        toolbarDirection: string;
        zoomable: boolean;
        autoLayout: boolean;
        initialScale: number;
        acceleration: string;
        debugOptions: {
            showBoundingBox: boolean;
            showControlPoint: boolean;
        };
        graph: ({
            id: string;
            name: string;
            to: string[];
            position: {
                x: number;
                y: number;
            };
            relative: boolean;
        } | {
            id: string;
            name: string;
            position: {
                x: number;
                y: number;
            };
            relative: boolean;
            to?: undefined;
        })[];
    };
};
