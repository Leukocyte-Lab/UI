import type { VNode } from 'vue';
import { Flow } from '../../../components/flow/Flow.model';
type __VLS_Slots = {
    default: () => VNode;
};
declare const __VLS_base: import("vue").DefineComponent<Flow.UI.Screen.Window.Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Flow.UI.Screen.Window.Props> & Readonly<{}>, {
    toolbar: boolean;
    initialScale: number | "cover" | "contain";
    autoLayout: boolean;
    devtools: boolean;
    zoomable: boolean;
    toolbarPosition: Flow.UI.Layout.Toolbar.Position;
    toolbarDirection: "horizontal" | "vertical";
    acceleration: WebGLPowerPreference;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
