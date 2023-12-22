export namespace ButtonBox {
  export type BaseProps = {
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

  export type Variant =
    | 'rounded'
    | 'square'
    | 'text-square'
    | 'circle'
    | 'rect'
    | 'extendable-rect'
    | 'text'
    | 'file';
  export type Level = 'primary' | 'secondary';
  export type Size = 'small' | 'medium' | 'large' | 'huge';
  export type Color = 'general' | 'danger';

  export type Props = BaseProps;
}
