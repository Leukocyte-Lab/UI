import type { VNode } from 'vue';
import type { DropDown } from '../../../components/element/dropdown/DropDown.model';
declare const _default: <T extends DropDown.AcceptableValue>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_Prettify<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<Pick<Partial<{}> & Omit<{
        "onUpdate:modelValue"?: ((modelValue: T | Map<string | number, T> | T[] | undefined) => any) | undefined;
        "onUpdate:query"?: ((query: string) => any) | undefined;
        onCreate?: ((value: string, onFinish: (option: T) => void, onError: () => void) => any) | undefined;
        "onUpdate:newOptionValue"?: ((newOptionValue: string) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        "onUpdate:modelValue"?: ((modelValue: T | Map<string | number, T> | T[] | undefined) => any) | undefined;
        "onUpdate:query"?: ((query: string) => any) | undefined;
        onCreate?: ((value: string, onFinish: (option: T) => void, onError: () => void) => any) | undefined;
        "onUpdate:newOptionValue"?: ((newOptionValue: string) => any) | undefined;
    }, never>, "onUpdate:modelValue" | "onUpdate:query" | "onCreate" | "onUpdate:newOptionValue"> & ({
        modelValue: DropDown.Props<T>["modelValue"];
        query?: string;
        newOptionValue?: string;
    } & DropDown.Props<T>)> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        reset: () => void;
        clearSearch: () => void;
        clearSelection: () => void;
        onShowMenu: import("../../../shared/libs/signal").Signal<boolean>;
    }>): void;
    attrs: any;
    slots: ReturnType<() => Readonly<{
        default?: (props: {
            index: string | number;
            multiple: boolean;
            option: DropDown.Option<T>;
            clearSelection: () => void;
        }) => VNode;
        header?: (props: {
            selection: DropDown.Props<T>["modelValue"];
            multiple: boolean;
            useSearch?: boolean;
            searchQuery?: string;
            result?: Map<string | number, T>;
            label?: string;
            clearSelection: () => void;
        }) => VNode;
        footer?: (props: {
            selection: DropDown.Props<T>["modelValue"];
            multiple: boolean;
            useSearch?: boolean;
            searchQuery?: string;
            result?: Map<string | number, T>;
            label?: string;
            clearSelection: () => void;
        }) => VNode;
        'clear-selection'?: (props: {
            clearSelection: () => void;
        }) => VNode;
        'empty-placeholder'?: (props: {
            groupName?: string | number;
        }) => VNode;
        'no-match-placeholder'?: (props: {
            groupName?: string | number;
        }) => VNode;
    }> & {
        default?: (props: {
            index: string | number;
            multiple: boolean;
            option: DropDown.Option<T>;
            clearSelection: () => void;
        }) => VNode;
        header?: (props: {
            selection: DropDown.Props<T>["modelValue"];
            multiple: boolean;
            useSearch?: boolean;
            searchQuery?: string;
            result?: Map<string | number, T>;
            label?: string;
            clearSelection: () => void;
        }) => VNode;
        footer?: (props: {
            selection: DropDown.Props<T>["modelValue"];
            multiple: boolean;
            useSearch?: boolean;
            searchQuery?: string;
            result?: Map<string | number, T>;
            label?: string;
            clearSelection: () => void;
        }) => VNode;
        'clear-selection'?: (props: {
            clearSelection: () => void;
        }) => VNode;
        'empty-placeholder'?: (props: {
            groupName?: string | number;
        }) => VNode;
        'no-match-placeholder'?: (props: {
            groupName?: string | number;
        }) => VNode;
    }>;
    emit: DropDown.Emits<T> & (((evt: "update:modelValue", modelValue: T | Map<string | number, T> | T[] | undefined) => void) & ((evt: "update:query", query: string) => void) & ((evt: "update:newOptionValue", newOptionValue: string) => void));
}>) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
