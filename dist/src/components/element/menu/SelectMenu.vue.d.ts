import type { VNode } from 'vue';
import type { SelectMenu } from '../../../components/element/menu/SelectMenu.model';
declare const __VLS_export: <T extends SelectMenu.AcceptableValue>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<(SelectMenu.Props<T> & {
        modelValue: SelectMenu.Props<T>["modelValue"];
        query?: string;
    }) & {
        "onUpdate:modelValue"?: ((value: T | Map<string | number, T> | T[] | undefined) => any) | undefined;
        "onUpdate:query"?: ((value: string) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        reset: () => void;
        clearSearch: import("../../../shared").Callback;
        clearSelection: () => void;
    }>) => void;
    attrs: any;
    slots: {
        default?: (props: {
            index: string | number;
            multiple: boolean;
            option: SelectMenu.Option<T>;
            clearSelection: () => void;
        }) => VNode;
        header?: (props: {
            selection: SelectMenu.Props<T>["modelValue"];
            multiple: boolean;
            useSearch?: boolean;
            searchQuery?: string;
            result?: Map<string | number, T>;
            label?: string;
            clearSelection: () => void;
        }) => VNode;
        footer?: (props: {
            selection: SelectMenu.Props<T>["modelValue"];
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
    };
    emit: ((event: "update:modelValue", value: T | Map<string | number, T> | T[] | undefined) => void) & ((event: "update:query", value: string) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
