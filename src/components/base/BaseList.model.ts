import type { ObjectLike } from '@/shared/types/object';

export namespace BaseList {
  export interface Props {
    items: ObjectLike<any>[];
    groupBy?: string;
  }
}
