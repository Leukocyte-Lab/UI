export namespace ButtonBox {
  export type BaseProps = {
    label?: string;
    icon?: string;
    link?: string;
    disabled?: boolean;
    clicked?: boolean;
    variant?: Variant;
    level?: Level;
  };

  export type Variant = 'rounded' | 'square' | 'circle' | 'rect' | 'text' | 'file';
  export type Level = 'primary' | 'secondary';

  export type Props = BaseProps;
}
