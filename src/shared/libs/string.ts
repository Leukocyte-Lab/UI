export type StringProxy = StringConstructor & {
  toKebabCase(str: string): string;
  toUpperCase(str: string, mode?: 'every' | 'eachFirst' | 'onlyFirst'): string;
  toLocaleUpperCase(str: string, mode?: 'every' | 'eachFirst' | 'onlyFirst'): string;
  humanizeByte(bytes: number, base?: number): string;
};

const String$ = new Proxy<StringProxy>(String as StringProxy, {
  get(target, prop, receiver) {
    if (prop === 'toKebabCase')
      return (str: string): string =>
        str
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .toLowerCase();
    if (prop === 'toUpperCase' || prop === 'toLocaleUpperCase')
      return (str: string, mode: 'every' | 'eachFirst' | 'onlyFirst' = 'every'): string => {
        switch (mode) {
          case 'every':
            return str[prop]();
          case 'eachFirst':
            return str
              .split(' ')
              .map((word) => word.charAt(0)[prop]() + word.slice(1))
              .join(' ');
          case 'onlyFirst':
            return str.charAt(0)[prop]() + str.slice(1);
        }
      };

    if (prop === 'humanizeByte')
      return (bytes: number, base: number = 1024): string => {
        const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const index = Math.floor(Math.log(bytes) / Math.log(base));
        const value = bytes / Math.pow(base, index);

        return `${value.toFixed(2)} ${units[index]}`;
      };


    return Reflect.get(target, prop, receiver);
  }
});

export default String$;
