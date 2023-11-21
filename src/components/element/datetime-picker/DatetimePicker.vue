<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Icon } from '@iconify/vue/offline';

import { parser } from '@/shared/libs/parser';

import CardBox from '@/components/element/card/CardBox.vue';
import ButtonBox from '@/components/element/button/ButtonBox.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import type { DatetimePicker } from './DatetimePicker.model';

const props = withDefaults(defineProps<DatetimePicker.Props>(), {
  type: 'single',
  enableTime: true,
  weekStart: 'Sunday',
  minYear: 1900,
  maxYear: 2100,
  lang: 'en'
});

const emits = defineEmits<{
  (e: 'update:modelValue', value: Date): void;
  (e: 'update:start', value: Date): void;
  (e: 'update:end', value: Date): void;
  (e: 'confirm'): void;
}>();

const selectDate = ref<DatetimePicker.SelectDate>({
  start: undefined,
  end: undefined
});

const tempDate = ref<DatetimePicker.SelectDate>({
  start: undefined,
  end: undefined
});

const selectTime = ref('');

const dropdownActiveType = ref<DatetimePicker.DropdownActiveType>();

const toggleDropdown = (value: DatetimePicker.DropdownActiveType) => {
  dropdownActiveType.value === value
    ? (dropdownActiveType.value = undefined)
    : (dropdownActiveType.value = value);
};

const selectYear = ref();

const selectMonth = ref();

const handleConfirmSelectYearAndMonth = () => {
  if (dropdownActiveType.value === 'year') {
    calenderEntity.value.goToDate(calenderEntity.value.month.monthNumber, selectYear.value);
  } else {
    calenderEntity.value.goToDate(selectMonth.value, calenderEntity.value.year);
  }

  dropdownActiveType.value = undefined;
};

const handleCancelSelectyearAndMonth = () => {
  selectYear.value = undefined;
  selectMonth.value = undefined;
  dropdownActiveType.value = undefined;
};

const getWeekNumber = (date: Date) => {
  const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfTheYear.getTime()) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDate() + 1) / 7);
};

const initDate = (date: Date = new Date()) => {
  const currentDate = date.getDate();

  const day = date.toLocaleString(props.lang, { weekday: 'long' });

  const dayNumber = date.getDay() + (props.weekStart === 'Monday' ? 0 : 1);

  const dayShort = date.toLocaleString(props.lang, { weekday: 'short' });

  const year = date.getFullYear();

  selectYear.value = year;

  const yearShort = Number(date.toLocaleString(props.lang, { year: '2-digit' }));

  const month = date.toLocaleString(props.lang, { month: 'long' });

  const monthShort = date.toLocaleString(props.lang, { month: 'short' });

  const monthNumber = Number(date.toLocaleString('en', { month: '2-digit' }));

  selectMonth.value = monthNumber;

  const timestamp = date.getTime();

  const week = getWeekNumber(date);

  return {
    date,
    currentDate,
    day,
    dayNumber,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    timestamp,
    week
  };
};

const initMonth = (date: Date = new Date()) => {
  const day = initDate(date);

  const monthsSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const { monthNumber, year, monthShort, month } = day;

  let numberOfDays = monthsSize[monthNumber - 1];

  if (monthNumber === 2) {
    numberOfDays += isLeapYear(year) ? 1 : 0;
  }

  const getDay = (day: number) => initDate(new Date(year, monthNumber - 1, day));

  return {
    month,
    monthShort,
    monthNumber,
    year,
    numberOfDays,
    getDay
  };
};

