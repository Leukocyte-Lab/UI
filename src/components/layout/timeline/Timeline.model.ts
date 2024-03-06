import type { Dictionary } from '@/shared/types/map';
import type { EventSignalOptions } from '@/shared/libs/event';

export namespace Timeline {
  export namespace Range {
    export interface Model {
      start: Date;
      end?: Date;
    }
  }

  export namespace Event {
    export interface Model {
      id: string;
      range: Range.Model;
    }
  }

  export namespace Clip {
    export namespace Justify {
      export type Options = |
        (
          | {
            grow?: false;
          }
          | {
            grow: 'fill';
            growThreshold?: Date | number;
          }
          | (
            | {
              grow: 'justify';
            } & (
              | {
                growThreshold?: Date;
                growPolicy?: `time-${'slice' | 'density'}`
              }
              | {
                growThreshold?: number;
                growPolicy?: `${'time' | 'event'}-${'slice' | 'density'}`;
              }
            ))
        ) & (
          | {
            shrink?: false;
          }
          | {
            shrink: 'fit';
            shrinkThreshold?: Date | number;
          }
          | (
            | {
              shrink: 'justify';
            } & (
              | {
                shrinkThreshold?: Date;
                shrinkPolicy?: `time-${'slice' | 'density'}`
              }
              | {
                shrinkThreshold?: number;
                shrinkPolicy?: `${'time' | 'event'}-${'slice' | 'density'}`;
              }
            )
          )
        );
    }

    export type Options =
      | {
        duration: 'cover';
      } | {
        duration?: number | Date;
      }
      | ({
        duration: 'justify';
        basis?: number | Date;
      } & Justify.Options);
  }

  export type Props = {
    events: Event.Model[] | Dictionary<Event.Model, 'id'>;
    follow?: boolean;
    title?: string;
    running?: boolean;
    start?: Date;
    end?: Date;
    eventSignalOptions?: EventSignalOptions;
  } & Clip.Options;

  export type Emits = {
    (event: 'update:range', range: Range.Model): void;
    (event: 'update:duration', duration: Date): void;
    (event: 'update:focused', events: Dictionary<Event.Model, 'id'>): void;
    (event: 'update:focused.array', events: Event.Model[]): void;
  }
}
