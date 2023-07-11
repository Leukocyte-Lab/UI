export namespace BadgeBox {
  export type Variant = 'capsule' | 'tab';
  export type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red';

  export interface Props {
    label: string;
    content?: string;
    delimiter?: string;
    color?: Color;
    variant?: Variant;
    link?: string;
  }
}
