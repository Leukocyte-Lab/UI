import type { Meta } from '@storybook/vue3';
import Timeline from './Timeline.vue';
declare const meta: Meta<typeof Timeline>;
export default meta;
export declare const Default: {
    args: {
        style: {
            width: string;
            height: string;
        };
        start: Date;
        end: Date;
        events: ({
            id: string;
            range: {
                start: Date;
                end: Date;
            };
        } | {
            id: string;
            range: {
                start: Date;
                end?: undefined;
            };
        })[];
    };
};
