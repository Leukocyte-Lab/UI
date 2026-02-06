import type { StoryFn } from '@storybook/vue3-vite';
declare const _default: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            toolbar: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, {
            toolbar: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        toolbar: boolean;
        initialScale: number | "cover" | "contain";
        autoLayout: boolean;
        devtools: boolean;
        zoomable: boolean;
        toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
        toolbarDirection: "horizontal" | "vertical";
        acceleration: WebGLPowerPreference;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
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
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            toolbar: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, {
            toolbar: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        toolbar: boolean;
        initialScale: number | "cover" | "contain";
        autoLayout: boolean;
        devtools: boolean;
        zoomable: boolean;
        toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
        toolbarDirection: "horizontal" | "vertical";
        acceleration: WebGLPowerPreference;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
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
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            toolbar: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, {
            toolbar: boolean;
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./Flow.model.ts").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        toolbar: boolean;
        initialScale: number | "cover" | "contain";
        autoLayout: boolean;
        devtools: boolean;
        zoomable: boolean;
        toolbarPosition: import("./Flow.model.ts").Flow.UI.Layout.Toolbar.Position;
        toolbarDirection: "horizontal" | "vertical";
        acceleration: WebGLPowerPreference;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
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
