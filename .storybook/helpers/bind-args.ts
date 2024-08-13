import String$ from '@/shared/libs/string';

const bindArgs = (args: object) =>
  Object.entries(args)
    .map(([key, value]) => [String$.toKebabCase(key), value])
    .map(
      ([key, value]) =>
        `${typeof value === 'string' ? `${key}="${value}"` : value === true ? `${key}` : `:${key}="${(value)}"`}`
    )
    .sort((a, b) =>
      !/^.+=".+"$/.test(a) && /^.+=".+"$/.test(b)
        ? 1
        : /^.+=".+"$/.test(a) && !/^.+=".+"$/.test(b)
          ? -1
          : a.localeCompare(b)
    )
    .join('\n');

export default bindArgs;
