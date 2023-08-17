import type { EventSignalOptions } from '@/shared/libs/event';
import type { InvalidMessage } from '@/shared/libs/validation';

export namespace TextArea {
  export type Props = {
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
  }
}