const initCalender = () => {
  const today = initDate(undefined);

  const { year, monthNumber } = today;

  const month = initMonth(new Date(year, monthNumber - 1));
  const months = Array.from({ length: 12 }, (_, month) => {
    return initMonth(new Date(year, month));
  });

  const weekDays: string[] = Array.from({ length: 7 });

  weekDays.forEach((_, i) => {
    const day = month.getDay(i - (props.weekStart === 'Monday' ? 1 : 2));

    if (!weekDays.includes(day.dayShort)) {
      weekDays[i] = day.dayShort;
    }
  });

  const getPreviousMonth = () => {
    if (calenderEntity.value.month.monthNumber === 1) {
      return initMonth(new Date(calenderEntity.value.year - 1, 11));
    }
    return initMonth(
      new Date(calenderEntity.value.year, calenderEntity.value.month.monthNumber - 2)
    );
  };

  const getNextMonth = () => {
    if (calenderEntity.value.month.monthNumber === 12) {
      return initMonth(new Date(calenderEntity.value.year + 1, 0));
    }
    return initMonth(new Date(calenderEntity.value.year, calenderEntity.value.month.monthNumber));
  };

  const goToDate = (monthNumber: number, propsYear: number) => {
    calenderEntity.value.month = initMonth(new Date(propsYear, monthNumber - 1));
    calenderEntity.value.year = propsYear;
  };

  const goToNextYear = () => {
    calenderEntity.value.year += 1;
    calenderEntity.value.month = initMonth(new Date(year, 0));
  };

  const goToPreviousYear = () => {
    calenderEntity.value.year -= 1;
    calenderEntity.value.month = initMonth(new Date(year, 11));
  };

  const goToNextMonth = () => {
    if (calenderEntity.value.month.monthNumber === 12) {
      return goToNextYear();
    }
    calenderEntity.value.month = initMonth(
      new Date(calenderEntity.value.year, calenderEntity.value.month.monthNumber)
    );
  };

  const goToPreviousMonth = () => {
    if (calenderEntity.value.month.monthNumber === 1) {
      return goToPreviousYear();
    }
    calenderEntity.value.month = initMonth(
      new Date(calenderEntity.value.year, calenderEntity.value.month.monthNumber - 2)
    );
  };

  const getMonthDays = () => {
    const firstDayOfTheMonth = calenderEntity.value.month.getDay(1);
    const prevMonth = getPreviousMonth();
    const nextMonth = getNextMonth();
    const totalLastMonthFinalDays = firstDayOfTheMonth.dayNumber - 1;
    const totalDays = calenderEntity.value.month.numberOfDays + totalLastMonthFinalDays;
    const monthList = Array.from({ length: totalDays });

    for (let i = totalLastMonthFinalDays; i < totalDays; i++) {
      monthList[i] = calenderEntity.value.month.getDay(i + 1 - totalLastMonthFinalDays);
    }

    for (let i = 0; i < totalLastMonthFinalDays; i++) {
      const inverted = totalLastMonthFinalDays - (i + 1);
      monthList[i] = prevMonth.getDay(prevMonth.numberOfDays - inverted);
    }

    const remainingDays = totalDays % 7 > 0 ? 7 - (totalDays % 7) : 0;

    for (let i = 0; i < remainingDays; i++) {
      monthList[totalDays + i] = nextMonth.getDay(i + 1);
    }

    return monthList as DatetimePicker.DateEntity[];
  };

  const getYears = () => {
    return Array.from(
      { length: props.maxYear - props.minYear + 1 },
      (_, index) => props.minYear + index
    );
  };

  const years = getYears();

  return {
    today,
    year,
    years,
    month,
    months,
    weekDays,
    goToNextMonth,
    goToPreviousMonth,
    getMonthDays,
    goToDate
  };
};

const isLeapYear = (year: number) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);

const monthDays = computed(() => calenderEntity.value.getMonthDays());

const calenderEntity = ref(initCalender());

const isEqual = (firstDay: DatetimePicker.DateEntity, secondDay: DatetimePicker.DateEntity) =>
  firstDay?.currentDate === secondDay?.currentDate &&
  firstDay?.monthNumber === secondDay?.monthNumber &&
  firstDay?.year === secondDay?.year;

const isBetween = (day: DatetimePicker.DateEntity, selectDate: DatetimePicker.SelectDate) =>
  selectDate.start &&
  selectDate.end &&
  day.timestamp > selectDate.start?.timestamp &&
  day.timestamp < selectDate.end?.timestamp;

const handleClickDayButton = (day: DatetimePicker.DateEntity) => {
  if (props.type === 'single') {
    selectDate.value.start = day;
    emits('update:modelValue', day.date);
    emits('update:start', new Date(day.year, day.monthNumber - 1, day.currentDate, 0, 0));
    emits('update:end', new Date(day.year, day.monthNumber - 1, day.currentDate, 23, 59));
  } else if (selectDate.value.start && day?.timestamp > selectDate.value.start?.timestamp) {
    selectDate.value.end = day;
    tempDate.value.end = day;
    emits('update:end', day.date);
  } else {
    selectDate.value.start = day;
    tempDate.value.start = day;
    emits('update:start', day.date);
  }
  calenderEntity.value.goToDate(day?.monthNumber, day?.year);
};

const handleConfirm = () => {
  emits('confirm');
};

