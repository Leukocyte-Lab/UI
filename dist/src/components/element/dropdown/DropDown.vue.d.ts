import type { VNode } from 'vue';
import type { DropDown } from '../../../components/element/dropdown/DropDown.model';
declare const __VLS_export: <T extends DropDown.AcceptableValue>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<(DropDown.Props<T> & {
        modelValue: DropDown.Props<T>["modelValue"];
        query?: string;
        newOptionValue?: string;
    }) & {
        "onUpdate:modelValue"?: ((value: T | Map<string | number, T> | T[] | undefined) => any) | undefined;
        "onUpdate:query"?: ((value: string) => any) | undefined;
        onCreate?: ((value: string, onFinish: (option: T) => void, onError: () => void) => any) | undefined;
        "onUpdate:newOptionValue"?: ((value: string) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        reset: () => void;
        clearSearch: () => void;
        clearSelection: () => void;
        onShowMenu: import("../../../shared/libs/signal").Signal<boolean>;
    }>) => void;
    attrs: any;
    slots: {
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
    };
    emit: DropDown.Emits<T> & (((event: "update:modelValue", value: T | Map<string | number, T> | T[] | undefined) => void) & ((event: "update:query", value: string) => void) & ((event: "update:newOptionValue", value: string) => void));
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
