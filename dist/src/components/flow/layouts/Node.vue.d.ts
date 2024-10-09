import type { VNode } from 'vue';
import { Flow } from '../Flow.model';
declare function __VLS_template(): Readonly<{
    default: () => VNode;
}> & {
    default: () => VNode;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Flow.UI.Layout.Node.Props>, {
    activeEdgesOn: string;
    active: boolean;
    blur: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    id: Flow.Entity.Node.Model["id"];
    name?: string;
    to?: Flow.Entity.Node.Model["id"][];
    position?: import("../../../shared").Vec2;
    positionX?: number;
    positionY?: number;
    relative?: boolean;
} & {
    activeEdgesOn?: "from";
    activeNodeId?: never;
} & Pick<Flow.UI.Layout.Edge.Props, "active" | "radius" | "blur" | "arrowSize" | "strokeWidth" | "strokeColor" | "strokeOpacity" | "priority">>, {
    activeEdgesOn: string;
    active: boolean;
    blur: boolean;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    id: Flow.Entity.Node.Model["id"];
    name?: string;
    to?: Flow.Entity.Node.Model["id"][];
    position?: import("../../../shared").Vec2;
    positionX?: number;
    positionY?: number;
    relative?: boolean;
} & {
    activeEdgesOn: "to" | "both";
    activeNodeId: Flow.Entity.Node.Model["id"];
} & Pick<Flow.UI.Layout.Edge.Props, "active" | "radius" | "blur" | "arrowSize" | "strokeWidth" | "strokeColor" | "strokeOpacity" | "priority">>, {
    activeEdgesOn: string;
    active: boolean;
    blur: boolean;
}>>>, {
    active: boolean;
    blur: boolean;
    activeEdgesOn: "from";
} | {
    active: boolean;
    blur: boolean;
    activeEdgesOn: "to" | "both";
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
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
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
