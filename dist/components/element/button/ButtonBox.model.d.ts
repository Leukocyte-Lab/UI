export declare namespace ButtonBox {
    type BaseProps = {
        label?: string;
        icon?: string;
        link?: string;
        disabled?: boolean;
        clicked?: boolean;
        bobble?: boolean | number;
        variant?: Variant;
        level?: Level;
        size?: Size;
    };
    type Variant = 'rounded' | 'square' | 'text-square' | 'circle' | 'rect' | 'extendable-rect' | 'text' | 'file';
    type Level = 'primary' | 'secondary';
    type Size = 'small' | 'large';
    type Props = BaseProps;
}
