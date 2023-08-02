export type StringProxy = StringConstructor & {
    toKebabCase(str: string): string;
};
declare const String$: StringProxy;
export default String$;
