import type { EventSignalOptions } from '@/shared/libs/event';

export namespace SwitchButton {
  export type Props = {
    modelValue?: boolean;
    disabled?: boolean;
    eventSignalOptions?: EventSignalOptions;
  };
}
