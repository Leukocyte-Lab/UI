import type { VNode } from 'vue';
import type { BaseList } from '../../components/base/BaseList.model';
import type { EmptyObject } from '../../shared/types/object';
type __VLS_Slots = {
    default: (props: {
        item: BaseList.Props['items'][number];
        index: number;
    }) => VNode;
    group?: (props: {
        group: string | number;
        items: BaseList.Props['items'];
    }) => VNode;
    placeholder?: (props: EmptyObject) => VNode;
};
declare const __VLS_base: import("vue").DefineComponent<BaseList.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BaseList.Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
