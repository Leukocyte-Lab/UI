import type { InvalidMessage } from '@/shared/libs/validation';
export declare namespace TextField {
    type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    type Type = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color';
    type Props = {
        modelValue?: string;
        label?: string;
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        required?: boolean;
        type?: Type;
        name?: string;
        autocomplete?: string;
        autofocus?: boolean;
        maxlength?: number;
        minlength?: number;
        pattern?: string;
        size?: number;
        spellcheck?: boolean;
        tabindex?: number;
        inputmode?: InputMode;
        invalidMessage?: Partial<InvalidMessage>;
        icon?: string;
        iconAlign?: 'left' | 'right';
    };
}
