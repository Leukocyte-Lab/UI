<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, onBeforeUpdate, ref } from 'vue';
import { useTimestamp, useElementSize, useScroll } from '@vueuse/core';
import { orderBy } from 'lodash-es';
import { Icon } from '@iconify/vue/offline';

import type { DefineProps } from 'vue';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import CardBox from '@/components/element/card/CardBox.vue';

import { parser } from '@/shared/libs/parser';
import { useEventDebounceSignal } from '@/shared/libs/event';
import Map$ from '@/shared/libs/map';

import type { Timeline } from './Timeline.model';

const props = withDefaults(defineProps<Timeline.Props>(), {
  follow: false,
  running: false,
  duration: 5 * 60 * 1000, // 5 min
  basis: 5 * 60 * 1000, // 5 min
  title: 'Timeline'
});

const emits = defineEmits<Timeline.Emits>();

const wrapperRef$ = ref<HTMLElement>();
const { width } = useElementSize(wrapperRef$);
const { timestamp, pause, resume } = useTimestamp({
  controls: true,
  interval: 1000,
  immediate: props.running
});
const { x } = useScroll(wrapperRef$, {
  behavior: 'smooth'
});

const events = computed(
  () =>
    new Map$(
      orderBy(
        Array.isArray(props.events) ? props.events : [...props.events.values()],
        ['range.start'],
        ['asc']
      ).map((event) => [
        event.range.start.getTime(),
        {
          event,
          duration: Math.max(
            (event.range.end?.getTime() ?? (props.running ? timestamp.value : 0)) -
              event.range.start.getTime(),
            0
          )
        }
      ])
    )
);
const startTime = computed<number>(() => Number(props.start) || events.value.keys().next().value);
const endTime = computed<number>(
  () =>
    Number(props.end) ||
    (props.running
      ? timestamp.value
      : Math.max(
          ...[...events.value.values()].map(
            ({ event, duration }) =>
              event.range.end?.getTime() ?? event.range.start.getTime() + duration
          )
        ))
);
const timelineDuration = computed<number>(() => Number(endTime.value - startTime.value) || 0);
const clipDuration = computed<number>(() =>
  ((options) =>
    options.duration === 'justify'
      ? options.grow === 'fill'
        ? Math.abs(Number(options.basis) - timelineDuration.value) <=
          Number(options.growThreshold ?? 0)
          ? timelineDuration.value
          : Number(options.basis)
        : Number(options.basis)
      : options.duration === 'cover'
        ? timelineDuration.value
        : Number(options.duration) || 0)(
    props as DefineProps<Timeline.Props, 'follow' | 'running'> & {
      basis: number;
    }
  )
);
const timelineWidth = computed(() => (timelineDuration.value / clipDuration.value) * width.value);
const currentView = computed(() => ({
  startTime: startTime.value + (x.value / timelineWidth.value) * timelineDuration.value,
  endTime: startTime.value + ((x.value + width.value) / timelineWidth.value) * timelineDuration.value
}));

const startFollow = () => {
  wrapperRef$.value?.scrollTo({
    left: timelineWidth.value,
    behavior: 'smooth'
  });
};

const { onTrigger } = useEventDebounceSignal(
  () => {
    emits('update:range', {
      start: new Date(currentView.value.startTime),
      end: new Date(currentView.value.endTime)
    });
    emits('update:duration', new Date(clipDuration.value));

    console.log(x.value, timelineWidth.value, timelineDuration.value)

    const focusedEvent = events.value
      .filter(
        ({ event }) =>
          !(
            Number(event.range.start ?? 0) <= Number(currentView.value.startTime ?? 0) &&
            Number(event.range.end ?? 0) <= Number(currentView.value.startTime ?? 0)
          ) &&
          !(
            Number(event.range.start ?? 0) >= Number(currentView.value.endTime ?? 0) &&
            Number(event.range.end ?? 0) >= Number(currentView.value.endTime ?? 0)
          )
      )
      .map(({ event }) => [event.id, event]);

    emits('update:focused', focusedEvent);
    emits('update:focused.array', focusedEvent.toArray('values'));
  },
  props.eventSignalOptions ?? {
    flush: 'post',
    debounce: 100
  }
);

onBeforeUpdate(() => {
  if (props.running) {
    resume();
  } else {
    pause();
  }
});
</script>

