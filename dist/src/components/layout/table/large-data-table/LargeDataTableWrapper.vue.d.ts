import type { LargeDataTable } from '../../../../components/layout/table/large-data-table/LargeDataTable.model';
declare const __VLS_export: <T extends LargeDataTable.AcceptedTypes>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<LargeDataTable.Component.Wrapper.Props<T> & {
        onOverflowed?: ((value: boolean) => any) | undefined;
        "onSelect:row"?: ((value: import("../data-table/DataTable.model").DataTable.Component.Row.Payload<import("../data-table/DataTable.model").DataTable.ItemType<T>>) => any) | undefined;
        "onRequest:items"?: ((payload: LargeDataTable.ItemCursorPayload<T>) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: import("../data-table/DataTable.model").DataTable.Component.Wrapper.Slots<T>;
    emit: LargeDataTable.Component.Wrapper.Emits<T>;
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
