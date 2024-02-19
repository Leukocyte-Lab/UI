import type { Vec2 } from '../../shared/types/vector';
import type { InjectionKey, Ref } from 'vue';
import type { Cursor } from 'pixi.js';
import type { Signal } from '../../shared/libs/signal';
export declare namespace Flow {
    namespace Entity {
        namespace BoundingBox {
            interface Model {
                width: number;
                height: number;
            }
        }
        namespace Node {
            const InjectionKey: InjectionKey<Ref<Map<Model['id'], Model>>>;
            interface Model {
                id: string;
                position: Vec2;
                offset: Vec2;
                relativePosition?: Vec2;
                edges: Map<Edge.Model['id'], Edge.Model>;
                boundingBox: BoundingBox.Model;
                isPanning?: boolean;
            }
        }
        namespace Edge {
            const InjectionKey: InjectionKey<Ref<Map<Model['id'], Model>>>;
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
                interface Props extends Pick<Edge.Props, 'radius' | 'arrowSize' | 'strokeWidth' | 'strokeColor' | 'strokeOpacity'> {
                    id: string;
                    name: string;
                    to?: Entity.Node.Model['id'][];
                    active?: boolean;
                    position?: Vec2;
                    positionX?: number;
                    positionY?: number;
                    relative?: boolean;
                }
            }
            namespace Edge {
                interface Props {
                    edge: Entity.Edge.Model;
                    radius?: number;
                    arrowSize?: number;
                    strokeWidth?: string | number;
                    strokeColor?: string | number;
                    strokeOpacity?: string | number;
                }
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
