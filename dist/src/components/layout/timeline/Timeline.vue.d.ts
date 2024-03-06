import type { Timeline } from './Timeline.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Timeline.Props>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:range": (range: Timeline.Range.Model) => void;
    "update:duration": (duration: Date) => void;
    "update:focused": (events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id">) => void;
    "update:focused.array": (events: Timeline.Event.Model[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "cover";
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration?: number | Date | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow?: false | undefined;
} & {
    shrink?: false | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow?: false | undefined;
} & {
    shrink: "fit";
    shrinkThreshold?: number | Date | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow?: false | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow?: false | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "fill";
    growThreshold?: number | Date | undefined;
} & {
    shrink?: false | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "fill";
    growThreshold?: number | Date | undefined;
} & {
    shrink: "fit";
    shrinkThreshold?: number | Date | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "fill";
    growThreshold?: number | Date | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "fill";
    growThreshold?: number | Date | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: Date | undefined;
    growPolicy?: "time-slice" | "time-density" | undefined;
} & {
    shrink?: false | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: Date | undefined;
    growPolicy?: "time-slice" | "time-density" | undefined;
} & {
    shrink: "fit";
    shrinkThreshold?: number | Date | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: Date | undefined;
    growPolicy?: "time-slice" | "time-density" | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: Date | undefined;
    growPolicy?: "time-slice" | "time-density" | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: number | undefined;
    growPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
} & {
    shrink?: false | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: number | undefined;
    growPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
} & {
    shrink: "fit";
    shrinkThreshold?: number | Date | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: number | undefined;
    growPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: Date | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id"> | Timeline.Event.Model[];
    follow?: boolean | undefined;
    title?: string | undefined;
    running?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    eventSignalOptions?: import("../../../shared/libs/event").EventSignalOptions | undefined;
} & {
    duration: "justify";
    basis?: number | Date | undefined;
} & {
    grow: "justify";
} & {
    growThreshold?: number | undefined;
    growPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
} & {
    shrink: "justify";
} & {
    shrinkThreshold?: number | undefined;
    shrinkPolicy?: "time-slice" | "time-density" | "event-slice" | "event-density" | undefined;
}>, {
    follow: boolean;
    running: boolean;
    duration: number;
    basis: number;
    title: string;
}>>> & {
    "onUpdate:range"?: ((range: Timeline.Range.Model) => any) | undefined;
    "onUpdate:duration"?: ((duration: Date) => any) | undefined;
    "onUpdate:focused"?: ((events: import("../../../shared/types/map").Dictionary<Timeline.Event.Model, "id">) => any) | undefined;
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
