import type { MustHas } from '../../../shared';
import type { Char } from '../../../shared/types/char';
import type { ObjectLike } from '../../../shared/types/object';
import type { Vector } from '../../../shared/types/vector';
export declare namespace Chart {
    type Type = 'line' | 'bar' | 'radar' | 'doughnut' | 'matrix';
    type DataType = number | string | Date;
    type DataTypeSet = 'number' | 'string' | 'date';
    type Payload = {
        normalized?: number;
        value?: DataType;
    };
    type Axis = {
        label: string;
        min?: number | 'auto';
        max?: number | 'auto';
        step?: number;
        type: DataTypeSet;
        accessor?: string;
        selector?: string;
        options?: Options;
        sort?: 'asc' | 'desc';
        metrics?: MustHas<Payload, 'normalized'>[];
    };
    type AxisName = Char;
    type Options = {
        offset: Vector<'x' | 'y'>;
        title?: string;
        curve?: 'smooth' | 'straight';
        round?: boolean;
        radius?: number;
        grid?: 'x' | 'y' | 'xy';
        color?: string;
    };
    type Plot = Record<string, DataType>;
    type NormalizedPlot = {
        data: Record<string, DataType>;
    } & Record<'x' | 'y', MustHas<Payload, 'normalized'>> & Partial<Record<AxisName, MustHas<Payload, 'normalized'>>>;
    type Datasets = {
        series: Plot[];
        label?: string;
        options?: Options;
    };
    type NormalizedDatasets = {
        label?: string;
        series: NormalizedPlot[];
    };
    type Props = {
        axises: Record<'x' | 'y', Axis> & Partial<Record<AxisName, Axis>>;
        datasets: ObjectLike[] | ObjectLike;
        options?: Options;
    };
}