const handleHoverDayButton = (day: DatetimePicker.DateEntity) => {
  if (props.type === 'single' || !selectDate.value.start) return;

  if (day?.timestamp > selectDate.value.start?.timestamp) {
    selectDate.value.end = day;
  } else if (day?.timestamp < selectDate.value.start?.timestamp && !selectDate.value.end) {
    selectDate.value.end = selectDate.value.start;
    selectDate.value.start = day;
  } else {
    selectDate.value.start = day;
  }
};

const handleLeaveDayButton = (day: DatetimePicker.DateEntity) => {
  if (props.type === 'single' || !selectDate.value.start) return;
  if (selectDate.value.end?.timestamp === day.timestamp) {
    selectDate.value.end = tempDate.value.end;
  } else if (selectDate.value.start?.timestamp === day.timestamp) {
    selectDate.value.start = tempDate.value.start;
  }
};

watch(
  () => props.start,
  () => {
    if (props.start) {
      selectDate.value.start = initDate(props.start);
      tempDate.value.start = initDate(props.start);
    }
  },
  {
    immediate: true
  }
);

watch(
  () => props.end,
  () => {
    if (props.end) {
      selectDate.value.end = initDate(props.end);
      tempDate.value.end = initDate(props.end);
    }
  },
  {
    immediate: true
  }
);

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      selectDate.value.start = initDate(props.modelValue);
      let hours: string | number = props.modelValue.getHours();
      let minutes: string | number = props.modelValue.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (hours < 10) {
        hours = `0${hours}`;
      }
      selectTime.value = `${hours}:${minutes}`;
    }
  },
  {
    immediate: true
  }
);
</script>

