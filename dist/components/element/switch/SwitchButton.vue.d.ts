declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    disabled: boolean;
}, {}>;
export default _default;
