import type { SelectMenu } from '../../../components/element/menu/SelectMenu.model';
import type { ObjectLike } from '../../../shared/types/object';
declare const _default: import("vue").DefineComponent<{
    groupBy: {
        type: import("vue").PropType<string>;
    };
    options: {
        type: import("vue").PropType<ObjectLike[]>;
        required: true;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<ObjectLike | ObjectLike[]>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fields: {
        type: import("vue").PropType<SelectMenu.Fields>;
        required: true;
    };
    useSearch: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": ((option: ObjectLike) => void) & ((options: ObjectLike[]) => void);
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    groupBy: {
        type: import("vue").PropType<string>;
    };
    options: {
        type: import("vue").PropType<ObjectLike[]>;
        required: true;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<ObjectLike | ObjectLike[]>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fields: {
        type: import("vue").PropType<SelectMenu.Fields>;
        required: true;
    };
    useSearch: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((options: ObjectLike[]) => any) | undefined;
}, {
    multiple: boolean;
}, {}>;
export default _default;
