import Window from '@/components/flow/screens/Window.vue';
import Viewport from '@/components/flow/screens/Viewport.vue';
import Toolbar from '@/components/flow/layouts/Toolbar.vue';
import Edge from '@/components/flow/layouts/Edge.vue';
import Node from '@/components/flow/layouts/Node.vue';
import DevTool from '@/components/flow/helpers/DevTool.vue';

export const FlowKit = {
  Screen: {
    Window,
    Viewport
  },
  Layout: {
    Toolbar,
    Edge,
    Node
  },
  Helper: {
    DevTool
  }
};
