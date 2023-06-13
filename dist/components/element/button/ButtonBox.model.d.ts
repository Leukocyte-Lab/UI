export declare namespace ButtonBox {
    type BaseProps = {
        label?: string;
        icon?: string;
        link?: string;
        disabled?: boolean;
        clicked?: boolean;
        variant?: Variant;
        level?: Level;
        size?: Size;
    };
    type Variant = 'rounded' | 'square' | 'circle' | 'rect' | 'text' | 'file';
    type Level = 'primary' | 'secondary';
    type Size = 'small' | 'large';
    type Props = BaseProps;
}
