export type Vector<K extends string> = Record<K, number>;
export type Vec2 = Vector<'x' | 'y'>;
export type Vec3 = Vector<'x' | 'y' | 'z'>;
export type Vec4 = Vector<'x' | 'y' | 'z' | 'w'>;
