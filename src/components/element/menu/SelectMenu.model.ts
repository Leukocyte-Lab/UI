import type { ObjectLike } from '@/shared/types/object';

export namespace SelectMenu {
  export type Fields = {
    key: string;
    searchKeys?: string[];
    title?: string;
    content?: string;
    icon?: string;
    disabled?: string;
  };

  export type Props = {
    options: ObjectLike[];
    fields: Fields;
    modelValue?: ObjectLike | ObjectLike[];
    groupBy?: string;
    label?: string;
    multiple?: boolean;
    useSearch?: boolean;
  };
}
