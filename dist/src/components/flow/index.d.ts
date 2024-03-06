export type { Flow } from '../../components/flow/Flow.model';
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
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
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
            toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
                };
            }>>, {
                nodes: import("vue").Ref<Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>>;
                edges: import("vue").Ref<Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>>;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
                };
            }>>, {
                nodes: import("vue").Ref<Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>>;
                edges: import("vue").Ref<Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>>;
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
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
            };
        }>>, {
            nodes: import("vue").Ref<Map<string, import("../../components/flow/Flow.model").Flow.Entity.Node.Model>>;
            edges: import("vue").Ref<Map<`${string}->${string}`, import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>>;
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
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
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
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
            direction: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: string;
            };
        }>>, {
            position: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
            direction: "vertical" | "horizontal";
        }, {}>;
        Edge: import("vue").DefineComponent<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
            };
            active: {
                type: import("vue").PropType<boolean>;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<string | number>;
            };
            strokeColor: {
                type: import("vue").PropType<string | number>;
            };
            strokeOpacity: {
                type: import("vue").PropType<string | number>;
            };
            priority: {
                type: import("vue").PropType<never>;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        } | {
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
            };
            active: {
                type: import("vue").PropType<boolean>;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<[string | number, string | number]>;
            };
            strokeColor: {
                type: import("vue").PropType<[string | number, string | number]>;
            };
            strokeOpacity: {
                type: import("vue").PropType<[string | number, string | number]>;
            };
            priority: {
                type: import("vue").PropType<never>;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        } | {
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<string | number>;
            };
            strokeColor: {
                type: import("vue").PropType<string | number>;
            };
            strokeOpacity: {
                type: import("vue").PropType<string | number>;
            };
            priority: {
                type: import("vue").PropType<"blur-first" | "active-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        } | {
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<[string | number, string | number, string | number]>;
            };
            strokeColor: {
                type: import("vue").PropType<[string | number, string | number, string | number]>;
            };
            strokeOpacity: {
                type: import("vue").PropType<[string | number, string | number, string | number]>;
            };
            priority: {
                type: import("vue").PropType<"blur-first" | "active-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
            };
            active: {
                type: import("vue").PropType<boolean>;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<string | number>;
            };
            strokeColor: {
                type: import("vue").PropType<string | number>;
            };
            strokeOpacity: {
                type: import("vue").PropType<string | number>;
            };
            priority: {
                type: import("vue").PropType<never>;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }>> | Readonly<import("vue").ExtractPropTypes<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
            };
            active: {
                type: import("vue").PropType<boolean>;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<[string | number, string | number]>;
            };
            strokeColor: {
                type: import("vue").PropType<[string | number, string | number]>;
            };
            strokeOpacity: {
                type: import("vue").PropType<[string | number, string | number]>;
            };
            priority: {
                type: import("vue").PropType<never>;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }>> | Readonly<import("vue").ExtractPropTypes<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<string | number>;
            };
            strokeColor: {
                type: import("vue").PropType<string | number>;
            };
            strokeOpacity: {
                type: import("vue").PropType<string | number>;
            };
            priority: {
                type: import("vue").PropType<"blur-first" | "active-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }>> | Readonly<import("vue").ExtractPropTypes<{
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
                default: number;
            };
            strokeWidth: {
                type: import("vue").PropType<[string | number, string | number, string | number]>;
            };
            strokeColor: {
                type: import("vue").PropType<[string | number, string | number, string | number]>;
            };
            strokeOpacity: {
                type: import("vue").PropType<[string | number, string | number, string | number]>;
            };
            priority: {
                type: import("vue").PropType<"blur-first" | "active-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }>>, {
            radius: number;
            arrowSize: number;
        } | {
            radius: number;
            arrowSize: number;
        } | {
            radius: number;
            arrowSize: number;
        } | {
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
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                name: {
                    type: import("vue").PropType<string>;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                arrowSize: {
                    type: import("vue").PropType<number>;
                };
                strokeWidth: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeColor: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeOpacity: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                priority: {
                    type: import("vue").PropType<"blur-first" | "active-first">;
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
                activeEdgesOn: {
                    type: import("vue").PropType<"from">;
                    default: string;
                };
                activeNodeId: {
                    type: import("vue").PropType<never>;
                };
            }>> | Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                name: {
                    type: import("vue").PropType<string>;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                arrowSize: {
                    type: import("vue").PropType<number>;
                };
                strokeWidth: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeColor: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeOpacity: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                priority: {
                    type: import("vue").PropType<"blur-first" | "active-first">;
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
                activeEdgesOn: {
                    type: import("vue").PropType<"to" | "both">;
                    required: true;
                    default: string;
                };
                activeNodeId: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                name: {
                    type: import("vue").PropType<string>;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                arrowSize: {
                    type: import("vue").PropType<number>;
                };
                strokeWidth: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeColor: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeOpacity: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                priority: {
                    type: import("vue").PropType<"blur-first" | "active-first">;
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
                activeEdgesOn: {
                    type: import("vue").PropType<"from">;
                    default: string;
                };
                activeNodeId: {
                    type: import("vue").PropType<never>;
                };
            }> | import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                name: {
                    type: import("vue").PropType<string>;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                arrowSize: {
                    type: import("vue").PropType<number>;
                };
                strokeWidth: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeColor: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeOpacity: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                priority: {
                    type: import("vue").PropType<"blur-first" | "active-first">;
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
                activeEdgesOn: {
                    type: import("vue").PropType<"to" | "both">;
                    required: true;
                    default: string;
                };
                activeNodeId: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
            }>>, {
                blur: boolean;
                active: boolean;
                activeEdgesOn: "from";
            } | {
                blur: boolean;
                active: boolean;
                activeEdgesOn: "to" | "both";
            }, true, {}, {}, {
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
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                name: {
                    type: import("vue").PropType<string>;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                arrowSize: {
                    type: import("vue").PropType<number>;
                };
                strokeWidth: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeColor: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeOpacity: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                priority: {
                    type: import("vue").PropType<"blur-first" | "active-first">;
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
                activeEdgesOn: {
                    type: import("vue").PropType<"from">;
                    default: string;
                };
                activeNodeId: {
                    type: import("vue").PropType<never>;
                };
            }>> | Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                name: {
                    type: import("vue").PropType<string>;
                };
                position: {
                    type: import("vue").PropType<import("../../shared").Vec2>;
                };
                arrowSize: {
                    type: import("vue").PropType<number>;
                };
                strokeWidth: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeColor: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                strokeOpacity: {
                    type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
                };
                priority: {
                    type: import("vue").PropType<"blur-first" | "active-first">;
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
                activeEdgesOn: {
                    type: import("vue").PropType<"to" | "both">;
                    required: true;
                    default: string;
                };
                activeNodeId: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
            }>>, {}, {}, {}, {}, {
                blur: boolean;
                active: boolean;
                activeEdgesOn: "from";
            } | {
                blur: boolean;
                active: boolean;
                activeEdgesOn: "to" | "both";
            }>;
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
            radius: {
                type: import("vue").PropType<number>;
            };
            blur: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            active: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            name: {
                type: import("vue").PropType<string>;
            };
            position: {
                type: import("vue").PropType<import("../../shared").Vec2>;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
            };
            strokeWidth: {
                type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
            };
            strokeColor: {
                type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
            };
            strokeOpacity: {
                type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
            };
            priority: {
                type: import("vue").PropType<"blur-first" | "active-first">;
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
            activeEdgesOn: {
                type: import("vue").PropType<"from">;
                default: string;
            };
            activeNodeId: {
                type: import("vue").PropType<never>;
            };
        }>> | Readonly<import("vue").ExtractPropTypes<{
            to: {
                type: import("vue").PropType<string[]>;
            };
            id: {
                type: import("vue").PropType<string>;
                required: true;
            };
            radius: {
                type: import("vue").PropType<number>;
            };
            blur: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            active: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            name: {
                type: import("vue").PropType<string>;
            };
            position: {
                type: import("vue").PropType<import("../../shared").Vec2>;
            };
            arrowSize: {
                type: import("vue").PropType<number>;
            };
            strokeWidth: {
                type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
            };
            strokeColor: {
                type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
            };
            strokeOpacity: {
                type: import("vue").PropType<string | number | [string | number, string | number] | [string | number, string | number, string | number]>;
            };
            priority: {
                type: import("vue").PropType<"blur-first" | "active-first">;
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
            activeEdgesOn: {
                type: import("vue").PropType<"to" | "both">;
                required: true;
                default: string;
            };
            activeNodeId: {
                type: import("vue").PropType<string>;
                required: true;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            blur: boolean;
            active: boolean;
            activeEdgesOn: "from";
        } | {
            blur: boolean;
            active: boolean;
            activeEdgesOn: "to" | "both";
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
    Helper: {
        DevTool: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    };
};
