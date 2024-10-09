import type { Meta, StoryObj } from '@storybook/vue3';
import LoadingIcon from './LoadingIcon.vue';
declare const meta: Meta<typeof LoadingIcon>;
export default meta;
type LoadingIcon$ = StoryObj<typeof LoadingIcon>;
export declare const DefaultLoadingIcon: LoadingIcon$;
export declare const WaitingLoadingIcon: LoadingIcon$;
export declare const SucceededLoadingIcon: LoadingIcon$;
export declare const FailedLoadingIcon: LoadingIcon$;
