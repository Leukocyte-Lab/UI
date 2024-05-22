import type { SelectMenu as SelectMenuNS } from '@/components/element/menu/SelectMenu.model';
import type { ButtonBox as ButtonBoxNS } from '@/components/element/button/ButtonBox.model';
import type { ObjectLike } from '@/shared/types/object';

export namespace DropDown {
  export type Props = {
    fields: SelectMenuNS.Props['fields'];
    modelValue?: ObjectLike | ObjectLike[];
    items?: ObjectLike[];
    label?: string;
    disabled?: boolean;
    level?: keyof typeof ButtonBoxNS.Level;
    size?: keyof typeof ButtonBoxNS.Size;
    variant?: keyof typeof ButtonBoxNS.Variant;
    multiple?: boolean;
    useSearch?: boolean;
    placeholder?: string;
    groupBy?: string;
  };
}
