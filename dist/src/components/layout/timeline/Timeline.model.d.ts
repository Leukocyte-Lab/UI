import type { Dictionary } from '../../../shared/types/map';
import type { EventSignalOptions } from '../../../shared/libs/event';
export declare namespace Timeline {
    namespace Range {
        interface Model {
            start: Date;
            end?: Date;
        }
    }
    namespace Event {
        interface Model {
            id: string;
            range: Range.Model;
        }
    }
    namespace Clip {
        namespace Justify {
            type Options = ({
                grow?: false;
            } | {
                grow: 'fill';
                growThreshold?: Date | number;
            } | ({
                grow: 'justify';
            } & ({
                growThreshold?: Date;
                growPolicy?: `time-${'slice' | 'density'}`;
            } | {
                growThreshold?: number;
                growPolicy?: `${'time' | 'event'}-${'slice' | 'density'}`;
            }))) & ({
                shrink?: false;
            } | {
                shrink: 'fit';
                shrinkThreshold?: Date | number;
            } | ({
                shrink: 'justify';
            } & ({
                shrinkThreshold?: Date;
                shrinkPolicy?: `time-${'slice' | 'density'}`;
            } | {
                shrinkThreshold?: number;
                shrinkPolicy?: `${'time' | 'event'}-${'slice' | 'density'}`;
            })));
        }
        type Options = {
            duration: 'cover';
        } | {
            duration?: number | Date;
        } | ({
            duration: 'justify';
            basis?: number | Date;
        } & Justify.Options);
    }
    type Props = {
        events: Event.Model[] | Dictionary<Event.Model, 'id'>;
        follow?: boolean;
        title?: string;
        running?: boolean;
        start?: Date;
        end?: Date;
        eventSignalOptions?: EventSignalOptions;
    } & Clip.Options;
    type Emits = {
        (event: 'update:range', range: Range.Model, duration: Date): void;
    };
}
