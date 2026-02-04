import type { DataTable } from './DataTable.model';
declare const __VLS_export: <T extends DataTable.ItemType<DataTable.AcceptedTypes>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<DataTable.Component.Cell.Props<T> & {
        "onSelect:column"?: ((value: DataTable.Column<T>) => any) | undefined;
        "onSelect:row"?: ((value: DataTable.Component.Row.Payload<T>) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: DataTable.Component.Cell.Slots<T>;
    emit: DataTable.Component.Cell.Emits<T>;
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
