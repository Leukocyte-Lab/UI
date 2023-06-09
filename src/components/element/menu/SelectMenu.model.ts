import type { ObjectLike } from '@/shared/types/object';

export namespace SelectMenu {
  export type Fields = {
    key: string;
    title?: string;
    content?: string;
    icon?: string;
  };
  export type Props = {
    options: ObjectLike<any>[];
    fields: Fields;
    modelValue?: ObjectLike<any> | ObjectLike<any>[];
    groupBy?: string;
    label?: string;
    multiple?: boolean;
  };
}
