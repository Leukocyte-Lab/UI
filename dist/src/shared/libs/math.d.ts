import type { Vec2, Vec3, Vec4, Vector } from '../../shared/types/vector';
export type MathProxy = Math & {
    ARC_BASE: number;
    Vector: {
        delta: <T extends string, UseVector extends boolean = false>(a: Vector<T>, b: Vector<T>, useVector?: UseVector) => UseVector extends true ? Vector<T> : number;
        add: <T extends string>(a: Vector<T>, b: Vector<T>) => Vector<T>;
        minus: <T extends string>(a: Vector<T>, b: Vector<T>) => Vector<T>;
        times: <T extends string>(a: Vector<T>, b: number | Vector<T>) => Vector<T>;
        divide: <T extends string>(a: Vector<T>, b: Vector<T>, scalar?: boolean) => Vector<T>;
        middle: <T extends string>(a: Vector<T>, b: Vector<T>) => Vector<T>;
        clamp: <T extends string>(value: Vector<T>, min: Vector<T>, max: Vector<T>) => Vector<T>;
        ORIGIN_2D: Vec2;
        ORIGIN_3D: Vec3;
        ORIGIN_4D: Vec4;
    };
    deg: (rad: number) => number;
    rad: (deg: number) => number;
    cot: (x: number) => number;
    sec: (x: number) => number;
    csc: (x: number) => number;
    gcd: (a: number, b: number) => number;
    lcm: (a: number, b: number) => number;
    clamp: (value: number, min: number, max: number) => number;
    round: (min: number, max: number) => number;
};
export declare const ARC_BASE: number;
declare const Math$: MathProxy;
export default Math$;
