import type { Meta, StoryFn } from '@storybook/vue3';
import InputRange from './InputRange.vue';
declare const meta: Meta<typeof InputRange>;
export default meta;
export declare const DefaultInputRange: StoryFn<import("vue").DefineComponent<{
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    eventSignalOptions: {
        type: import("vue").PropType<import("../../../shared/index.js").EventSignalOptions>;
    };
    max: {
        type: import("vue").PropType<number>;
        default: number;
    };
    min: {
        type: import("vue").PropType<number>;
        default: number;
    };
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<number>;
    };
    thumbColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    trackColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    progressColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    eventSignalOptions: {
        type: import("vue").PropType<import("../../../shared/index.js").EventSignalOptions>;
    };
    max: {
        type: import("vue").PropType<number>;
        default: number;
    };
    min: {
        type: import("vue").PropType<number>;
        default: number;
    };
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<number>;
    };
    thumbColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    trackColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    progressColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    max: number;
    min: number;
    step: number;
    thumbColor: string;
    trackColor: string;
    progressColor: string;
}, {}>>;
