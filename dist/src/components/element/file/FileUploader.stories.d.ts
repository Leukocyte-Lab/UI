import type { Meta, StoryObj } from '@storybook/vue3-vite';
import FileUploader from './FileUploader.vue';
declare const meta: Meta<typeof FileUploader>;
export default meta;
type FileUploader$ = StoryObj<typeof FileUploader>;
export declare const DefaultFileUploader: FileUploader$;
export declare const MultiFileUploader: FileUploader$;
export declare const LimitedFileUploader: FileUploader$;
