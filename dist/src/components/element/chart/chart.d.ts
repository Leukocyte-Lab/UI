import type { MaybeRef } from 'vue';
import type { Chart } from './chart.model';
import type { ObjectLike } from '../../../shared/types/object';
export declare const useChart: ({ type, axises, data }: {
    type: MaybeRef<Chart.Type>;
    axises: MaybeRef<Chart.Props["axises"]>;
    data: MaybeRef<ObjectLike[] | ObjectLike>;
}) => {
    datasets: Readonly<import("vue").Ref<{
        label?: string | undefined;
        series: {
            data: Record<string, Chart.DataType>;
            x: {
                normalized: number;
                value?: Chart.DataType | undefined;
            };
            y: {
                normalized: number;
                value?: Chart.DataType | undefined;
            };
            P?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            B?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            D?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            C?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            M?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            $?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            a?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            h?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            b?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            i?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            p?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            q?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            s?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            u?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            g?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            0?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            1?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            2?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            3?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            4?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            5?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            6?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            7?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            8?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            d?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            z?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            w?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            E?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "-"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "!"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "\""?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "#"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "%"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "&"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "'"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "("?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            ")"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "*"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "+"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            ","?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "."?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "/"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            9?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            ":"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            ";"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "<"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "="?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            ">"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "?"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "@"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            A?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            F?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            G?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            H?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            I?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            J?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            K?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            L?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            N?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            O?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            Q?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            R?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            S?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            T?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            U?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            V?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            W?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            X?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            Y?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            Z?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "["?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "\\"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "]"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "^"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            _?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "`"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            c?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            e?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            f?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            j?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            k?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            l?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            m?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            n?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            o?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            r?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            t?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            v?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "{"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "|"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "}"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
            "~"?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            } | undefined;
        }[];
    }[]>>;
    axises: Readonly<import("vue").Ref<{
        x: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        };
        y: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        };
        P?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        B?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        D?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        C?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        M?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        $?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        a?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        h?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        b?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        i?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        p?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        q?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        s?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        u?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        g?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        0?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        1?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        2?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        3?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        4?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        5?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        6?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        7?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        8?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        d?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        z?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        w?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        E?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "-"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "!"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "\""?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "#"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "%"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "&"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "'"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "("?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        ")"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "*"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "+"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        ","?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "."?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "/"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        9?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        ":"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        ";"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "<"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "="?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        ">"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "?"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "@"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        A?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        F?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        G?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        H?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        I?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        J?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        K?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        L?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        N?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        O?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        Q?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        R?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        S?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        T?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        U?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        V?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        W?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        X?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        Y?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        Z?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "["?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "\\"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "]"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "^"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        _?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "`"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        c?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        e?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        f?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        j?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        k?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        l?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        m?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        n?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        o?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        r?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        t?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        v?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "{"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "|"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "}"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
        "~"?: {
            label: string;
            min?: (number | "auto") | undefined;
            max?: (number | "auto") | undefined;
            step?: number | undefined;
            type: Chart.DataTypeSet;
            accessor?: string | undefined;
            selector?: string | undefined;
            options?: {
                offset: {
                    x: number;
                    y: number;
                };
                title?: string | undefined;
                curve?: ("smooth" | "straight") | undefined;
                round?: boolean | undefined;
                radius?: number | undefined;
                grid?: ("x" | "y" | "xy") | undefined;
                color?: string | undefined;
            } | undefined;
            sort?: ("asc" | "desc") | undefined;
            metrics?: {
                normalized: number;
                value?: Chart.DataType | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
};
