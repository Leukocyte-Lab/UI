import type { CardBox } from '../../../components/element/card/CardBox.model';
declare var __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: import("vue").DefineComponent<CardBox.BaseProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CardBox.BaseProps> & Readonly<{}>, {
    color: CardBox.Color;
    variant: CardBox.Variant;
    active: boolean;
    clickable: boolean;
    hasStroke: boolean;
    strokeWeight: CardBox.StrokeWeight;
    purpose: CardBox.Purpose;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