<template>
  <CardBox
    :class="[$style['timeline-container'], $style.wrapper, $style.flex, $style.vertical]"
    :has-stroke="false"
    purpose="container"
    radius="var(--agh-ref-border-radius-500)"
  >
    <header :class="[$style.wrapper, $style.flex, $style.horizontal]">
      <h1>{{ props.title }}</h1>
      <div :class="[$style.wrapper, $style.flex, $style.horizontal]">
        <p :class="[$style.wrapper, $style.flex, $style.vertical]">
          <span
            data-label="date"
            v-text="parser(currentView, '{{ startTime | date : yyyy/MM/dd }}')"
          />
          <span
            data-label="time"
            v-text="parser(currentView, '{{ startTime | date : HH:mm:ss }}')"
          />
        </p>
        <Icon :class="$style.icon" icon="fa6-solid:arrows-left-right" />
        <p :class="[$style.wrapper, $style.flex, $style.vertical]">
          <span
            data-label="date"
            v-text="parser(currentView, '{{ endTime | date : yyyy/MM/dd }}')"
          />
          <span data-label="time" v-text="parser(currentView, '{{ endTime | date : HH:mm:ss }}')" />
        </p>
      </div>
      <ButtonBox
        :class="$style.button"
        :disabled="x + width >= timelineWidth"
        @click="startFollow()"
        icon="fa6-solid:forward-step"
        variant="square"
        level="secondary"
      />
    </header>
    <div
      ref="wrapperRef$"
      :class="[$style['timeline-wrapper'], $style.wrapper, $style.flex, $style.horizontal]"
      @scroll="onTrigger"
    >
      <div :class="[$style['timeline-axis'], $style.wrapper, $style.flex, $style.horizontal]" />
      <template v-for="([timestamp, { event, duration }], index) in events" :key="`tick-${index}`">
        <div
          :id="event.id"
          :data-label="`${parser(event.range, '{{ start | date : yyyy/MM/dd HH:mm:ss }} - {{ end | date : yyyy/MM/dd HH:mm:ss }}')}`"
          :class="$style['timeline-tick']"
          :style="{
            left: `${((timestamp - startTime) / timelineDuration) * timelineWidth}px`,
            width: `${(duration / timelineDuration) * timelineWidth}px`
          }"
        />
      </template>
      <div :class="$style.anchor" />
    </div>
  </CardBox>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;

.timeline {
  &-container {
    &,
    *,
    *::before,
    &::after {
      box-sizing: border-box;
    }

    --wrapper-gap: var(--agh-ref-spacing-700);
    --box-fill-gradient: linear-gradient(
      to bottom,
      var(--agh-ref-color-grayscale-100),
      var(--agh-ref-color-grayscale-100)
    ) !important;
    --box-fill-gradient-hover: var(--box-fill-gradient) !important;
    --timeline-width: calc(v-bind('timelineWidth') * 1px);

    padding: var(--agh-ref-spacing-500) var(--agh-ref-spacing-600);

    header {
      --wrapper-gap: var(--agh-ref-spacing-1000);

      > .wrapper:has([data-label='date']) {
        --wrapper-gap: var(--agh-ref-spacing-500);

        place-items: center;

        > .icon {
          font-size: var(--agh-ref-icon-size-700);
          color: var(--agh-ref-color-grayscale-700);
        }
      }

      h2 {
        font: var(--agh-sys-typeface-title-pop-up-tiny);
        font-weight: var(--agh-ref-typeface-weight-600);
        color: var(--agh-ref-color-grayscale-800);
      }

      p {
        --wrapper-gap: var(--agh-ref-spacing-50);

        span {
          &:first-child {
            font: var(--agh-sys-typeface-label-hl-small);
            font-weight: var(--agh-ref-typeface-weight-600);
            color: var(--agh-ref-color-grayscale-700);
          }

          &:last-child {
            font: var(--agh-sys-typeface-label-hl-xlarge);
            color: var(--agh-ref-color-grayscale-900);
          }
        }
      }

      > .button {
        margin-left: auto;
      }
    }
  }

  &-wrapper {
    --wrapper-gap: 0;

    width: 100%;
    height: calc(
      var(--agh-ref-spacing-500) + var(--agh-ref-spacing-700) + var(--agh-ref-spacing-200) / 2
    );
    flex-shrink: 0;
    padding-bottom: var(--agh-ref-spacing-700);
    place-items: center;
    overflow-x: scroll;

    @include scrollbar.use;

    > .anchor {
      overflow-anchor: auto;
    }
  }

  &-axis {
    position: relative;
    display: flex;
    place-items: center;
    flex-shrink: 0;
    width: var(--timeline-width);
    height: var(--agh-ref-border-width-100);
    background-color: var(--agh-ref-color-grayscale-300);
    z-index: 100;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: var(--agh-ref-border-width-400);
      height: var(--agh-ref-spacing-500);
      background-color: var(--agh-ref-color-cyan-700);
      border-radius: var(--agh-ref-border-radius-900);
      z-index: 102;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }

  &-tick {
    position: absolute;
    height: var(--agh-ref-spacing-300);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--agh-ref-border-radius-900);
    }

    &::before {
      background-color: color-mix(
        in srgb,
        var(--agh-ref-color-cyan-100) calc(100% * var(--agh-ref-opacity-500)),
        transparent
      );
    }

    &::after {
      height: var(--agh-ref-spacing-300);
      width: var(--agh-ref-spacing-300);
      background-color: var(--agh-ref-color-cyan-700);
      z-index: 101;
    }
  }
}
</style>