<template>
  <CardBox
    :class="[$style['date-picker'], $style.wrapper, $style.flex, $style.vertical]"
    :radius="'var(--agh-ref-border-radius-500)'"
  >
    <header :class="[$style.wrapper, $style.flex, $style.horizontal]">
      <ButtonBox
        :class="$style['button']"
        icon="fa6-solid:angle-left"
        variant="text"
        @click="calenderEntity.goToPreviousMonth"
      ></ButtonBox>
      <div :class="[$style['label'], $style.wrapper, $style.flex, $style.horizontal]">
        <div :class="[$style['item'], $style.wrapper, $style.flex, $style.horizontal]">
          <ButtonBox
            :class="[$style['select'], dropdownActiveType === 'year' && $style['selected']]"
            variant="text"
            :label="String(calenderEntity.year)"
            @click="toggleDropdown('year')"
          ></ButtonBox>
          <Icon
            :class="[$style['icon'], dropdownActiveType === 'year' && $style['selected']]"
            :icon="`fa6-solid:angle-${dropdownActiveType === 'year' ? 'up' : 'down'}`"
          ></Icon>
        </div>

        <div :class="[$style['item'], $style.wrapper, $style.flex, $style.horizontal]">
          <ButtonBox
            :class="[$style['select'], dropdownActiveType === 'month' && $style['selected']]"
            variant="text"
            :label="calenderEntity.month.monthShort"
            @click="toggleDropdown('month')"
          ></ButtonBox>
          <Icon
            :class="[$style['icon'], dropdownActiveType === 'month' && $style['selected']]"
            :icon="`fa6-solid:angle-${dropdownActiveType === 'month' ? 'up' : 'down'}`"
          ></Icon>
        </div>
      </div>

      <ButtonBox
        icon="fa6-solid:angle-right"
        :class="$style['button']"
        variant="text"
        @click="calenderEntity.goToNextMonth"
      ></ButtonBox>
    </header>

    <template v-if="!dropdownActiveType">
      <div>
        <div :class="$style['week']">
          <p v-for="item in calenderEntity.weekDays" :key="item">{{ item }}</p>
        </div>
        <div :class="$style['days-grid']">
          <template v-for="day in monthDays" :key="day?.timestamp">
            <div
              @mouseover="() => handleHoverDayButton(day)"
              @mouseout="() => handleLeaveDayButton(day)"
              :class="[
                $style['item'],
                $style.wrapper,
                $style.flex,
                $style.vertical,
                selectDate.start &&
                  selectDate.end &&
                  selectDate.start?.timestamp !== selectDate.end.timestamp &&
                  isEqual(day, selectDate.start) &&
                  $style['item-start'],
                selectDate.end &&
                  selectDate.start?.timestamp !== selectDate.end.timestamp &&
                  isEqual(day, selectDate.end) &&
                  $style['item-end'],
                isBetween(day, selectDate) && $style['item-duration']
              ]"
            >
              <ButtonBox
                :class="[
                  $style['day'],
                  day.monthNumber === calenderEntity.month.monthNumber && $style['day-current'],
                  selectDate.start && isEqual(day, selectDate.start) && $style['day-start'],
                  selectDate.end && isEqual(day, selectDate.end) && $style['day-end'],
                  selectDate.start &&
                    isEqual(day, selectDate.start) &&
                    type === 'multiple' &&
                    $style['day-start'],
                  isEqual(day, initDate()) && $style['day-today']
                ]"
                :label="String(day?.currentDate)"
                variant="text"
                @click="() => handleClickDayButton(day)"
              ></ButtonBox>
            </div>
          </template>
        </div>
      </div>
      <div
        v-if="enableTime && type === 'single'"
        :class="[$style['time'], $style.wrapper, $style.flex, $style.horizontal]"
      >
        <div :class="[$style['label-container'], $style.wrapper, $style.flex, $style.horizontal]">
          <p :class="$style['label']">Time</p>
          <p :class="$style['description']">24-hour format</p>
        </div>

        <TextField
          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
          v-model="selectTime"
          placeholder="Enter Time"
          :class="$style['input']"
        />
      </div>
      <div :class="$style['time-multiple']" v-else-if="type === 'multiple' && selectDate.start">
        <p :class="$style['description']">
          {{
            `Selected Date: ${parser(
              { start: selectDate.start?.date },
              '\{\{ start | date : yyyy/MM/dd \}\}'
            )}${
              selectDate.end
                ? ` - ${parser({ end: selectDate.end?.date }, '\{\{ end | date : yyyy/MM/dd \}\}')}`
                : ''
            }`
          }}
        </p>
      </div>
    </template>

    <template v-else-if="dropdownActiveType === 'month'">
      <div :class="[$style['month-list'], $style.wrapper, $style.flex, $style.vertical]">
        <ButtonBox
          v-for="item in calenderEntity.months"
          :class="[
            $style['item'],
            $style.wrapper,
            $style.flex,
            $style.horizontal,
            item.monthNumber === selectMonth && $style['item-active']
          ]"
          :key="item.month"
          variant="text"
          :label="item.month"
          @click="selectMonth = item.monthNumber"
        ></ButtonBox>
      </div>
    </template>

    <template v-else-if="dropdownActiveType === 'year'">
      <div :class="$style['years-grid']">
        <div
          v-for="year in calenderEntity.years"
          :key="year"
          :class="[$style['container'], $style.wrapper, $style.flex, $style.horizontal]"
        >
          <ButtonBox
            :class="[
              $style['item'],
              $style.wrapper,
              $style.flex,
              $style.horizontal,
              year === selectYear && $style['item-active']
            ]"
            variant="text"
            :label="String(year)"
            @click="selectYear = year"
          ></ButtonBox>
        </div>
      </div>
    </template>

    <div
      v-if="!dropdownActiveType"
      :class="[$style['footer'], $style.wrapper, $style.flex, $style.horizontal]"
    >
      <ButtonBox
        :class="$style['button']"
        variant="rect"
        label="Confirm"
        @click="handleConfirm"
      ></ButtonBox>
    </div>
    <div v-else :class="[$style['footer'], $style.wrapper, $style.flex, $style.horizontal]">
      <ButtonBox
        variant="rect"
        level="secondary"
        :class="$style['button']"
        label="Cancel"
        @click="handleCancelSelectyearAndMonth"
      ></ButtonBox>
      <ButtonBox
        variant="rect"
        :class="$style['button']"
        label="Confirm"
        @click="handleConfirmSelectYearAndMonth"
      ></ButtonBox>
    </div>
  </CardBox>
</template>

