import type { Chart } from '../../../components/element/chart/chart.model';
declare const _default: import("vue").DefineComponent<{
    axises: {
        type: import("vue").PropType<Record<"x" | "y", Chart.Axis> & Partial<Record<import("../../../shared/types/char").Char, Chart.Axis>>>;
        required: true;
    };
    datasets: {
        type: import("vue").PropType<import("../../../shared").ObjectLike | import("../../../shared").ObjectLike[]>;
        required: true;
    };
    options: {
        type: import("vue").PropType<Chart.Options>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    axises: {
        type: import("vue").PropType<Record<"x" | "y", Chart.Axis> & Partial<Record<import("../../../shared/types/char").Char, Chart.Axis>>>;
        required: true;
    };
    datasets: {
        type: import("vue").PropType<import("../../../shared").ObjectLike | import("../../../shared").ObjectLike[]>;
        required: true;
    };
    options: {
        type: import("vue").PropType<Chart.Options>;
    };
}>>, {}, {}>;
export default _default;
