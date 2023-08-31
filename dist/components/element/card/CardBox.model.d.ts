export declare namespace CardBox {
    type BaseProps = {
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
    type Variant = 'metallic' | 'flat' | 'dash';
    type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red';
    type StrokeWeight = 'bold' | 'normal' | 'thin';
    type Purpose = 'box' | 'container';
    type Props = BaseProps;
}
