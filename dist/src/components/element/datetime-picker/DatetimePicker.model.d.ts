export declare namespace DatetimePicker {
    type BaseProps = {
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
    type Type = 'single' | 'multiple';
    type WeekStart = 'Monday' | 'Sunday';
    type DropdownActiveType = 'year' | 'month';
    type DateEntity = {
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
    type SelectDate = {
        start?: DateEntity;
        end?: DateEntity;
    };
    type Props = BaseProps;
}
