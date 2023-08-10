import type { BadgeBox } from './BadgeBox.model';
declare const _default: import("vue").DefineComponent<{
    link: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    color: {
        type: import("vue").PropType<BadgeBox.Color>;
        default: string;
    };
    content: {
        type: import("vue").PropType<string>;
    };
    delimiter: {
        type: import("vue").PropType<string>;
    };
    variant: {
        type: import("vue").PropType<BadgeBox.Variant>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    link: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    color: {
        type: import("vue").PropType<BadgeBox.Color>;
        default: string;
    };
    content: {
        type: import("vue").PropType<string>;
    };
    delimiter: {
        type: import("vue").PropType<string>;
    };
    variant: {
        type: import("vue").PropType<BadgeBox.Variant>;
        default: string;
    };
}>>, {
    color: BadgeBox.Color;
    variant: BadgeBox.Variant;
}, {}>;
export default _default;
