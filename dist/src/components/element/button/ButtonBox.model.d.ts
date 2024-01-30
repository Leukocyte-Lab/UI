export declare namespace ButtonBox {
    type BaseProps = {
        label?: string;
        icon?: string;
        link?: string;
        disabled?: boolean;
        clicked?: boolean;
        bobble?: boolean | number;
        color?: Color;
        variant?: Variant;
        level?: Level;
        size?: Size;
        loading?: boolean;
    };
    type Variant = 'rounded' | 'square' | 'text-square' | 'circle' | 'rect' | 'extendable-rect' | 'text' | 'file';
    type Level = 'primary' | 'secondary';
    type Size = 'small' | 'medium' | 'large' | 'huge';
    type Color = 'general' | 'danger';
    type Props = BaseProps;
}
