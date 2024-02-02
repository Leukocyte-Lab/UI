import type { Vec2 } from '@/shared/types/vector';
import type { InjectionKey, Ref } from 'vue';
import type { Cursor } from 'pixi.js';

import type { Signal } from '@/shared/libs/signal';

export namespace Flow {
  export namespace Entity {
    export namespace BoundingBox {
      export interface Model {
        width: number;
        height: number;
      }
    }

    export namespace Node {
      export const InjectionKey: InjectionKey<Ref<Map<Model['id'], Model>>> =
        Symbol('Flow.Entity.Node');

      export interface Model {
        id: string;
        position: Vec2;
        offset: Vec2;
        relativePosition?: Vec2;
        edges: Map<Edge.Model['id'], Edge.Model>;
        boundingBox: BoundingBox.Model;
        isPanning?: boolean;
      }
    }

    export namespace Edge {
      export const InjectionKey: InjectionKey<Ref<Map<Model['id'], Model>>> =
        Symbol('Flow.Entity.Edge');

      export interface Model {
        id: `${Node.Model['id']}->${Node.Model['id']}`;
        from: Node.Model;
        to: Map<Node.Model['id'], Node.Model>;
      }
    }
  }

  export namespace UI {
    export namespace Debugger {
      export const InjectionKey: InjectionKey<Options> = Symbol('Flow.UI.Debugger');

      export interface Options {
        showBoundingBox?: boolean;
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
        export interface Props {
          id: string;
          name: string;
          to?: Entity.Node.Model['id'][];
          position?: Vec2;
          positionX?: number;
          positionY?: number;
          relative?: boolean;
        }
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
