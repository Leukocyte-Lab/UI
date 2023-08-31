import type { BaseList } from '../../../components/base/BaseList.model';
import type { SelectMenu } from '../../../components/element/menu/SelectMenu.model';
import type { ObjectLike } from '../../../shared/types/object';
import type { ValueOf } from '../../../shared/types/optional';
export declare namespace CardList {
    type SortOption = {
        action: string;
        detail?: string;
        direction: 'asc' | 'desc';
        field: string;
        icon: string;
    };
    type FilterOption = {
        field: string;
        label: string;
        value?: ValueOf<ObjectLike>;
    };
    type Props = BaseList.Props & {
        fields: SelectMenu.Fields;
        selected?: ObjectLike | null;
        modelValue?: string;
        sort?: SortOption;
        filter?: FilterOption[];
        sortOptions?: SortOption[];
        filterOptions?: FilterOption[];
    };
}
