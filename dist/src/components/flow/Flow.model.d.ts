import type { Cursor } from 'pixi.js';
import type { InjectionKey, Ref } from 'vue';
import type { Signal } from '../../shared/libs/signal';
import type { Dictionary } from '../../shared/types/map';
import type { Vec2 } from '../../shared/types/vector';
export declare namespace Flow {
    namespace Entity {
        namespace BoundingBox {
            interface Model {
                width: number;
                height: number;
            }
        }
        namespace Node {
            const InjectionKey: InjectionKey<Ref<Dictionary<Model, 'id'>>>;
            interface Model {
                id: string;
                position: Vec2;
                offset: Vec2;
                relativePosition?: Vec2;
                edges: Dictionary<Edge.Model, 'id'>;
                boundingBox: BoundingBox.Model;
                isPanning?: boolean;
            }
        }
        namespace Edge {
            const InjectionKey: InjectionKey<Ref<Dictionary<Model, 'id'>>>;
            interface Model {
                id: `${Node.Model['id']}->${Node.Model['id']}`;
                from: Node.Model;
                to?: Node.Model;
            }
        }
    }
    namespace UI {
        namespace Debugger {
            const InjectionKey: InjectionKey<Options>;
            interface Options {
                showBoundingBox?: boolean;
                showControlPoint?: boolean;
            }
        }
        namespace Layout {
            namespace Toolbar {
                type Position = Exclude<`${'top' | 'center' | 'bottom'}-${'left' | 'center' | 'right'}`, 'center-center'>;
                interface Props {
                    position?: Position;
                    direction?: 'horizontal' | 'vertical';
                    disabled?: boolean;
                }
            }
            namespace Node {
                type Props = {
                    id: Entity.Node.Model['id'];
                    name?: string;
                    to?: Entity.Node.Model['id'][];
                    position?: Vec2;
                    positionX?: number;
                    positionY?: number;
                    relative?: boolean;
                } & ({
                    activeEdgesOn?: 'from';
                    activeNodeId?: never;
                } | {
                    activeEdgesOn: 'to' | 'both';
                    activeNodeId: Entity.Node.Model['id'];
                }) & Pick<Edge.Props, 'radius' | 'arrowSize' | 'strokeWidth' | 'strokeColor' | 'strokeOpacity' | 'active' | 'blur' | 'priority'>;
            }
            namespace Edge {
                type Props = {
                    edge: Entity.Edge.Model;
                    radius?: number;
                    arrowSize?: number;
                } & (({
                    active?: boolean;
                    blur?: boolean;
                    priority?: never;
                } & ({
                    strokeWidth?: string | number;
                    strokeColor?: string | number;
                    strokeOpacity?: string | number;
                } | {
                    strokeWidth?: [string | number, string | number];
                    strokeColor?: [string | number, string | number];
                    strokeOpacity?: [string | number, string | number];
                })) | ({
                    active: boolean;
                    blur: boolean;
                    priority?: `${'active' | 'blur'}-first`;
                } & ({
                    strokeWidth?: string | number;
                    strokeColor?: string | number;
                    strokeOpacity?: string | number;
                } | {
                    strokeWidth?: [string | number, string | number, string | number];
                    strokeColor?: [string | number, string | number, string | number];
                    strokeOpacity?: [string | number, string | number, string | number];
                })));
            }
        }
        namespace Widget {
            namespace Zoom {
                interface Props {
                    initialScale?: number | 'contain' | 'cover';
                }
            }
        }
        namespace Screen {
            namespace Window {
                interface Props {
                    devtools?: boolean;
                    toolbar?: boolean;
                    zoomable?: boolean;
                    autoLayout?: boolean;
                    toolbarPosition?: UI.Layout.Toolbar.Props['position'];
                    toolbarDirection?: UI.Layout.Toolbar.Props['direction'];
                    initialScale?: UI.Widget.Zoom.Props['initialScale'];
                    acceleration?: WebGLPowerPreference;
                    debugOptions?: UI.Debugger.Options;
                }
            }
            namespace Viewport {
                const Size: InjectionKey<Ref<Pick<Props, 'width' | 'height'>>>;
                const NodeBoundary: InjectionKey<Ref<Record<'min' | 'max', Vec2>>>;
                const Gap: InjectionKey<Ref<Vec2>>;
                const Offset: InjectionKey<Ref<Vec2>>;
                interface Props {
                    width: number;
                    height: number;
                    scale: number;
                    cursorMode: Signal<Cursor>;
                    gap?: Vec2 | number;
                    autoLayout?: boolean;
                    initialScale?: UI.Widget.Zoom.Props['initialScale'];
                    debugOptions?: UI.Debugger.Options;
                }
            }
        }
    }
}
