import type { InputRange } from './InputRange.model';
declare const __VLS_export: import("vue").DefineComponent<InputRange.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<InputRange.Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    max: number;
    min: number;
    step: number;
    thumbColor: string;
    trackColor: string;
    progressColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
