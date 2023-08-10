declare const _default: import("vue").DefineComponent<{
    items: {
        type: import("vue").PropType<import("../../../shared/types/object").ObjectLike<any>[]>;
        default: () => never[];
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    level: {
        type: import("vue").PropType<import("../button/ButtonBox.model").ButtonBox.Level>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../button/ButtonBox.model").ButtonBox.Size>;
        default: string;
    };
    fields: {
        type: import("vue").PropType<import("../menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<import("../../../shared/types/object").ObjectLike<any>>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (option: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<import("../../../shared/types/object").ObjectLike<any>[]>;
        default: () => never[];
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    level: {
        type: import("vue").PropType<import("../button/ButtonBox.model").ButtonBox.Level>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../button/ButtonBox.model").ButtonBox.Size>;
        default: string;
    };
    fields: {
        type: import("vue").PropType<import("../menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<import("../../../shared/types/object").ObjectLike<any>>;
    };
}>> & {
    "onUpdate:modelValue"?: ((option: any) => any) | undefined;
}, {
    items: import("../../../shared/types/object").ObjectLike<any>[];
    level: import("../button/ButtonBox.model").ButtonBox.Level;
    size: import("../button/ButtonBox.model").ButtonBox.Size;
}, {}>;
export default _default;
