import type { TextField } from '../../../components/element/textfield/TextField.model';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<TextField.Type>;
        default: string;
    };
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    pattern: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    tabindex: {
        type: import("vue").PropType<number>;
    };
    spellcheck: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inputmode: {
        type: import("vue").PropType<TextField.InputMode>;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<number>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
        default: string;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
    };
    minlength: {
        type: import("vue").PropType<number>;
    };
    invalidMessage: {
        type: import("vue").PropType<Partial<import("../../../shared/libs/validation").InvalidMessage>>;
    };
    eventSignalOptions: {
        type: import("vue").PropType<import("../../../shared/libs/event").EventSignalOptions>;
    };
    iconAlign: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    validation: (value: ValidityState) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<TextField.Type>;
        default: string;
    };
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    pattern: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    tabindex: {
        type: import("vue").PropType<number>;
    };
    spellcheck: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inputmode: {
        type: import("vue").PropType<TextField.InputMode>;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<number>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
        default: string;
    };
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
    };
    minlength: {
        type: import("vue").PropType<number>;
    };
    invalidMessage: {
        type: import("vue").PropType<Partial<import("../../../shared/libs/validation").InvalidMessage>>;
    };
    eventSignalOptions: {
        type: import("vue").PropType<import("../../../shared/libs/event").EventSignalOptions>;
    };
    iconAlign: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidation?: ((value: ValidityState) => any) | undefined;
}, {
    type: TextField.Type;
    required: boolean;
    spellcheck: boolean;
    disabled: boolean;
    readonly: boolean;
    autocomplete: string;
    iconAlign: "left" | "right";
}, {}>;
export default _default;
