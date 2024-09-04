import type { EventSignalOptions } from '@/shared/libs/event';

export namespace InputRange {
  export interface Props {
    min?: number;
    max?: number;
    step?: number;
    modelValue?: number;
    disabled?: boolean;
    eventSignalOptions?: EventSignalOptions;
    thunbColor?: string;
    trackColor?: string;
    progressColor?: string;
  }

  export type Emits = {
    (e: 'update:modelValue', value: number): void;
  };
}
