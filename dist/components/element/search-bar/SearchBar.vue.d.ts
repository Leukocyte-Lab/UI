import type { ObjectLike } from '../../../shared/types/object';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: import("vue").PropType<ObjectLike[]>;
        default: () => never[];
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    fields: {
        type: import("vue").PropType<import("../menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (option: any) => void;
    select: (option: ObjectLike) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<ObjectLike[]>;
        default: () => never[];
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    fields: {
        type: import("vue").PropType<import("../menu/SelectMenu.model").SelectMenu.Fields>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & {
    onSelect?: ((option: ObjectLike) => any) | undefined;
    "onUpdate:modelValue"?: ((option: any) => any) | undefined;
}, {
    items: ObjectLike[];
    modelValue: string;
}, {}>;
export default _default;
