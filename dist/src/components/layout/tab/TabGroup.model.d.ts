import type { Dictionary } from '../../../shared/types/map';
export declare namespace TabGroup {
    namespace Tab {
        interface Model {
            id: string;
            name: string;
            icon?: string;
            content?: string;
            disabled?: boolean;
        }
    }
    type Level = 'primary' | 'secondary';
    type Props = {
        tabs: Dictionary<Tab.Model, 'id'> | Tab.Model[];
        modelValue?: Tab.Model;
        level?: Level & {};
    };
}
