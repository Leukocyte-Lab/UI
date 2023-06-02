import type { MustHas } from '@/shared';
import type { ObjectLike } from '@/shared/types/object';
import type { Vector } from '@/shared/types/vector';

export namespace Chart {
  export type Type = 'line' | 'bar' | 'radar' | 'doughnut';
  export type DataType = number | string | Date;
  export type DataTypeSet = 'number' | 'string' | 'date';
  export type Payload = {
    normalized?: number;
    value?: DataType;
  };
  export type Axis = {
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
  export type Options = {
    offset: Vector<'x' | 'y'>;
    title?: string;
    curve?: 'smooth' | 'straight';
    round?: boolean;
    radius: number;
    grid?: 'x' | 'y' | 'xy';
    color?: string;
  };
  export type Plot = Record<string, DataType>;
  export type NormalizedPlot = {
    data: Record<string, DataType>;
  } & Record<'x' | 'y', MustHas<Payload, 'normalized'>>;
  export type Datasets = {
    series: Plot[];
    label?: string;
    options?: Options;
  };
  export type NormalizedDatasets = {
    label?: string;
    series: NormalizedPlot[];
  };
  export type Props = {
    axises: Record<'x' | 'y', Axis>;
    datasets: ObjectLike[] | ObjectLike;
    options?: Options;
  };
}
