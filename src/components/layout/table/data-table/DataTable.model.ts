import type { VNode } from 'vue';

import type { Search } from '@/shared/libs/search';
import type { GetterFn } from '@/shared/types/fn';
import type { IterableObjectLike, ObjectLike } from '@/shared/types/object';

export namespace DataTable {
  export namespace Component {
    export namespace Header {
      export type Props<T extends DataTable.AcceptedTypes> = {
        columns: Column<ItemType<T>>[];
        useSearch?: boolean;
        searchQuery?: string;
        overflowed?: boolean;
        result?: T;
        clearSelection?: () => void;
      };

      export type Slots<T extends DataTable.AcceptedTypes> = {
        row?: (props: Row.Props<ItemType<T>>) => VNode<ItemType<T>>;
        cell?: (props: Cell.Props<ItemType<T>>) => VNode<ItemType<T>>;
        toolbar?: () => VNode;
      };

      export type Emits<T extends DataTable.AcceptedTypes> = {
        (e: 'select:column', value: Column<ItemType<T>>): void;
      };
    }

    export namespace Wrapper {
      export type Props<T extends DataTable.AcceptedTypes> = {
        items: T;
        columns: Column<ItemType<T>>[];
        useSearch?: boolean;
        searchQuery?: string;
        result?: T;
        clearSelection?: () => void;
      };

      export type Slots<T extends DataTable.AcceptedTypes> = {
        row?: (props: Row.Props<ItemType<T>>) => VNode<ItemType<T>>;
        cell?: (props: Cell.Props<ItemType<T>>) => VNode<ItemType<T>>;
        placeholder: (props: Placeholder.Props) => VNode;
      };

      export type Emits<T extends DataTable.AcceptedTypes> = {
        (e: 'select:row', value: Row.Payload<ItemType<T>>): void;
        (e: 'overflowed', value: boolean): void;
      };
    }

    export namespace Footer {
      export type Props<T extends DataTable.AcceptedTypes> = {
        useSearch?: boolean;
        searchQuery?: string;
        result?: T;
        label?: string;
        clearSelection?: () => void;
      };
    }

    export namespace Placeholder {
      export type Type = 'no-data' | 'no-matched';
      export type Props = { type: Type; searchQuery?: string };
    }

    export namespace Row {
      export type Payload<T extends ItemType<DataTable.AcceptedTypes>> = {
        item: T;
        rowIndex: number;
        rowKey: symbol | string | number;
      };

      export type Props<T extends ItemType<DataTable.AcceptedTypes>> = {
        columns: Column<T>[];
        isSelected?: boolean;
      } & (
        | (Payload<T> & { isHeader?: false })
        | { item?: never; rowIndex?: never; rowKey?: never; isHeader: true }
      );

      export type Slots<T extends ItemType<DataTable.AcceptedTypes>> = {
        default?: (props: Cell.Props<T>) => VNode;
      };

      export type Emits<T extends ItemType<DataTable.AcceptedTypes>> = {
        (e: 'select:row', value: Payload<T>): void;
      };
    }

    export namespace Cell {
      export type Props<T extends ItemType<DataTable.AcceptedTypes>> = {
        value: ReturnType<DataTable.Getter<T>>;
        column: Column<T>;
      } & (
        | (Row.Payload<T> & {
            isHeader?: false;
            isSelected?: boolean;
          })
        | {
            isHeader: true;
            item?: never;
            rowIndex?: never;
            rowKey?: never;
            isSelected?: never;
          }
      );

      export type Slots<T extends ItemType<DataTable.AcceptedTypes>> = {
        default?: () => VNode;
      };

      export type Emits<T extends ItemType<DataTable.AcceptedTypes>> = {
        (e: 'select:row', value: Row.Payload<T>): void;
        (e: 'select:column', value: Column<T>): void;
      };
    }
  }

  export type AcceptedValue = IterableObjectLike | ObjectLike | string | number;
  export type AcceptedTypes = Iterable<AcceptedValue>;

  export type Getter<T extends ItemType<DataTable.AcceptedTypes>> = GetterFn<any, [T], true>;

  export type ItemType<T extends DataTable.AcceptedTypes> = T extends (infer U)[]
    ? U
    : T extends Set<infer V>
      ? V
      : T extends Map<infer K, infer W>
        ? W
        : unknown;

  export type Column<T extends ItemType<DataTable.AcceptedTypes>> = {
    key: T extends unknown ? string | number : keyof T | string | number;
    label: string;
    valuesGetter: DataTable.Getter<T>;
    width?: string | number;
  };

  export type Slots<T extends DataTable.AcceptedTypes> = {
    header?: (props: Component.Header.Props<T>) => VNode<T>;
    wrapper?: (props: Component.Wrapper.Props<T>) => VNode<T>;
    footer?: (props: Component.Footer.Props<T>) => VNode<T>;
    row?: (props: Component.Row.Props<ItemType<T>>) => VNode<ItemType<T>>;
    cell?: (props: Component.Cell.Props<ItemType<T>>) => VNode<ItemType<T>>;
    placeholder?: (props: Component.Placeholder.Props) => VNode;
  };

  export type Props<T extends DataTable.AcceptedTypes> = {
    items: T;
    columns: Column<ItemType<T>>[];
  } & ({ useSearch?: false } | ({ useSearch: true; query?: string } & Search.Options)) &
    ({ hideHeader?: false } | { hideHeader: true });

  export type Emits<T extends DataTable.AcceptedTypes> = {
    (e: 'select:item', value: ItemType<T>): void;
    (e: 'select:row', value: Component.Row.Payload<ItemType<T>>): void;
    (e: 'select:column', value: Column<ItemType<T>>): void;
  };
}
