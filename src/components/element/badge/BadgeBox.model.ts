export namespace BadgeBox {
  export type Variant = 'capsule' | 'tab';
  export type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red' | 'purple';

  export interface Props {
    label: string;
    content?: string;
    icon?: string;
    delimiter?: string;
    color?: Color;
    variant?: Variant;
    link?: string;
  }
}
