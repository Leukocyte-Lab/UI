import type { VNode } from 'vue';
import type { TabGroup } from '../../../components/layout/tab/TabGroup.model';
declare let __VLS_typeProps: TabGroup.Props;
type __VLS_PublicProps = {
    modelValue?: TabGroup.Tab.Model;
} & typeof __VLS_typeProps;
declare function __VLS_template(): Readonly<{
    [key: string]: (props: {
        tab: TabGroup.Tab.Model;
        id: TabGroup.Tab.Model["id"];
        index: number;
    }) => VNode;
}> & {
    [key: string]: (props: {
        tab: TabGroup.Tab.Model;
        id: TabGroup.Tab.Model["id"];
        index: number;
    }) => VNode;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    level: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: TabGroup.Tab.Model) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    level: string;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: TabGroup.Tab.Model) => any) | undefined;
}, {
    level: TabGroup.Level & {};
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
