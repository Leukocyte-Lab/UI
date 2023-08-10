declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    items: {
        type: import("vue").PropType<import("../../shared/types/object").ObjectLike[]>;
        required: true;
    };
    groupBy: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<import("../../shared/types/object").ObjectLike[]>;
        required: true;
    };
    groupBy: {
        type: import("vue").PropType<string>;
    };
}>>, {}, {}>, {
    default: (props: {
        item: import("../../shared/types/object").ObjectLike;
        index: number;
    }) => JSX.Element;
    group?: ((props: {
        group: string | number;
        items: import("../../shared/types/object").ObjectLike[];
    }) => JSX.Element) | undefined;
    placeholder?: ((props: {}) => JSX.Element) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
