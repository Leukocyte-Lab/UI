import type { Ref, VNode } from 'vue';
import { Flow } from '../../../components/flow/Flow.model';
import type { Vec2 } from '../../../shared/types/vector';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Flow.UI.Screen.Viewport.Props>, {
    scale: number;
    gap: () => {
        x: number;
        y: number;
    };
}>, {
    nodes: Ref<Map<string, Flow.Entity.Node.Model>>;
    edges: Ref<Map<`${string}->${string}`, Flow.Entity.Edge.Model>>;
    isPanning: Ref<boolean | "ready">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Flow.UI.Screen.Viewport.Props>, {
    scale: number;
    gap: () => {
        x: number;
        y: number;
    };
}>>>, {
    gap: number | Vec2;
    scale: number;
}, {}>, Readonly<{
    default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}> & {
    default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
