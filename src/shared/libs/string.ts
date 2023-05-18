export type StringProxy = StringConstructor & {
  toKebabCase(str: string): string;
};

const String$ = new Proxy<StringProxy>(String as StringProxy, {
  get(target, prop, receiver) {
    if (prop === 'toKebabCase')
      return (str: string): string =>
        str
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .toLowerCase();



    return Reflect.get(target, prop, receiver);
  }
});

export default String$;
