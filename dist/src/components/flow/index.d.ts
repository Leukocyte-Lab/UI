export type { Flow } from '../../components/flow/Flow.model';
export declare const FlowKit: {
    Screen: {
        Window: {
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<"horizontal" | "vertical">;
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<"horizontal" | "vertical">;
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
                toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
                toolbarDirection: "horizontal" | "vertical";
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
                    type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                    type: import("vue").PropType<"horizontal" | "vertical">;
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
                toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
                toolbarDirection: "horizontal" | "vertical";
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
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Debugger.Options>;
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
                type: import("vue").PropType<"horizontal" | "vertical">;
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
            toolbarPosition: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
            toolbarDirection: "horizontal" | "vertical";
            acceleration: WebGLPowerPreference;
        }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default: () => import("vue").VNode;
            }> & {
                default: () => import("vue").VNode;
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
                    type: import("vue").PropType<number | "cover" | "contain">;
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
                    type: import("vue").PropType<number | "cover" | "contain">;
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
                gap: import("../../shared").Vec2 | number;
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
                    type: import("vue").PropType<number | "cover" | "contain">;
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
                gap: import("../../shared").Vec2 | number;
                scale: number;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
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
                type: import("vue").PropType<number | "cover" | "contain">;
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
            gap: import("../../shared").Vec2 | number;
            scale: number;
        }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default: () => import("vue").VNode;
            }> & {
                default: () => import("vue").VNode;
            };
        });
    };
    Layout: {
        Toolbar: import("vue").DefineComponent<{
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            direction: {
                type: import("vue").PropType<"horizontal" | "vertical">;
                default: string;
            };
            position: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            direction: {
                type: import("vue").PropType<"horizontal" | "vertical">;
                default: string;
            };
            position: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position>;
                default: string;
            };
        }>>, {
            direction: "horizontal" | "vertical";
            position: import("../../components/flow/Flow.model").Flow.UI.Layout.Toolbar.Position;
        }, {}>;
        Edge: import("vue").DefineComponent<{
            active: {
                type: import("vue").PropType<boolean>;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
            active: {
                type: import("vue").PropType<boolean>;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
                type: import("vue").PropType<"active-first" | "blur-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        } | {
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
                type: import("vue").PropType<"active-first" | "blur-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            active: {
                type: import("vue").PropType<boolean>;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
            active: {
                type: import("vue").PropType<boolean>;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
                type: import("vue").PropType<"active-first" | "blur-first">;
            };
            edge: {
                type: import("vue").PropType<import("../../components/flow/Flow.model").Flow.Entity.Edge.Model>;
                required: true;
            };
        }>> | Readonly<import("vue").ExtractPropTypes<{
            active: {
                type: import("vue").PropType<boolean>;
                required: true;
            };
            radius: {
                type: import("vue").PropType<number>;
                default: number;
            };
            blur: {
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
                type: import("vue").PropType<"active-first" | "blur-first">;
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
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
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
                    type: import("vue").PropType<"active-first" | "blur-first">;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                positionY: {
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
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
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
                    type: import("vue").PropType<"active-first" | "blur-first">;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                positionY: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & (import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                to: {
                    type: import("vue").PropType<string[]>;
                };
                id: {
                    type: import("vue").PropType<string>;
                    required: true;
                };
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
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
                    type: import("vue").PropType<"active-first" | "blur-first">;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                positionY: {
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
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
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
                    type: import("vue").PropType<"active-first" | "blur-first">;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                positionY: {
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
            }>>), {
                active: boolean;
                blur: boolean;
                activeEdgesOn: "from";
            } | {
                active: boolean;
                blur: boolean;
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
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
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
                    type: import("vue").PropType<"active-first" | "blur-first">;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                positionY: {
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
                active: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                radius: {
                    type: import("vue").PropType<number>;
                };
                blur: {
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
                    type: import("vue").PropType<"active-first" | "blur-first">;
                };
                positionX: {
                    type: import("vue").PropType<number>;
                };
                positionY: {
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
                active: boolean;
                blur: boolean;
                activeEdgesOn: "from";
            } | {
                active: boolean;
                blur: boolean;
                activeEdgesOn: "to" | "both";
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            to: {
                type: import("vue").PropType<string[]>;
            };
            id: {
                type: import("vue").PropType<string>;
                required: true;
            };
            active: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            radius: {
                type: import("vue").PropType<number>;
            };
            blur: {
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
                type: import("vue").PropType<"active-first" | "blur-first">;
            };
            positionX: {
                type: import("vue").PropType<number>;
            };
            positionY: {
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
            active: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            radius: {
                type: import("vue").PropType<number>;
            };
            blur: {
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
                type: import("vue").PropType<"active-first" | "blur-first">;
            };
            positionX: {
                type: import("vue").PropType<number>;
            };
            positionY: {
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
            active: boolean;
            blur: boolean;
            activeEdgesOn: "from";
        } | {
            active: boolean;
            blur: boolean;
            activeEdgesOn: "to" | "both";
        }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default: () => import("vue").VNode;
            }> & {
                default: () => import("vue").VNode;
            };
        });
    };
    Helper: {
        DevTool: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    };
};
