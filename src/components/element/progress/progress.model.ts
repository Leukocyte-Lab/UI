export namespace Progress {
  export type Variant = 'concave' | 'convex';

  export type Props = {
    value?: number;
    variant?: Variant;
    thickness?: number;
  };
}
