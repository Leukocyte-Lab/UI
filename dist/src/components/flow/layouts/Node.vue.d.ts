import type { VNode } from 'vue';
type __VLS_Slots = {
    default: () => VNode;
};
declare const __VLS_base: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
