import type { Ref, VNode } from 'vue';
import { Flow } from '../../../components/flow/Flow.model';
import type { Vec2 } from '../../../shared/types/vector';
type __VLS_Slots = {
    default: () => VNode;
};
declare const __VLS_base: import("vue").DefineComponent<Flow.UI.Screen.Viewport.Props, {
    nodes: Ref<Map<string, Flow.Entity.Node.Model>, Map<string, Flow.Entity.Node.Model>>;
    edges: Ref<Map<`${string}->${string}`, Flow.Entity.Edge.Model>, Map<`${string}->${string}`, Flow.Entity.Edge.Model>>;
    isPanning: Ref<boolean | "ready", boolean | "ready">;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Flow.UI.Screen.Viewport.Props> & Readonly<{}>, {
    gap: Vec2 | number;
    scale: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
