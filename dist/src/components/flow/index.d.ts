export declare const FlowKit: {
    Screen: {
        Window: {
            new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
                initialScale: {
                    type: import("vue").PropType<number | "contain" | "cover">;
                    default: number;
                };
                autoLayout: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                debugOptions: {
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
                };
                devtools: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
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
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                initialScale: {
                    type: import("vue").PropType<number | "contain" | "cover">;
                    default: number;
                };
                autoLayout: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                debugOptions: {
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
                };
                devtools: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
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
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                initialScale: number | "contain" | "cover";
                autoLayout: boolean;
                devtools: boolean;
                toolbar: boolean;
                zoomable: boolean;
                toolbarPosition: import("./Flow.model").Flow.UI.Layout.Toolbar.Position;
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
                initialScale: {
                    type: import("vue").PropType<number | "contain" | "cover">;
                    default: number;
                };
                autoLayout: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                debugOptions: {
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
                };
                devtools: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
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
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                initialScale: number | "contain" | "cover";
                autoLayout: boolean;
                devtools: boolean;
                toolbar: boolean;
                zoomable: boolean;
                toolbarPosition: import("./Flow.model").Flow.UI.Layout.Toolbar.Position;
                toolbarDirection: "vertical" | "horizontal";
                acceleration: WebGLPowerPreference;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            initialScale: {
                type: import("vue").PropType<number | "contain" | "cover">;
                default: number;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
            };
            devtools: {
                type: import("vue").PropType<boolean>;
                default: boolean;
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
                type: import("vue").PropType<import("./Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
            initialScale: number | "contain" | "cover";
            autoLayout: boolean;
            devtools: boolean;
            toolbar: boolean;
            zoomable: boolean;
            toolbarPosition: import("./Flow.model").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "vertical" | "horizontal";
            acceleration: WebGLPowerPreference;
        }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }> & {
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            };
        });
        Viewport: {
            new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
                height: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                width: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                gap: {
                    type: import("vue").PropType<number | import("../../shared").Vec2>;
                    default: () => {
                        x: number;
                        y: number;
                    };
                };
                initialScale: {
                    type: import("vue").PropType<number | "contain" | "cover">;
                };
                scale: {
                    type: import("vue").PropType<number>;
                    required: true;
                    default: number;
                };
                cursorMode: {
                    type: import("vue").PropType<import("../../shared").Signal<import("pixi.js").Cursor>>;
                    required: true;
                };
                autoLayout: {
                    type: import("vue").PropType<boolean>;
                };
                debugOptions: {
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
                };
            }>>, {
                nodes: import("vue").Ref<Map<string, import("./Flow.model").Flow.Entity.Node.Model>>;
                edges: import("vue").Ref<Map<`${string}->${string}`, import("./Flow.model").Flow.Entity.Edge.Model>>;
                isPanning: import("vue").Ref<boolean | "ready">;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                height: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                width: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                gap: {
                    type: import("vue").PropType<number | import("../../shared").Vec2>;
                    default: () => {
                        x: number;
                        y: number;
                    };
                };
                initialScale: {
                    type: import("vue").PropType<number | "contain" | "cover">;
                };
                scale: {
                    type: import("vue").PropType<number>;
                    required: true;
                    default: number;
                };
                cursorMode: {
                    type: import("vue").PropType<import("../../shared").Signal<import("pixi.js").Cursor>>;
                    required: true;
                };
                autoLayout: {
                    type: import("vue").PropType<boolean>;
                };
                debugOptions: {
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
                };
            }>>, {
                gap: number | import("../../shared").Vec2;
                scale: number;
            }, true, {}, {}, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                height: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                width: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                gap: {
                    type: import("vue").PropType<number | import("../../shared").Vec2>;
                    default: () => {
                        x: number;
                        y: number;
                    };
                };
                initialScale: {
                    type: import("vue").PropType<number | "contain" | "cover">;
                };
                scale: {
                    type: import("vue").PropType<number>;
                    required: true;
                    default: number;
                };
                cursorMode: {
                    type: import("vue").PropType<import("../../shared").Signal<import("pixi.js").Cursor>>;
                    required: true;
                };
                autoLayout: {
                    type: import("vue").PropType<boolean>;
                };
                debugOptions: {
                    type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
                };
            }>>, {
                nodes: import("vue").Ref<Map<string, import("./Flow.model").Flow.Entity.Node.Model>>;
                edges: import("vue").Ref<Map<`${string}->${string}`, import("./Flow.model").Flow.Entity.Edge.Model>>;
                isPanning: import("vue").Ref<boolean | "ready">;
            }, {}, {}, {}, {
                gap: number | import("../../shared").Vec2;
                scale: number;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: import("vue").PropType<number>;
                required: true;
            };
            width: {
                type: import("vue").PropType<number>;
                required: true;
            };
            gap: {
                type: import("vue").PropType<number | import("../../shared").Vec2>;
                default: () => {
                    x: number;
                    y: number;
                };
            };
            initialScale: {
                type: import("vue").PropType<number | "contain" | "cover">;
            };
            scale: {
                type: import("vue").PropType<number>;
                required: true;
                default: number;
            };
            cursorMode: {
                type: import("vue").PropType<import("../../shared").Signal<import("pixi.js").Cursor>>;
                required: true;
            };
            autoLayout: {
                type: import("vue").PropType<boolean>;
            };
            debugOptions: {
                type: import("vue").PropType<import("./Flow.model").Flow.UI.Debugger.Options>;
            };
        }>>, {
            nodes: import("vue").Ref<Map<string, import("./Flow.model").Flow.Entity.Node.Model>>;
            edges: import("vue").Ref<Map<`${string}->${string}`, import("./Flow.model").Flow.Entity.Edge.Model>>;
            isPanning: import("vue").Ref<boolean | "ready">;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            gap: number | import("../../shared").Vec2;
            scale: number;
        }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }> & {
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            };
        });
    };
    Layout: {
        Toolbar: import("vue").DefineComponent<{
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            position: {
                type: import("vue").PropType<import("./Flow.model").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            direction: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            position: {
                type: import("vue").PropType<import("./Flow.model").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            direction: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
        }>>, {
            position: import("./Flow.model").Flow.UI.Layout.Toolbar.Position;
            direction: "vertical" | "horizontal";
        }, {}>;
        Edge: import("vue").DefineComponent<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            edge: {
                type: import("vue").PropType<import("./Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            edge: {
                type: import("vue").PropType<import("./Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
        }>>, {
            radius: number;
            arrowSize: number;
        }, {}>;
        Node: {
            new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                name: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                positionY: {
                    type: import("vue").PropType<number>;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                relative: {
                    type: import("vue").PropType<boolean>;
                };
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                name: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                positionY: {
                    type: import("vue").PropType<number>;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                relative: {
                    type: import("vue").PropType<boolean>;
                };
            }>>, {}, true, {}, {}, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                name: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                positionY: {
                    type: import("vue").PropType<number>;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                relative: {
                    type: import("vue").PropType<boolean>;
                };
            }>>, {}, {}, {}, {}, {}>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            to: {
                type: import("vue").PropType<string[]>;
            };
            id: {
                type: import("vue").PropType<string>;
                required: true;
            };
            name: {
                type: import("vue").PropType<string>;
                required: true;
            };
            position: {
                type: import("vue").PropType<import("../../shared").Vec2>;
            };
            positionY: {
                type: import("vue").PropType<number>;
            };
            positionX: {
                type: import("vue").PropType<number>;
            };
            relative: {
                type: import("vue").PropType<boolean>;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }> & {
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            };
        });
    };
    Helper: {
        DevTool: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    };
};
