import type { DataTable } from '../../../../components/layout/table/data-table/DataTable.model';
import type { OnlyOneOf, OptionalObject } from '../../../../shared/types/optional';
export declare namespace LargeDataTable {
    type AcceptedTypes = DataTable.AcceptedTypes;
    type ItemType<T extends DataTable.AcceptedTypes> = DataTable.ItemType<T>;
    type KeyType<T extends DataTable.AcceptedTypes> = DataTable.KeyType<T>;
    namespace ItemCarrier {
        type Attrs = {
            height: number;
            top: number;
            bottom: number;
        };
        type Status = {
            inited: boolean;
            loaded: boolean;
            measured: boolean;
            visible: boolean;
        };
        type Payload = {
            index: number;
            attrs: Attrs;
            status: Status;
        };
        interface Model<T extends DataTable.AcceptedTypes> {
            index: number;
            attrs: Attrs;
            status: Status;
            key: KeyType<T>;
            item: ItemType<T>;
        }
    }
    type ItemCursor<T extends DataTable.AcceptedTypes> = OptionalObject<Pick<ItemCarrier.Model<T>, 'index' | 'key'>, 'key'>;
    type ItemCursorPayload<T extends DataTable.AcceptedTypes> = OnlyOneOf<{
        before: ItemCursor<T>;
        after: ItemCursor<T>;
        size: number;
    }, 'before' | 'after'>;
    namespace Component {
        namespace Wrapper {
            type Props<T extends DataTable.AcceptedTypes> = {
                totalItems?: number;
                visibleSize?: number;
                defaultRowHeight?: number;
                bufferSize?: number;
                lazyUpdate?: boolean;
            } & DataTable.Component.Wrapper.Props<T>;
            type Emits<T extends DataTable.AcceptedTypes> = {
                (e: 'request:items', payload: LargeDataTable.ItemCursorPayload<T>): void;
            } & DataTable.Component.Wrapper.Emits<T>;
            type Slots<T extends DataTable.AcceptedTypes> = {} & DataTable.Component.Wrapper.Slots<T>;
        }
    }
}
