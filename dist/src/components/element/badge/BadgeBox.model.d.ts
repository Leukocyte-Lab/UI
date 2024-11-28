export declare namespace BadgeBox {
    type Variant = 'capsule' | 'tab';
    type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red' | 'purple';
    interface Props {
        label: string;
        content?: string;
        icon?: string;
        delimiter?: string;
        color?: Color;
        variant?: Variant;
        link?: string;
    }
}
