declare const _default: import("vue").DefineComponent<{
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    placeholder: {
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    validation: (value: ValidityState) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    placeholder: {
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
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidation?: ((value: ValidityState) => any) | undefined;
}, {
    required: boolean;
    spellcheck: boolean;
    disabled: boolean;
    readonly: boolean;
    autocomplete: string;
}, {}>;
export default _default;
