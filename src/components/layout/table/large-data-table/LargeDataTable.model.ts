import type { DataTable } from '@/components/layout/table/data-table/DataTable.model';
import type { OnlyOneOf, OptionalObject } from '@/shared/types/optional';

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

  export type ItemCursor<T extends DataTable.AcceptedTypes> = OptionalObject<Pick<ItemCarrier.Model<T>, 'index' | 'key'>, 'key'>;
  
  export type ItemCursorPayload<T extends DataTable.AcceptedTypes> = OnlyOneOf<{ before: ItemCursor<T>; after: ItemCursor<T>; size: number }, 'before' | 'after'>;

  export namespace Component {
    export namespace Wrapper {
      export type Props<T extends DataTable.AcceptedTypes> = {
        totalItems?: number;
        visibleSize?: number;
        defaultRowHeight?: number;
        bufferSize?: number;
        lazyUpdate?: boolean;
        variantHeightMode?: boolean;
      } & DataTable.Component.Wrapper.Props<T>;

  
      export type Emits<T extends DataTable.AcceptedTypes> = {
        (e: 'request:items', payload: LargeDataTable.ItemCursorPayload<T>): void;
      } & DataTable.Component.Wrapper.Emits<T>;
      
      export type Slots<T extends DataTable.AcceptedTypes> = {} & DataTable.Component.Wrapper.Slots<T>;
    }
  }
}