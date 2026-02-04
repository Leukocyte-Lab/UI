import type { Meta, StoryFn } from '@storybook/vue3-vite';
import InputRange from './InputRange.vue';
declare const meta: Meta<typeof InputRange>;
export default meta;
export declare const DefaultInputRange: StoryFn<import("vue").DefineComponent<import("./InputRange.model.ts").InputRange.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<import("./InputRange.model.ts").InputRange.Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    max: number;
    min: number;
    step: number;
    thumbColor: string;
    trackColor: string;
    progressColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>>;
