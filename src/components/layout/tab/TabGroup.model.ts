import type { Dictionary } from '@/shared/types/map';

export namespace TabGroup {
  export namespace Tab {
    export interface Model {
      id: string;
      name: string;
      icon?: string;
      content?: string;
    }
  }

  export type Level = 'primary' | 'secondary';

  export type Props = {
    tabs: Dictionary<Tab.Model, 'id'> | Tab.Model[];
    modelValue?: Tab.Model;
    level?: Level & {};
  }
}
