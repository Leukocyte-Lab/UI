import type { Vec2 } from '@/shared/types/vector';
import type { InjectionKey, Ref } from 'vue';
import type { Cursor } from 'pixi.js';

import type { Signal } from '@/shared/libs/signal';
import type { Dictionary } from '@/shared/types/map';

export namespace Flow {
  export namespace Entity {
    export namespace BoundingBox {
      export interface Model {
        width: number;
        height: number;
      }
    }

    export namespace Node {
      export const InjectionKey: InjectionKey<Ref<Dictionary<Model, 'id'>>> =
        Symbol('Flow.Entity.Node');

      export interface Model {
        id: string;
        position: Vec2;
        offset: Vec2;
        relativePosition?: Vec2;
        edges: Dictionary<Edge.Model, 'id'>;
        boundingBox: BoundingBox.Model;
        isPanning?: boolean;
      }
    }

    export namespace Edge {
      export const InjectionKey: InjectionKey<Ref<Dictionary<Model, 'id'>>> =
        Symbol('Flow.Entity.Edge');

      export interface Model {
        id: `${Node.Model['id']}->${Node.Model['id']}`;
        from: Node.Model;
        to?: Node.Model;
      }
    }
  }

  export namespace UI {
    export namespace Debugger {
      export const InjectionKey: InjectionKey<Options> = Symbol('Flow.UI.Debugger');

      export interface Options {
        showBoundingBox?: boolean;
        showControlPoint?: boolean;
      }
    }

    export namespace Layout {
      export namespace Toolbar {
        export type Position = Exclude<
          `${'top' | 'center' | 'bottom'}-${'left' | 'center' | 'right'}`,
          'center-center'
        >;

        export interface Props {
          position?: Position;
          direction?: 'horizontal' | 'vertical';
          disabled?: boolean;
        }
      }

      export namespace Node {
        export type Props =
          {
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
          }) & Pick<
            Edge.Props,
            'radius' | 'arrowSize' | 'strokeWidth' | 'strokeColor' | 'strokeOpacity' | 'active' | 'blur' | 'priority'
          >;
      }

      export namespace Edge {
        export type Props = {
          edge: Entity.Edge.Model;
          radius?: number;
          arrowSize?: number;
        } & (({ active?: boolean; blur?: boolean; priority?: never } & ({
          strokeWidth?: string | number;
          strokeColor?: string | number;
          strokeOpacity?: string | number;
        } | {
          strokeWidth?: [string | number, string | number];
          strokeColor?: [string | number, string | number];
          strokeOpacity?: [string | number, string | number];
        })) | ({ active: boolean; blur: boolean; priority?: `${'active' | 'blur'}-first` } & ({
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

    export namespace Widget {
      export namespace Zoom {
        export interface Props {
          initialScale?: number | 'contain' | 'cover';
        }
      }
    }

    export namespace Screen {
      export namespace Window {
        export interface Props {
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

      export namespace Viewport {
        export const Size: InjectionKey<Ref<Pick<Props, 'width' | 'height'>>> = Symbol(
          'Flow.UI.Screen.Viewport.Size'
        );
        export const NodeBoundary: InjectionKey<Ref<Record<'min' | 'max', Vec2>>> = Symbol(
          'Flow.UI.Screen.Viewport.NodeBoundary'
        );
        export const Gap: InjectionKey<Ref<Vec2>> = Symbol(
          'Flow.UI.Screen.Viewport.Gap'
        );
        export const Offset: InjectionKey<Ref<Vec2>> = Symbol(
          'Flow.UI.Screen.Viewport.Offset'
        );

        export interface Props {
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
