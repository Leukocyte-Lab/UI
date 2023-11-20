export namespace DatetimePicker {
  export type BaseProps = {
    modelValue?: Date;
    type?: Type;
    enableTime?: boolean;
    weekStart?: WeekStart;
    start?: Date;
    end?: Date;
    lang?: Intl.LocalesArgument;
    minYear?: number;
    maxYear?: number;
  };

  export type Type = 'single' | 'multiple';
  export type WeekStart = 'Monday' | 'Sunday';

  export type DropdownActiveType = 'year' | 'month';

  export type DateEntity = {
    date: Date;
    currentDate: number;
    day: string;
    dayNumber: number;
    dayShort: string;
    year: number;
    yearShort: number;
    month: string;
    monthShort: string;
    monthNumber: number;
    timestamp: number;
    week: number;
  };

  export type SelectDate = {
    start?: DateEntity;
    end?: DateEntity;
  };

  export type Props = BaseProps;
}
