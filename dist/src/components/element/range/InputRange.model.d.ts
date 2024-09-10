import type { EventSignalOptions } from '../../../shared/libs/event';
export declare namespace InputRange {
    interface Props {
        min?: number;
        max?: number;
        step?: number;
        modelValue?: number;
        disabled?: boolean;
        eventSignalOptions?: EventSignalOptions;
        thumbColor?: string;
        trackColor?: string;
        progressColor?: string;
    }
    type Emits = {
        (e: 'update:modelValue', value: number): void;
    };
}
