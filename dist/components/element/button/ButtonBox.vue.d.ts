import type { ButtonBox } from '../../../components/element/button/ButtonBox.model';
declare const _default: import("vue").DefineComponent<{
    link: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    variant: {
        type: import("vue").PropType<ButtonBox.Variant>;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    clicked: {
        type: import("vue").PropType<boolean>;
    };
    bobble: {
        type: import("vue").PropType<number | boolean>;
        default: boolean;
    };
    level: {
        type: import("vue").PropType<ButtonBox.Level>;
        default: string;
    };
    size: {
        type: import("vue").PropType<ButtonBox.Size>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    link: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    variant: {
        type: import("vue").PropType<ButtonBox.Variant>;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    clicked: {
        type: import("vue").PropType<boolean>;
    };
    bobble: {
        type: import("vue").PropType<number | boolean>;
        default: boolean;
    };
    level: {
        type: import("vue").PropType<ButtonBox.Level>;
        default: string;
    };
    size: {
        type: import("vue").PropType<ButtonBox.Size>;
        default: string;
    };
}>> & {
    onClick?: ((event: MouseEvent) => any) | undefined;
}, {
    variant: ButtonBox.Variant;
    disabled: boolean;
    bobble: number | boolean;
    level: ButtonBox.Level;
    size: ButtonBox.Size;
}, {}>;
export default _default;
