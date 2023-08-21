declare namespace CardBox {
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
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    link: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<CardBox.Color>;
        default: string;
    };
    radius: {
        type: import("vue").PropType<string>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<CardBox.Variant>;
        default: string;
    };
    clickable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hasStroke: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    strokeWeight: {
        type: import("vue").PropType<CardBox.StrokeWeight>;
        default: string;
    };
    purpose: {
        type: import("vue").PropType<CardBox.Purpose>;
        default: string;
    };
    active: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    link: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<CardBox.Color>;
        default: string;
    };
    radius: {
        type: import("vue").PropType<string>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<CardBox.Variant>;
        default: string;
    };
    clickable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hasStroke: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    strokeWeight: {
        type: import("vue").PropType<CardBox.StrokeWeight>;
        default: string;
    };
    purpose: {
        type: import("vue").PropType<CardBox.Purpose>;
        default: string;
    };
    active: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    color: CardBox.Color;
    radius: string;
    variant: CardBox.Variant;
    clickable: boolean;
    hasStroke: boolean;
    strokeWeight: CardBox.StrokeWeight;
    purpose: CardBox.Purpose;
    active: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
