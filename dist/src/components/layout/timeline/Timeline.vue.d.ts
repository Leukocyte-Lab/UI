import type { Timeline } from './Timeline.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Timeline.Props>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:range": (range: Timeline.Range.Model) => void;
    "update:duration": (duration: Date) => void;
    "update:focused": (events: Map<string, Timeline.Event.Model>) => void;
    "update:focused.array": (events: Timeline.Event.Model[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "cover";
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration?: number | Date;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow?: false;
} & {
    shrink?: false;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow?: false;
} & {
    shrink: "fit";
    shrinkThreshold?: Date | number;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow?: false;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date;
    shrinkPolicy?: `time-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow?: false;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number;
    shrinkPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "fill";
    growThreshold?: Date | number;
} & {
    shrink?: false;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "fill";
    growThreshold?: Date | number;
} & {
    shrink: "fit";
    shrinkThreshold?: Date | number;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "fill";
    growThreshold?: Date | number;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date;
    shrinkPolicy?: `time-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "fill";
    growThreshold?: Date | number;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number;
    shrinkPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: Date;
    growPolicy?: `time-${"slice" | "density"}`;
} & {
    shrink?: false;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: Date;
    growPolicy?: `time-${"slice" | "density"}`;
} & {
    shrink: "fit";
    shrinkThreshold?: Date | number;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: Date;
    growPolicy?: `time-${"slice" | "density"}`;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date;
    shrinkPolicy?: `time-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: Date;
    growPolicy?: `time-${"slice" | "density"}`;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number;
    shrinkPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: number;
    growPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
} & {
    shrink?: false;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: number;
    growPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
} & {
    shrink: "fit";
    shrinkThreshold?: Date | number;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: number;
    growPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date;
    shrinkPolicy?: `time-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    events: Timeline.Event.Model[] | import("../../../shared").Dictionary<Timeline.Event.Model, "id">;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions;
} & {
    duration: "justify";
    basis?: number | Date;
} & {
    grow: "justify";
} & {
    growThreshold?: number;
    growPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number;
    shrinkPolicy?: `${"time" | "event"}-${"slice" | "density"}`;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>>> & {
    "onUpdate:range"?: ((range: Timeline.Range.Model) => any) | undefined;
    "onUpdate:duration"?: ((duration: Date) => any) | undefined;
    "onUpdate:focused"?: ((events: Map<string, Timeline.Event.Model>) => any) | undefined;
    "onUpdate:focused.array"?: ((events: Timeline.Event.Model[]) => any) | undefined;
}, {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "cover";
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
} | {
    title: string;
    follow: boolean;
    running: boolean;
    duration: "justify";
    basis: number | Date;
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
