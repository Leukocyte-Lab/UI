export namespace CardBox {
  export type BaseProps = {
    link?: string;
    variant?: Variant;
    color?: Color;
    hasStroke?: boolean;
    strokeWeight?: StrokeWeight;
    purpose?: Purpose;
    radius?: string;
    clickable?: boolean;
    active?: boolean;
  };

  export type Variant = 'metallic' | 'flat' | 'dash';
  export type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red';
  export type StrokeWeight = 'bold' | 'normal' | 'thin';
  export type Purpose = 'box' | 'container';

  export type Props = BaseProps;
}
