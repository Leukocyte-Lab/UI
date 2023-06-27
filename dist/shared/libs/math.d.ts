import type { Vector } from '../../shared/types/vector';
export type MathProxy = Math & {
    ARC_BASE: number;
    Vector: {
        delta: <T extends string>(a: Vector<T>, b: Vector<T>, useVector?: boolean) => number | Vector<T>;
        add: <T extends string>(a: Vector<T>, b: Vector<T>) => Vector<T>;
        minus: <T extends string>(a: Vector<T>, b: Vector<T>) => Vector<T>;
    };
    deg: (rad: number) => number;
    rad: (deg: number) => number;
    gcd: (a: number, b: number) => number;
    lcm: (a: number, b: number) => number;
    clamp: (value: number, min: number, max: number) => number;
    round: (min: number, max: number) => number;
};
export declare const ARC_BASE: number;
declare const Math$: MathProxy;
export default Math$;
