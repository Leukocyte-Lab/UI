import type { TextField } from '../../../components/element/textfield/TextField.model';
declare const __VLS_export: import("vue").DefineComponent<TextField.Props, {
    checkValidity: () => void;
    focused: import("../../../shared/libs/signal").Signal<boolean>;
    errMsg: import("../../../shared/libs/signal").Signal<string>;
    inputRef$: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    validation: (value: ValidityState) => any;
}, string, import("vue").PublicProps, Readonly<TextField.Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidation?: ((value: ValidityState) => any) | undefined;
}>, {
    type: TextField.Type;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    autocomplete: string;
    spellcheck: boolean;
    iconAlign: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
