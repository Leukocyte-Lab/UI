declare const _default: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        label: {
            type: StringConstructor;
            required: false;
        };
        icon: {
            type: StringConstructor;
            required: false;
        };
        link: {
            type: StringConstructor;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        variant: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        level: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        label: {
            type: StringConstructor;
            required: false;
        };
        icon: {
            type: StringConstructor;
            required: false;
        };
        link: {
            type: StringConstructor;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        variant: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        level: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>>, {
        disabled: boolean;
        variant: string;
        level: string;
    }, {}>;
    tags: string[];
    argTypes: {
        label: {
            control: string;
            description: string;
        };
        link: {
            control: string;
            description: string;
        };
        icon: {
            control: string;
            description: string;
        };
        disabled: {
            control: string;
            description: string;
            defaultValue: boolean;
        };
        variant: {
            control: string;
            description: string;
            options: string[];
            defaultValue: string;
        };
        level: {
            control: string;
            description: string;
            options: string[];
            defaultValue: string;
        };
        onClick: {
            action: string;
        };
    };
    args: {
        label: string;
        link: string;
        icon: string;
        variant: string;
        level: string;
        disabled: false;
    };
};
export default _default;
export declare const PrimaryRoundedButtonBox: any;
export declare const SecondaryRoundedButtonBox: any;
export declare const PrimaryRectButtonBox: any;
export declare const SecondaryRectButtonBox: any;
export declare const SquareButtonBox: any;
export declare const CircleButtonBox: any;
