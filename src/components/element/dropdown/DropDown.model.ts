import type { SelectMenu as SelectMenuNS } from '@/components/element/menu/SelectMenu.model';
import type { ButtonBox as ButtonBoxNS } from '@/components/element/button/ButtonBox.model';
import type { ObjectLike } from '@/shared/types/object';

export namespace DropDown {
  export type Props = {
    fields: SelectMenuNS.Props['fields'];
    modelValue?: ObjectLike<any>;
    items?: ObjectLike<any>[];
    disabled?: boolean;
    level?: ButtonBoxNS.Level;
    size?: ButtonBoxNS.Size;
  };
}
