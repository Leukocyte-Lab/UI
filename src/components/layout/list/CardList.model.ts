import type { BaseList } from '@/components/base/BaseList.model';
import type { SelectMenu } from '@/components/element/menu/SelectMenu.model';
import type { ObjectLike } from '@/shared/types/object';
import type { ValueOf } from '@/shared/types/optional';

export namespace CardList {
  export type SortOption = {
    action: string;
    detail?: string;
    direction: 'asc' | 'desc';
    field: string;
    icon: string;
  };

  export type FilterOption =
    | {
        field: string;
        label: string;
        multi?: false;
        value?: ValueOf<ObjectLike>;
      }
    | {
        field: string;
        label: string;
        multi: true;
        options: string[];
        value?: ValueOf<ObjectLike>;
      };

  export type Props = BaseList.Props & {
    fields: SelectMenu.Fields;
    selected?: ObjectLike | null;
    modelValue?: string;
    sort?: SortOption;
    filter?: FilterOption[];
    sortOptions?: SortOption[];
    filterOptions?: FilterOption[];
  };
}
