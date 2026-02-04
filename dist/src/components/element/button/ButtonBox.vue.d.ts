import { ButtonBox } from '../../../components/element/button/ButtonBox.model';
declare const __VLS_export: import("vue").DefineComponent<ButtonBox.BaseProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<ButtonBox.BaseProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    color: keyof typeof ButtonBox.Color;
    variant: keyof typeof ButtonBox.Variant;
    mode: keyof typeof ButtonBox.Mode;
    size: keyof typeof ButtonBox.Size;
    disabled: boolean;
    bobble: boolean | number | string;
    level: keyof typeof ButtonBox.Level;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
