import type { ObjectLike } from '../../../shared/types/object';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: import("vue").PropType<ObjectLike[]>;
        default: () => never[];
    };
    label: {
        type: import("vue").PropType<string>;
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
    modelValue: {
        type: import("vue").PropType<ObjectLike | ObjectLike[]>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fields: {
        type: import("vue").PropType<import("../menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    useSearch: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": ((option: ObjectLike) => void) & ((options: ObjectLike[]) => void);
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<ObjectLike[]>;
        default: () => never[];
    };
    label: {
        type: import("vue").PropType<string>;
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
    modelValue: {
        type: import("vue").PropType<ObjectLike | ObjectLike[]>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fields: {
        type: import("vue").PropType<import("../menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    useSearch: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((options: ObjectLike[]) => any) | undefined;
}, {
    items: ObjectLike[];
    level: import("../button/ButtonBox.model").ButtonBox.Level;
    size: import("../button/ButtonBox.model").ButtonBox.Size;
    multiple: boolean;
}, {}>;
export default _default;
