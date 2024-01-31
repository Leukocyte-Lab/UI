import type { EventSignalOptions } from '../../../shared/libs/event';
export declare namespace ButtonBox {
    type BaseProps = {
        label?: string;
        icon?: string;
        link?: string;
        disabled?: boolean;
        clicked?: boolean;
        bobble?: boolean | number | string;
        color?: keyof typeof Color;
        variant?: keyof typeof Variant;
        level?: keyof typeof Level;
        size?: keyof typeof Size;
        mode?: keyof typeof Mode;
        loading?: boolean;
        eventSignalOptions?: EventSignalOptions;
    };
    enum Variant {
        'rounded' = "rounded",
        'square' = "square",
        'text-square' = "text-square",
        'circle' = "circle",
        'rect' = "rect",
        'extendable-rect' = "extendable-rect",
        'text' = "text",
        'file' = "file"
    }
    enum Level {
        'primary' = "primary",
        'secondary' = "secondary",
        'tertiary' = "tertiary"
    }
    enum Size {
        'small' = "small",
        'medium' = "medium",
        'large' = "large",
        'huge' = "huge"
    }
    enum Color {
        'purple' = "purple",
        'blue' = "blue",
        'cyan' = "cyan",
        'green' = "green",
        'orange' = "orange",
        'red' = "red"
    }
    enum Mode {
        'normal' = "normal",
        'danger' = "danger"
    }
    type Props = BaseProps;
    type Emits = {
        (e: 'click', event: MouseEvent): void;
    };
}
