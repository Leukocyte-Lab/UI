import type { VNode } from 'vue';
import type { TabGroup } from '../../../components/layout/tab/TabGroup.model';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: import("vue").PropType<TabGroup.Tab.Model>;
    level: {
        type: import("vue").PropType<"primary" | "secondary">;
        default: string;
    };
    tabs: {
        type: import("vue").PropType<import("../../../shared/types/map").Dictionary<TabGroup.Tab.Model, "id"> | TabGroup.Tab.Model[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<TabGroup.Tab.Model>;
    level: {
        type: import("vue").PropType<"primary" | "secondary">;
        default: string;
    };
    tabs: {
        type: import("vue").PropType<import("../../../shared/types/map").Dictionary<TabGroup.Tab.Model, "id"> | TabGroup.Tab.Model[]>;
        required: true;
    };
}>>, {
    level: "primary" | "secondary";
}, {}>, Readonly<{
    [key: string]: (props: {
        tab: TabGroup.Tab.Model;
        id: string;
        index: number;
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}> & {
    [key: string]: (props: {
        tab: TabGroup.Tab.Model;
        id: string;
        index: number;
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
