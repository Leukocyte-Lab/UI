import { FlowKit } from '.';
import CardBox from '../../components/element/card/CardBox.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Graph / FlowKit',
  component: FlowKit.Screen.Window,
  tags: ['autodocs'],
  argTypes: {
    devtools: {
      control: 'boolean',
      description: 'Enable Devtools (optional)',
      defaultValue: false
    },
    toolbar: {
      control: 'boolean',
      description: 'Enable Toolbar (optional)',
      defaultValue: true
    },
    toolbarPosition: {
      control: 'select',
      description: 'Toolbar Position (optional)',
      defaultValue: 'bottom-right',
      options: [
        'top-center',
        'top-left',
        'top-right',
        'center-left',
        'center-right',
        'bottom-center',
        'bottom-left',
        'bottom-right'
      ]
    },
    toolbarDirection: {
      control: 'select',
      description: 'Toolbar Direction (optional)',
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical']
    },
    zoomable: {
      control: 'boolean',
      description: 'Enable Zooming (optional)',
      defaultValue: true
    },
    autoLayout: {
      control: 'boolean',
      description: 'Enable Auto Layout (optional)',
      defaultValue: true
    },
    initialScale: {
      control: { type: 'range', min: 0.1, max: 10, step: 0.1 },
      description: 'Initial Scale (optional), number between 0.1 to 10 or `contain` | `cover`',
      defaultValue: 1,
      options: ['contain', 'cover', 1]
    },
    acceleration: {
      control: 'select',
      description: 'Acceleration (optional)',
      defaultValue: 'default',
      options: ['default', 'high-performance', 'low-power']
    },
    debugOptions: {
      control: 'object',
      description: 'Debugger option for dev & test (optional)',
      defaultValue: {
        showBoundingBox: false,
        showControlPoint: false
      }
    },
    graph: {
      control: 'object',
      description: 'Graph for demo purpose (not really used in production)'
    }
  }
} satisfies Meta<typeof FlowKit.Screen.Window>;

const Template: StoryFn<typeof FlowKit.Screen.Window> = (args) => ({
  components: {
    'FlowKit.Screen.Window': FlowKit.Screen.Window,
    'FlowKit.Layout.Node': FlowKit.Layout.Node,
    CardBox
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 800px; height: 720px; padding: 32px; resize: both; overflow: hidden; box-sizing: content-box;">
      <FlowKit.Screen.Window v-bind="args">
        <template v-for="node in args.graph">
          <FlowKit.Layout.Node v-bind="node">
            <CardBox data-demo-content style="width: 240px; height: 120px;">
              <p>#{{ node.id }}</p>
              <h1>{{ node.name }}</h1>
            </CardBox>
          </FlowKit.Layout.Node>
        </template>
      </FlowKit.Screen.Window>
    </div>
  `
});

export const Flow = Template.bind({});
Flow.args = {
  devtools: true,
  toolbar: true,
  toolbarPosition: 'bottom-right',
  toolbarDirection: 'horizontal',
  zoomable: true,
  autoLayout: true,
  initialScale: 1,
  acceleration: 'high-performance',
  debugOptions: {
    showBoundingBox: false,
    showControlPoint: false
  },
  graph: [
    {
      id: 'node-01',
      name: 'Node 01',
      to: ['node-02', 'node-03', 'node-04', 'node-07'],
      position: { x: 0, y: -0.5 },
      relative: true
    },
    {
      id: 'node-02',
      name: 'Node 02',
      to: ['node-03', 'node-05'],
      position: { x: 0, y: 0.5 },
      relative: true
    },
    {
      id: 'node-03',
      name: 'Node 03',
      to: ['node-01', 'node-02'],
      position: { x: 1, y: 0 },
      relative: true
    },
    {
      id: 'node-04',
      name: 'Node 04',
      to: ['node-01', 'node-02', 'node-03', 'node-05'],
      position: { x: 1, y: -1 },
      relative: true
    },
    {
      id: 'node-05',
      name: 'Node 05',
      to: ['node-02', 'node-06'],
      position: { x: 1, y: 1 },
      relative: true
    },
    {
      id: 'node-06',
      name: 'Node 06',
      to: ['node-02', 'node-07', 'node-08', 'node-09', 'node-10'],
      position: { x: 2, y: 0 },
      relative: true
    },
    {
      id: 'node-07',
      name: 'Node 07',
      to: ['node-02', 'node-04'],
      position: { x: 3, y: -1.5 },
      relative: true
    },
    {
      id: 'node-08',
      name: 'Node 08',
      to: ['node-02'],
      position: { x: 3, y: -0.5 },
      relative: true
    },
    {
      id: 'node-09',
      name: 'Node 09',
      to: ['node-01', 'node-02', 'node-10'],
      position: { x: 3, y: 0.5 },
      relative: true
    },
    {
      id: 'node-10',
      name: 'Node 10',
      to: ['node-02', 'node-09'],
      position: { x: 3, y: 1.5 },
      relative: true
    }
  ]
};
