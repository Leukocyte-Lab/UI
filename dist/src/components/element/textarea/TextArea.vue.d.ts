import type { TextArea } from '../../../components/element/textarea/TextArea.model';
declare const __VLS_export: import("vue").DefineComponent<TextArea.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    validation: (value: ValidityState) => any;
}, string, import("vue").PublicProps, Readonly<TextArea.Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidation?: ((value: ValidityState) => any) | undefined;
}>, {
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    autocomplete: string;
    spellcheck: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
