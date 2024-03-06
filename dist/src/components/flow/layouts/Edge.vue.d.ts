import { Flow } from '../Flow.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Flow.UI.Layout.Edge.Props>, {
    radius: number;
    arrowSize: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    edge: Flow.Entity.Edge.Model;
    radius?: number | undefined;
    arrowSize?: number | undefined;
} & {
    active?: boolean | undefined;
    blur?: boolean | undefined;
    priority?: undefined;
} & {
    strokeWidth?: string | number | undefined;
    strokeColor?: string | number | undefined;
    strokeOpacity?: string | number | undefined;
}>, {
    radius: number;
    arrowSize: number;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    edge: Flow.Entity.Edge.Model;
    radius?: number | undefined;
    arrowSize?: number | undefined;
} & {
    active?: boolean | undefined;
    blur?: boolean | undefined;
    priority?: undefined;
} & {
    strokeWidth?: [string | number, string | number] | undefined;
    strokeColor?: [string | number, string | number] | undefined;
    strokeOpacity?: [string | number, string | number] | undefined;
}>, {
    radius: number;
    arrowSize: number;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    edge: Flow.Entity.Edge.Model;
    radius?: number | undefined;
    arrowSize?: number | undefined;
} & {
    active: boolean;
    blur: boolean;
    priority?: "blur-first" | "active-first" | undefined;
} & {
    strokeWidth?: string | number | undefined;
    strokeColor?: string | number | undefined;
    strokeOpacity?: string | number | undefined;
}>, {
    radius: number;
    arrowSize: number;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    edge: Flow.Entity.Edge.Model;
    radius?: number | undefined;
    arrowSize?: number | undefined;
} & {
    active: boolean;
    blur: boolean;
    priority?: "blur-first" | "active-first" | undefined;
} & {
    strokeWidth?: [string | number, string | number, string | number] | undefined;
    strokeColor?: [string | number, string | number, string | number] | undefined;
    strokeOpacity?: [string | number, string | number, string | number] | undefined;
}>, {
    radius: number;
    arrowSize: number;
}>>>, {
    radius: number;
    arrowSize: number;
} | {
    radius: number;
    arrowSize: number;
} | {
    radius: number;
    arrowSize: number;
} | {
    radius: number;
    arrowSize: number;
}, {}>;
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
