import Timeline from './Timeline.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Layout / Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    events: {
      control: {
        type: 'object'
      },
      description: 'The events to display on the timeline',
    },
    follow: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the timeline should follow the last event (Optional)',
    },
    running: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the timeline is running (Optional)',
    },
    start: {
      control: {
        type: 'date'
      },
      description: 'The start of the timeline (Optional)',
    },
    end: {
      control: {
        type: 'date'
      },
      description: 'The end of the timeline (Optional)',
    },
    title: {
      control: {
        type: 'text'
      },
      description: 'The title of the timeline (Optional)'
    },
    "onUpdate:range": {
      action: 'update:range',
      description: 'Emitted when the range is updated'
    },
    "onUpdate:duration": {
      action: 'update:duration',
      description: 'Emitted when the duration is updated'
    },
    "onUpdate:focused": {
      action: 'update:focused',
      description: 'Emitted when the focused events are updated'
    },
    "onUpdate:focused.array": {
      action: 'update:focused.array',
      description: 'Emitted when the focused events are updated'
    }
  }
} satisfies Meta<typeof Timeline>;

const Template: StoryFn<typeof Timeline> = (args) => ({
  components: { Timeline },
  setup() {
    return { args };
  },
  template: '<Timeline style="width: 900px; height: 216px;" v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  start: new Date('2024-02-01T00:59:50Z'),
  end: new Date('2024-02-01T01:15:58Z'),
  events: [
    {
      id: 'event-1',
      range: {
        start: new Date('2024-02-01T01:00:00Z'),
        end: new Date('2024-02-01T01:00:30Z')
      }
    },
    {
      id: 'event-2',
      range: {
        start: new Date('2024-02-01T01:00:10Z'),
        end: new Date('2024-02-01T01:00:40Z')
      }
    },
    {
      id: 'event-3',
      range: {
        start: new Date('2024-02-01T01:00:10Z'),
        end: new Date('2024-02-01T01:01:45Z')
      }
    },
    {
      id: 'event-4',
      range: {
        start: new Date('2024-02-01T01:00:20Z'),
        end: new Date('2024-02-01T01:06:40Z')
      }
    },
    {
      id: 'event-5',
      range: {
        start: new Date('2024-02-01T01:01:25Z'),
        end: new Date('2024-02-01T01:06:30Z')
      }
    },
    {
      id: 'event-6',
      range: {
        start: new Date('2024-02-01T01:01:30Z'),
        end: new Date('2024-02-01T01:02:00Z')
      }
    },
    {
      id: 'event-7',
      range: {
        start: new Date('2024-02-01T01:01:45Z'),
        end: new Date('2024-02-01T01:02:30Z')
      }
    },
    {
      id: 'event-8',
      range: {
        start: new Date('2024-02-01T01:02:45Z'),
        end: new Date('2024-02-01T01:02:47Z')
      }
    },
    {
      id: 'event-9',
      range: {
        start: new Date('2024-02-01T01:04:30Z'),
        end: new Date('2024-02-01T01:06:00Z')
      }
    },
    {
      id: 'event-10',
      range: {
        start: new Date('2024-02-01T01:02:45Z'),
        end: new Date('2024-02-01T01:03:15Z')
      }
    },
    {
      id: 'event-11',
      range: {
        start: new Date('2024-02-01T01:07:00Z'),
        end: new Date('2024-02-01T01:07:30Z')
      }
    },
    {
      id: 'event-12',
      range: {
        start: new Date('2024-02-01T01:07:30Z'),
        end: new Date('2024-02-01T01:11:00Z')
      }
    },
    {
      id: 'event-13',
      range: {
        start: new Date('2024-02-01T01:08:00Z'),
        end: new Date('2024-02-01T01:08:30Z')
      }
    },
    {
      id: 'event-14',
      range: {
        start: new Date('2024-02-01T01:08:20Z'),
        end: new Date('2024-02-01T01:09:00Z')
      }
    },
    {
      id: 'event-15',
      range: {
        start: new Date('2024-02-01T01:09:00Z'),
        end: new Date('2024-02-01T01:09:10Z')
      }
    },
    {
      id: 'event-16',
      range: {
        start: new Date('2024-02-01T01:09:06Z'),
        end: new Date('2024-02-01T01:10:00Z')
      }
    },
    {
      id: 'event-17',
      range: {
        start: new Date('2024-02-01T01:09:10Z'),
        end: new Date('2024-02-01T01:09:21Z')
      }
    },
    {
      id: 'event-18',
      range: {
        start: new Date('2024-02-01T01:10:28Z'),
        end: new Date('2024-02-01T01:10:11Z')
      }
    },
    {
      id: 'event-19',
      range: {
        start: new Date('2024-02-01T01:10:31Z'),
        end: new Date('2024-02-01T01:10:34Z')
      }
    },
    {
      id: 'event-20',
      range: {
        start: new Date('2024-02-01T01:11:24Z')
      }
    },
    {
      id: 'event-21',
      range: {
        start: new Date('2024-02-01T01:12:00Z'),
        end: new Date('2024-02-01T01:12:19Z')
      }
    },
    {
      id: 'event-22',
      range: {
        start: new Date('2024-02-01T01:12:30Z'),
        end: new Date('2024-02-01T01:12:36Z')
      }
    },
    {
      id: 'event-23',
      range: {
        start: new Date('2024-02-01T01:13:13Z')
      }
    },
    {
      id: 'event-24',
      range: {
        start: new Date('2024-02-01T01:13:17Z')
      }
    },
    {
      id: 'event-25',
      range: {
        start: new Date('2024-02-01T01:14:00Z'),
        end: new Date('2024-02-01T01:14:30Z')
      }
    },
    {
      id: 'event-26',
      range: {
        start: new Date('2024-02-01T01:14:29Z'),
        end: new Date('2024-02-01T01:14:44Z')
      }
    },
    {
      id: 'event-27',
      range: {
        start: new Date('2024-02-01T01:14:47Z'),
        end: new Date('2024-02-01T01:15:30Z')
      }
    },
    {
      id: 'event-28',
      range: {
        start: new Date('2024-02-01T01:15:26Z'),
      }
    }
  ]
};