<style lang="scss" module scoped>
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.date-picker {
  background-color: var(--agh-ref-color-white-gradient-500);
  padding: var(--agh-ref-spacing-500);
  gap: var(--agh-ref-spacing-200);
  position: relative;
  z-index: 0;

  header {
    align-items: center;
    justify-content: space-between;
    .button {
      color: var(--agh-ref-color-grayscale-600);
      border: var(--agh-ref-color-grayscale-250) solid var(--agh-ref-border-width-50);
      width: var(--agh-ref-icon-size-500);
      height: var(--agh-ref-icon-size-500);
      border-radius: var(--agh-ref-border-radius-300);
      font-size: var(--agh-ref-icon-size-200);
    }
    .label {
      align-items: center;
      gap: var(--agh-ref-spacing-500);
      color: var(--agh-ref-color-grayscale-1000);
      font: var(--agh-sys-typeface-label-hl-large);
      .item {
        align-items: center;
        gap: var(--agh-ref-spacing-100);
        .select {
          color: var(--agh-ref-color-grayscale-1000);
          font: var(--agh-sys-typeface-label-hl-large);
        }

        .selected {
          color: var(--agh-ref-color-cyan-600);
        }

        .icon {
          font-size: var(--agh-ref-icon-size-100);
        }
      }
    }
  }

  .week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    p {
      text-align: center;
      color: var(--agh-ref-color-grayscale-500);
      font: var(--agh-sys-typeface-label-default-large);
      padding: var(--agh-ref-spacing-200);
    }
  }
  .days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    .item {
      place-items: center;
      pointer-events: auto;

      &-duration {
        &::before {
          content: '';
          position: absolute;
          background-color: var(--agh-ref-color-cyan-100);
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      }

      &-start {
        &::before {
          content: '';
          position: absolute;
          background-color: var(--agh-ref-color-cyan-100);
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          z-index: -1;
        }
      }
      &-end {
        &::before {
          content: '';
          position: absolute;
          background-color: var(--agh-ref-color-cyan-100);
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          z-index: -1;
        }
      }

      .day {
        width: var(--agh-sys-button-square-width-medium);
        height: var(--agh-sys-button-square-height-medium);
        color: var(--agh-ref-color-grayscale-400);
        font: var(--agh-sys-typeface-label-default-large);
        border-radius: var(--agh-ref-border-radius-900);

        &-current {
          color: var(--agh-ref-color-grayscale-900);
        }

        &-today {
          border: var(--agh-ref-color-cyan-500) solid var(--agh-ref-border-width-50);
          background-color: var(--agh-ref-color-grayscale-100);
        }

        &:hover {
          color: var(--agh-ref-color-grayscale-100);
          background-color: var(--agh-ref-color-cyan-400);
        }

        &-selected {
          color: var(--agh-ref-color-grayscale-100);
          background-color: var(--agh-ref-color-cyan-500);
        }
        &-start {
          color: var(--agh-ref-color-grayscale-100);
          background-color: var(--agh-ref-color-cyan-500);
        }

        &-end {
          color: var(--agh-ref-color-grayscale-100);
          background-color: var(--agh-ref-color-cyan-500);
        }
      }
    }
  }

  .month-list {
    gap: var(--agh-ref-spacing-200);
    height: var(--agh-sys-gadget-datepicker-year-height);
    width: var(--agh-sys-gadget-datepicker-year-width);
    overflow: auto;

    .item {
      padding: var(--agh-ref-spacing-200);
      border-radius: var(--agh-ref-border-radius-400);
      color: var(--agh-ref-color-grayscale-1000);
      font: var(--agh-sys-typeface-label-hl-medium);
      border: transparent solid var(--agh-ref-border-width-50);
      width: 100%;
      justify-content: start;

      &:hover {
        border-color: var(--agh-ref-color-blue-300);
        background-color: var(--agh-sys-color-blue-surface-dim);
      }
      &-active {
        border-color: var(--agh-ref-color-blue-300);
        background-color: var(--agh-sys-color-blue-surface-dim);
      }
    }
  }
  .years-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: auto;
    height: var(--agh-sys-gadget-datepicker-year-height);
    width: var(--agh-sys-gadget-datepicker-year-width);
    .container {
      justify-content: center;

      width: 100%;
      .item {
        border-radius: var(--agh-ref-border-radius-900);
        padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-300);
        color: var(--agh-ref-color-grayscale-900);
        font: var(--agh-sys-typeface-label-default-large);
        &:hover {
          color: var(--agh-ref-color-grayscale-100);
          background-color: var(--agh-ref-color-cyan-500);
        }
        &-active {
          color: var(--agh-ref-color-grayscale-100);
          background-color: var(--agh-ref-color-cyan-500);
        }
      }
    }
  }
  .time {
    align-items: center;
    justify-content: space-between;
    margin-top: var(--agh-ref-spacing-200);
    .label {
      color: var(--agh-ref-color-grayscale-900);
      font: var(--agh-sys-typeface-label-hl-large);
      &-container {
        align-items: center;
        gap: var(--agh-ref-spacing-100);
      }
    }

    .description {
      color: var(--agh-ref-color-grayscale-700);
      font: var(--agh-sys-typeface-label-default-small);
    }

    &-multiple {
      text-align: center;
      .description {
        font: var(--agh-sys-typeface-label-default-large);
        color: var(--agh-ref-color-grayscale-600);
      }
    }
  }

  .footer {
    gap: var(--agh-ref-spacing-300);
    .button {
      width: 100%;
    }
  }
}
</style>
