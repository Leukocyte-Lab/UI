import type { AttackMatrix } from './AttackMatrix.model';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: import("vue").PropType<AttackMatrix.AttackMatrixItem[]>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<false>;
        required: true;
        default: boolean;
    };
    showDetected: {
        type: import("vue").PropType<true>;
        required: true;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<AttackMatrix.AttackMatrixItem[]>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<false>;
        required: true;
        default: boolean;
    };
    showDetected: {
        type: import("vue").PropType<true>;
        required: true;
        default: boolean;
    };
}>>, {
    disabled: false;
    showDetected: true;
}, {}>;
export default _default;
