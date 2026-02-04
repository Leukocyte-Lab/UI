export type { Flow } from '../../components/flow/Flow.model';
export declare const FlowKit: {
    Screen: {
        Window: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("../../components/flow/Flow.model").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                initialScale: number | "cover" | "contain";
                autoLayout: boolean;
                devtools: boolean;
                toolbar: boolean;
                zoomable: boolean;
                toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
                toolbarDirection: "horizontal" | "vertical";
                acceleration: WebGLPowerPreference;
            }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("../../components/flow/Flow.model").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, {
                initialScale: number | "cover" | "contain";
                autoLayout: boolean;
                devtools: boolean;
                toolbar: boolean;
                zoomable: boolean;
                toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
                toolbarDirection: "horizontal" | "vertical";
                acceleration: WebGLPowerPreference;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("../../components/flow/Flow.model").Flow.UI.Screen.Window.Props> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            initialScale: number | "cover" | "contain";
            autoLayout: boolean;
            devtools: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                default: () => import("vue").VNode;
            };
        });
        Viewport: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("../../components/flow/Flow.model").Flow.UI.Screen.Viewport.Props> & Readonly<{}>, {
                nodes: import("vue").Ref<Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>, Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>>;
                edges: import("vue").Ref<Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>, Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>>;
                isPanning: import("vue").Ref<boolean | "ready", boolean | "ready">;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                gap: import("../../shared").Vec2 | number;
                scale: number;
            }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("../../components/flow/Flow.model").Flow.UI.Screen.Viewport.Props> & Readonly<{}>, {
                nodes: import("vue").Ref<Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>, Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>>;
                edges: import("vue").Ref<Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>, Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>>;
                isPanning: import("vue").Ref<boolean | "ready", boolean | "ready">;
            }, {}, {}, {}, {
                gap: import("../../shared").Vec2 | number;
                scale: number;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("../../components/flow/Flow.model").Flow.UI.Screen.Viewport.Props> & Readonly<{}>, {
            nodes: import("vue").Ref<Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>, Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>>;
            edges: import("vue").Ref<Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>, Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>>;
            isPanning: import("vue").Ref<boolean | "ready", boolean | "ready">;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            gap: import("../../shared").Vec2 | number;
            scale: number;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                default: () => import("vue").VNode;
            };
        });
    };
    Layout: {
        Toolbar: import("vue").DefineComponent<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Props> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
            position: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
        Edge: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps>;
        Node: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps> & (new () => {
            $slots: {
                default: () => import("vue").VNode;
            };
        });
    };
    Helper: {
        DevTool: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    };
};
