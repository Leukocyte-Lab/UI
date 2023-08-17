import type { AttackMatrix } from './AttackMatrix.model';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: import("vue").PropType<AttackMatrix.AttackMatrixItem[]>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showDetected: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<AttackMatrix.AttackMatrixItem[]>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showDetected: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    showDetected: boolean;
}, {}>;
export default _default;
