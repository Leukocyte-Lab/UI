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
    };
    type Variant = 'metallic' | 'flat' | 'dash';
    type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red';
    type StrokeWeight = 'bold' | 'normal' | 'thin';
    type Purpose = 'box' | 'container';
    type Props = BaseProps;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CardBox.BaseProps>, {
    variant: string;
    color: string;
    hasStroke: boolean;
    clickable: boolean;
    strokeWeight: string;
    purpose: string;
    radius: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CardBox.BaseProps>, {
    variant: string;
    color: string;
    hasStroke: boolean;
    clickable: boolean;
    strokeWeight: string;
    purpose: string;
    radius: string;
}>>>, {
    color: CardBox.Color;
    radius: string;
    variant: CardBox.Variant;
    clickable: boolean;
    hasStroke: boolean;
    strokeWeight: CardBox.StrokeWeight;
    purpose: CardBox.Purpose;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
