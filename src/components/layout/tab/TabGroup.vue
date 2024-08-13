<script setup lang="ts">
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';
import { useElementSize } from '@vueuse/core';

import type { VNode } from 'vue';

import type { TabGroup } from '@/components/layout/tab/TabGroup.model';

const slots = defineSlots<{
  [key: TabGroup.Tab.Model['id']]: (props: {
    tab: TabGroup.Tab.Model;
    id: TabGroup.Tab.Model['id'];
    index: number;
  }) => VNode;
}>();

const props = withDefaults(defineProps<TabGroup.Props>(), {
  level: 'primary'
});

const selected = defineModel<TabGroup.Tab.Model>({
  get() {
    return props.modelValue ?? _selected.value ?? tabs.value.values().next().value;
  },
  set(value) {
    if (!props.modelValue) {
      _selected.value = value;
    }

    if (oldIndex.value !== selectedIndex.value) {
      oldIndex.value = selectedIndex.value;
    }

    return value;
  }
});

const tabRefs$ = ref<HTMLElement[]>([]);

const _selected = ref<TabGroup.Tab.Model | undefined>(undefined);
const oldIndex = ref<number | null>(null);

const selectedIndex = computed(() =>
  selected.value ? [...tabs.value.keys()].indexOf(selected.value.id) ?? 0 : 0
);
const animateDirection = computed(() =>
  (oldIndex.value ?? selectedIndex.value) <= selectedIndex.value ? 'left' : 'right'
);
const tabs = computed(() =>
  Array.isArray(props.tabs) ? new Map(props.tabs.map((tab) => [tab.id, tab])) : props.tabs
);
const decoBarWidth = computed(() =>
  tabRefs$.value[selectedIndex.value]
    ? useElementSize(tabRefs$.value[selectedIndex.value]).width.value
    : 0
);
const decoBarOffset = computed(() =>
  tabRefs$.value
    .slice(0, selectedIndex.value)
    .reduce((acc, tab) => acc + useElementSize(tab).width.value, 0)
);

const selectTab = (tab: TabGroup.Tab.Model) => {
  selected.value = tab;
};
</script>

<template>
  <div :class="[$style['tab-group-container'], $style.wrapper, $style.flex, $style.vertical]">
    <div
      :class="[
        $style['tab-group-wrapper'],
        $style.wrapper,
        $style.flex,
        $style.horizontal,
        $style[props.level]
      ]"
    >
      <template v-for="[id, tab] in tabs" :key="id">
        <div
          ref="tabRefs$"
          @click="selectTab(tab)"
          :class="[
            $style['tab-group'],
            $style.wrapper,
            $style.flex,
            $style.horizontal,
            $style.behavior,
            $style.clickable,
            {
              [$style.active]: selected?.id === id
            }
          ]"
        >
          <template v-if="tab.icon">
            <Icon :class="$style.icon" :icon="tab.icon" />
          </template>
          <p>{{ tab.name }}</p>
        </div>
      </template>
    </div>
    <template v-if="selected">
      <Transition
        :class="$style.transition"
        :enter-active-class="$style[`slide-${animateDirection}-enter-active`]"
        :enter-from-class="$style[`slide-${animateDirection}-enter-from`]"
        :leave-active-class="$style[`slide-${animateDirection}-leave-active`]"
        :leave-from-class="$style[`slide-${animateDirection}-leave-from`]"
        mode="out-in"
        appear
      >
        <slot :id="selected.id" :index="selectedIndex" :name="selected.id" :tab="selected" />
      </Transition>
    </template>
  </div>
</template>

<style module scoped lang="scss">
@use 'sass:list';
@use '@/assets/styles/modules/wrapper.module' as wrapper;
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/transition.module' as transition;

.tab-group {
  &-container {
    &,
    *,
    *::before,
    &::after {
      box-sizing: border-box;
    }
  }

  &-wrapper {
    --wrapper-gap: 0;

    width: fit-content;

    $style-sets: (
        'primary',
        (var(--agh-ref-color-blue-500), var(--agh-ref-color-blue-500)),
        (var(--agh-ref-color-grayscale-600), var(--agh-ref-color-grayscale-300))
      ),
      (
        'secondary',
        (var(--agh-ref-color-grayscale-900) var(--agh-ref-color-grayscale-800)),
        (var(--agh-ref-color-grayscale-500), transparent)
      );

    @each $class, $highlight, $default in $style-sets {
      &.#{$class} {
        --highlight-fill-color: #{list.nth($highlight, 1)};
        --highlight-border-color: #{list.nth($highlight, 2)};
        --default-fill-color: #{list.nth($default, 1)};
        --default-border-color: #{list.nth($default, 2)};
      }
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: calc(v-bind('decoBarOffset') * 1px);
      width: calc(v-bind('decoBarWidth') * 1px);
      height: var(--agh-ref-border-width-100);
      background-color: var(--highlight-border-color);
      z-index: 1;
      transition:
        width 0.2s cubic-bezier(0.075, 0.82, 0.165, 1),
        left 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
      will-change: width, left;
    }
  }

  &-viewport {
    &-leaving {
      position: absolute;
    }
  }

  --wrapper-gap: var(--agh-ref-spacing-200);

  padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-400);
  border-bottom: var(--agh-ref-border-width-100) solid var(--default-border-color);
  place-items: center;

  &.active {
    &,
    p,
    .icon {
      color: var(--highlight-fill-color);
    }
  }

  &,
  p,
  .icon {
    color: var(--agh-ref-color-grayscale-600);
    transition: color ease-in-out 0.1s;
    will-change: color;
  }

  p {
    font: var(--agh-sys-typeface-title-pop-up-tiny);
  }

  .icon {
    font-size: var(--agh-ref-icon-size-200);
  }
}
</style>
