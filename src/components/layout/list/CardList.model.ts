import type { BaseList } from '@/components/base/BaseList.model';
import type { SelectMenu } from '@/components/element/menu/SelectMenu.model';
import type { ObjectLike, ValueOf } from '@/shared/types/object';

export namespace CardList {
  export type SortOption = {
    action: string;
    detail?: string;
    direction: 'asc' | 'desc';
    field: string;
    icon: string;
  };

  export type FilterOption = {
    field: string;
    label: string;
    value?: ValueOf<ObjectLike>;
  };

  export type Props = BaseList.Props & {
    fields: SelectMenu.Fields;
    selected?: ObjectLike;
    modelValue?: string;
    sort?: SortOption;
    filter?: FilterOption[];
    sortOptions?: SortOption[];
    filterOptions?: FilterOption[];
  };
}
