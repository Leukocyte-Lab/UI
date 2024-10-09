import { Flow } from '../Flow.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Flow.UI.Layout.Edge.Props>, {
    radius: number;
    arrowSize: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    edge: Flow.Entity.Edge.Model;
    radius?: number;
    arrowSize?: number;
} & {
    active?: boolean;
    blur?: boolean;
    priority?: never;
} & {
    strokeWidth?: string | number;
    strokeColor?: string | number;
    strokeOpacity?: string | number;
}>, {
    radius: number;
    arrowSize: number;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    edge: Flow.Entity.Edge.Model;
    radius?: number;
    arrowSize?: number;
} & {
    active?: boolean;
    blur?: boolean;
    priority?: never;
} & {
    strokeWidth?: [string | number, string | number];
    strokeColor?: [string | number, string | number];
    strokeOpacity?: [string | number, string | number];
}>, {
    radius: number;
    arrowSize: number;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    edge: Flow.Entity.Edge.Model;
    radius?: number;
    arrowSize?: number;
} & {
    active: boolean;
    blur: boolean;
    priority?: `${"active" | "blur"}-first`;
} & {
    strokeWidth?: string | number;
    strokeColor?: string | number;
    strokeOpacity?: string | number;
}>, {
    radius: number;
    arrowSize: number;
}>>> | Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    edge: Flow.Entity.Edge.Model;
    radius?: number;
    arrowSize?: number;
} & {
    active: boolean;
    blur: boolean;
    priority?: `${"active" | "blur"}-first`;
} & {
    strokeWidth?: [string | number, string | number, string | number];
    strokeColor?: [string | number, string | number, string | number];
    strokeOpacity?: [string | number, string | number, string | number];
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
