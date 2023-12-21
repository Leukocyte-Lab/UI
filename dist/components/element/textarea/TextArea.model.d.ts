import type { EventSignalOptions } from '../../../shared/libs/event';
import type { InvalidMessage } from '../../../shared/libs/validation';
export declare namespace TextArea {
    type Props = {
        modelValue?: string;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        name?: string;
        autocomplete?: string;
        autofocus?: boolean;
        maxlength?: number;
        minlength?: number;
        size?: number;
        spellcheck?: boolean;
        tabindex?: number;
        invalidMessage?: Partial<InvalidMessage>;
        eventSignalOptions?: EventSignalOptions;
    };
    type Emits = {
        (e: 'update:modelValue', value: string): void;
        (e: 'validation', value: ValidityState): void;
    };
}
