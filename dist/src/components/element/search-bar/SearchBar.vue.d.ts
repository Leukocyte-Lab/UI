import type { SearchBar } from './SearchBar.model';
declare const _default: <T extends SearchBar.AcceptableValue>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_Prettify<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<Pick<Partial<{}> & Omit<{
        onSelect?: ((option: T) => any) | undefined;
        "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
        onSearch?: ((option: Map<string | number, T> | T[] | undefined) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        onSelect?: ((option: T) => any) | undefined;
        "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
        onSearch?: ((option: Map<string | number, T> | T[] | undefined) => any) | undefined;
    }, never>, "onSelect" | "onUpdate:modelValue" | "onSearch"> & ({
        modelValue?: string;
    } & SearchBar.Props<T>)> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => {}>;
    emit: SearchBar.Emits<T> & ((evt: "update:modelValue", modelValue: string) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
