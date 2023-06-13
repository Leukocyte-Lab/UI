import type { ObjectLike } from '@/shared/types/object';
export declare namespace SelectMenu {
    type Fields = {
        key: string;
        title?: string;
        content?: string;
        icon?: string;
    };
    type Props = {
        options: ObjectLike<any>[];
        fields: Fields;
        modelValue?: ObjectLike<any> | ObjectLike<any>[];
        groupBy?: string;
        label?: string;
        multiple?: boolean;
    };
}
