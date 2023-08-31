import type { Chart } from '../../../components/element/chart/chart.model';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: import("vue").PropType<Chart.Options>;
        default: () => {
            offset: {
                x: number;
                y: number;
            };
            curve: string;
            radius: number;
        };
    };
    axises: {
        type: import("vue").PropType<Record<"x" | "y", Chart.Axis> & Partial<Record<import("../../../shared/types/char").Char, Chart.Axis>>>;
        required: true;
    };
    datasets: {
        type: import("vue").PropType<import("../../../shared").ObjectLike | import("../../../shared").ObjectLike[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<Chart.Options>;
        default: () => {
            offset: {
                x: number;
                y: number;
            };
            curve: string;
            radius: number;
        };
    };
    axises: {
        type: import("vue").PropType<Record<"x" | "y", Chart.Axis> & Partial<Record<import("../../../shared/types/char").Char, Chart.Axis>>>;
        required: true;
    };
    datasets: {
        type: import("vue").PropType<import("../../../shared").ObjectLike | import("../../../shared").ObjectLike[]>;
        required: true;
    };
}>>, {
    options: Chart.Options;
}, {}>;
export default _default;
