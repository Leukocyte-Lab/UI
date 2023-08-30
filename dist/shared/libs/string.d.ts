export type StringProxy = StringConstructor & {
    toKebabCase(str: string): string;
    toUpperCase(str: string, mode?: 'every' | 'eachFirst' | 'onlyFirst'): string;
    toLocaleUpperCase(str: string, mode?: 'every' | 'eachFirst' | 'onlyFirst'): string;
    humanizeByte(bytes: number, base?: number): string;
};
declare const String$: StringProxy;
export default String$;
