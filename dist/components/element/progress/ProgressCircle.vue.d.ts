import type { Progress } from '../../../components/element/progress/progress.model';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<number>;
        default: number;
    };
    variant: {
        type: import("vue").PropType<Progress.Variant>;
        default: string;
    };
    thickness: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<number>;
        default: number;
    };
    variant: {
        type: import("vue").PropType<Progress.Variant>;
        default: string;
    };
    thickness: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {
    value: number;
    variant: Progress.Variant;
    thickness: number;
}, {}>;
export default _default;
