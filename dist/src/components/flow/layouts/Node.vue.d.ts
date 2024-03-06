import type { VNode } from 'vue';
import { Flow } from '../Flow.model';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Flow.UI.Layout.Node.Props>, {
    activeEdgesOn: string;
    active: boolean;
    blur: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id: string;
    name?: string | undefined;
    to?: string[] | undefined;
    position?: import("../../../shared").Vec2 | undefined;
    positionX?: number | undefined;
    positionY?: number | undefined;
    relative?: boolean | undefined;
} & {
    activeEdgesOn?: "from" | undefined;
    activeNodeId?: undefined;
} & Pick<Flow.UI.Layout.Edge.Props, "radius" | "blur" | "active" | "arrowSize" | "strokeWidth" | "strokeColor" | "strokeOpacity" | "priority">>, {
    activeEdgesOn: string;
    active: boolean;
    blur: boolean;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id: string;
    name?: string | undefined;
    to?: string[] | undefined;
    position?: import("../../../shared").Vec2 | undefined;
    positionX?: number | undefined;
    positionY?: number | undefined;
    relative?: boolean | undefined;
} & {
    activeEdgesOn: "to" | "both";
    activeNodeId: string;
} & Pick<Flow.UI.Layout.Edge.Props, "radius" | "blur" | "active" | "arrowSize" | "strokeWidth" | "strokeColor" | "strokeOpacity" | "priority">>, {
    activeEdgesOn: string;
    active: boolean;
    blur: boolean;
}>>>, {
    blur: boolean;
    active: boolean;
    activeEdgesOn: "from";
} | {
    blur: boolean;
    active: boolean;
    activeEdgesOn: "to" | "both";
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
