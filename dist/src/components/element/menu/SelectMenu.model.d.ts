import type { ObjectLike } from '../../../shared/types/object';
export declare namespace SelectMenu {
    type Fields = {
        key: string;
        searchKeys?: string[];
        title?: string;
        content?: string;
        icon?: string;
        disabled?: string;
    };
    type Props = {
        options: ObjectLike[];
        fields: Fields;
        modelValue?: ObjectLike | ObjectLike[];
        groupBy?: string;
        label?: string;
        multiple?: boolean;
        useSearch?: boolean;
    };
}
