import { fromPairs } from 'lodash-es';

import type { Vec2, Vec3, Vec4, Vector } from '@/shared/types/vector';

export type MathProxy = Math & {
  ARC_BASE: number;
  Vector: {
    delta: <T extends string, UseVector extends boolean = false>(
      a: Vector<T>,
      b: Vector<T>,
      useVector?: UseVector
    ) => UseVector extends true ? Vector<T> : number;
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
  avg: (...values: number[]) => number;
  geoavg: (...values: number[]) => number;
};

/*
 * NOTE
 * `ARC_BASE` is a magic number, to approximate the circle arc on Bézier curve.
 * comes from (4 / 3) * Math.tan(Math.PI / (2 * 4)),
 * which is approximately 0.5522847498307933984022516322796.
 * pre-calculated to enhance performance and ensure precision.
 **/
export const ARC_BASE = Number(0.5522847498307935);

const deltaAxis = <T extends string>(
  a: Vector<T>,
  b: Vector<T>,
  axis: keyof Vector<T>,
  useVector = false
): number => (useVector ? a[axis] - b[axis] : Math.abs(a[axis] - b[axis]));

const delta = <T extends string>(
  a: Vector<T>,
  b: Vector<T>,
  useVector = false
): number | Vector<T> => {
  const matrix = Object.keys(a).map((axis) => deltaAxis(a, b, axis as T, useVector));

  return useVector
    ? (fromPairs(matrix.map((value, index) => [Object.keys(a)[index], value])) as Vector<T>)
    : Math.pow(
      matrix.reduce((acc, curr) => acc + Math.pow(curr, matrix.length), 0),
      1 / matrix.length
    );
};

const VectorDeltaHandler = {
  get: (target: object, prop: string, receiver: unknown) => {
    if (/^ORIGIN_/.test(prop)) {
      return fromPairs(
        ['x', 'y', 'z', 'w'].slice(0, Number(prop.replace(/^ORIGIN_(\d)D/, '$1'))).map((axis) => [axis, 0]) as [string, number][]
      ) as Vector<string>;
    }

    if (/^delta/.test(prop)) {
      return <T extends string>(
        a: Vector<T>,
        b: Vector<T>,
        useVector?: boolean
      ): number | Vector<T> => {
        if (prop === 'delta') {
          return delta(a, b, useVector);
        }
        return Reflect.get(target, prop, receiver);
      };
    }

    if (prop === 'add') {
      return <T extends string>(a: Vector<T>, b: Vector<T>): Vector<T> =>
        fromPairs(
          Object.keys(a).map((axis) => [axis, a[axis as T] + b[axis as T]]) as [T, number][]
        ) as Vector<T>;
    }

    if (prop === 'minus') {
      return <T extends string>(a: Vector<T>, b: Vector<T>): Vector<T> =>
        fromPairs(
          Object.keys(a).map((axis) => [axis, a[axis as T] - b[axis as T]]) as [T, number][]
        ) as Vector<T>;
    }

    if (prop === 'times') {
      return <T extends string>(a: Vector<T>, b: number | Vector<T>): Vector<T> =>
        fromPairs(
          Object.keys(a).map((axis) => [
            axis,
            a[axis as T] * (Number(b) || (b as Vector<T>)[axis as T])
          ]) as [T, number][]
        ) as Vector<T>;
    }

    if (prop === 'divide') {
      return <T extends string>(a: Vector<T>, b: Vector<T>, scalar = false): Vector<T> =>
        fromPairs(
          Object.keys(a).map((axis) => [
            axis,
            ((num) => (scalar ? Math.abs(num) : num))(a[axis as T] / b[axis as T])
          ]) as [T, number][]
        ) as Vector<T>;
    }

    if (prop === 'clamp') {
      return <T extends string>(value: Vector<T>, min: Vector<T>, max: Vector<T>): Vector<T> =>
        fromPairs(
          Object.keys(value).map((axis) => [
            axis,
            Math$.clamp(value[axis as T], min[axis as T], max[axis as T])
          ]) as [T, number][]
        ) as Vector<T>;
    }

    if (prop === 'middle') {
      return <T extends string>(a: Vector<T>, b: Vector<T>): Vector<T> =>
        fromPairs(
          Object.keys(a).map((axis) => [axis, (a[axis as T] + b[axis as T]) / 2]) as [T, number][]
        ) as Vector<T>;
    }

    return Reflect.get(target, prop, receiver);
  }
};

const Math$: MathProxy = new Proxy<MathProxy>(Math as MathProxy, {
  get(target, prop, receiver) {
    if (prop === 'ARC_BASE') return ARC_BASE;
    if (prop === 'Vector') return new Proxy({}, VectorDeltaHandler);
    if (prop === 'deg') return (rad: number): number => rad * (180 / Math.PI);
    if (prop === 'rad') return (deg: number): number => deg * (Math.PI / 180);
    if (prop === 'gcd') return (a: number, b: number): number => (!b ? a : Math$.gcd(b, a % b));
    if (prop === 'lcm') return (a: number, b: number): number => (a * b) / Math$.gcd(a, b);
    if (prop === 'clamp')
      return (value: number, min: number, max: number): number =>
        Math.min(Math.max(value, min), max);
    if (prop === 'round')
      return (value: number, precision = 0): number =>
        Math.round(value * 10 ** precision) / 10 ** precision;
    if (prop === 'cot') return (x: number): number => 1 / Math.tan(x);
    if (prop === 'sec') return (x: number): number => 1 / Math.cos(x);
    if (prop === 'csc') return (x: number): number => 1 / Math.sin(x);
    if (prop === 'avg') return (...values: number[]): number => {
      if (values.length === 0) return NaN;
      return values.reduce((a, b) => a + b, 0) / values.length;
    };
    if (prop === 'geoavg') return (...values: number[]): number => {
      if (values.length === 0) return NaN;
      return Math.pow(values.reduce((a, b) => a * b, 1), 1 / values.length);
    };
    return Reflect.get(target, prop, receiver);
  }
});

export default Math$;
