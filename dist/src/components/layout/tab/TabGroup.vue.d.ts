import type { VNode } from 'vue';
import type { TabGroup } from '../../../components/layout/tab/TabGroup.model';
type __VLS_Slots = {
    [key: TabGroup.Tab.Model['id']]: (props: {
        tab: TabGroup.Tab.Model;
        id: TabGroup.Tab.Model['id'];
        index: number;
    }) => VNode;
};
type __VLS_Props = TabGroup.Props;
type __VLS_ModelProps = {
    modelValue?: TabGroup.Tab.Model;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: TabGroup.Tab.Model | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: TabGroup.Tab.Model | undefined) => any) | undefined;
}>, {
    level: TabGroup.Level & {};
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
