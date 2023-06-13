export namespace ButtonBox {
  export type BaseProps = {
    label?: string;
    icon?: string;
    link?: string;
    disabled?: boolean;
    clicked?: boolean;
    variant?: Variant;
    level?: Level;
    size?: Size;
  };

  export type Variant = 'rounded' | 'square' | 'circle' | 'rect' | 'text' | 'file';
  export type Level = 'primary' | 'secondary';
  export type Size = 'small' | 'large';

  export type Props = BaseProps;
}
