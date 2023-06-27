import type { SelectMenu as SelectMenuNS } from '../../../components/element/menu/SelectMenu.model';
import type { ObjectLike } from '../../../shared/types/object';
export declare namespace SearchBar {
    type Props = {
        fields: SelectMenuNS.Props['fields'];
        modelValue?: string;
        items?: ObjectLike[];
        disabled?: boolean;
    };
}
