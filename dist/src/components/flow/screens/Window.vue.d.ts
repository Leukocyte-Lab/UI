import type { VNode } from 'vue';
import { Flow } from '../../../components/flow/Flow.model';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Flow.UI.Screen.Window.Props>, {
    devtools: boolean;
    toolbar: boolean;
    toolbarDirection: string;
    toolbarPosition: string;
    zoomable: boolean;
    autoLayout: boolean;
    initialScale: number;
    acceleration: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Flow.UI.Screen.Window.Props>, {
    devtools: boolean;
    toolbar: boolean;
    toolbarDirection: string;
    toolbarPosition: string;
    zoomable: boolean;
    autoLayout: boolean;
    initialScale: number;
    acceleration: string;
}>>>, {
    initialScale: number | "contain" | "cover";
    autoLayout: boolean;
    devtools: boolean;
    toolbar: boolean;
    zoomable: boolean;
    toolbarPosition: Flow.UI.Layout.Toolbar.Position;
    toolbarDirection: "vertical" | "horizontal";
    acceleration: WebGLPowerPreference;
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
