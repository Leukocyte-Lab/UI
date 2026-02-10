import type { DataTable } from '@/components/layout/table/data-table/DataTable.model';

export namespace LargeDataTable {
  export type AcceptedTypes = DataTable.AcceptedTypes;

  export type ItemType<T extends DataTable.AcceptedTypes> = DataTable.ItemType<T>;

  export type KeyType<T extends DataTable.AcceptedTypes> = DataTable.KeyType<T>;

  export namespace ItemCarrier {
    export type Attrs = {
      height: number;
      top: number;
      bottom: number;
    }

    export type Status = {
      inited: boolean;
      loaded: boolean;
      measured: boolean;
      visible: boolean;
    }

    export type Payload = {
      index: number;
      attrs: Attrs;
      status: Status;
    };

    export interface Model<T extends DataTable.AcceptedTypes> {
      index: number;
      attrs: Attrs;
      status: Status;
      key: KeyType<T>;
      item: ItemType<T>;
    };
  }

  export namespace Component {
    export namespace Wrapper {
      export type Props<T extends DataTable.AcceptedTypes> = {
        totalItems?: number;
        visibleSize?: number;
        nested?: boolean;
        defaultRowHeight?: number;
        bufferSize?: number;
        lazyUpdate?: boolean;
      } & DataTable.Component.Wrapper.Props<T>;
  
      export type Emits<T extends DataTable.AcceptedTypes> = {} & DataTable.Component.Wrapper.Emits<T>;
      
      export type Slots<T extends DataTable.AcceptedTypes> = {} & DataTable.Component.Wrapper.Slots<T>;
    }
  }
}