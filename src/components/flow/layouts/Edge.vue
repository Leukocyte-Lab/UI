<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, inject, toRef, ref, onBeforeUnmount, onMounted } from 'vue';
import { computedInject, useMutationObserver } from '@vueuse/core';
import { Color, LINE_CAP, LINE_JOIN } from 'pixi.js';

import type { GraphicsInst } from 'vue3-pixi';

import { Flow } from '../Flow.model';

import Math$ from '@/shared/libs/math';
import { signal } from '@/shared/libs/signal';

import type { Vec2 } from '@/shared/types/vector';

const debugOptions = inject(Flow.UI.Debugger.InjectionKey);
const nodeBoundary = computedInject(
  Flow.UI.Screen.Viewport.NodeBoundary,
  (boundary) => boundary?.value,
  toRef({
    min: { x: 0, y: 0 },
    max: { x: 0, y: 0 }
  })
);

const props = withDefaults(defineProps<Flow.UI.Layout.Edge.Props>(), {
  radius: 16,
  arrowSize: 5,
  strokeWidth: 1,
  strokeColor: 0x000000,
  strokeOpacity: 1
});

const strokeColor = ref(new Color(0x000000));
const strokeOpacity = ref(1);
const strokeWidth = ref(1);

const showInspectInfo = signal(false);

const ray = computed<Vec2>(() =>
  Math$.Vector.delta(props.edge.to?.position ?? { x: 0, y: 0 }, props.edge.from.position, true)
);
const startPoint = computed<Vec2>(() => ({
  x: props.edge.from.boundingBox.width,
  y: props.edge.from.boundingBox.height / 2
}));
const endPoint = computed<Vec2>(() => ({
  x: (ray.value.x ?? 0) - props.radius / 4,
  y: (ray.value.y ?? 0) + (props.edge.to?.boundingBox.height ?? 0) / 2
}));

const fetchToken = () => {
  strokeColor.value = new Color(
    `${props.strokeColor}`.startsWith('var(--')
      ? globalThis
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`${props.strokeColor}`.replace(/^var\((.+)\)$/, '$1')) || 0x000000
      : props.strokeColor
  );
  strokeOpacity.value = Number(
    `${props.strokeOpacity}`.startsWith('var(--')
      ? globalThis
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`${props.strokeOpacity}`.replace(/^var\((.+)\)$/, '$1'))
      : props.strokeOpacity ?? strokeColor.value.alpha
  );
  strokeWidth.value = parseFloat(
    String(
      `${props.strokeWidth}`.startsWith('var(--')
        ? globalThis
            .getComputedStyle(document.documentElement)
            .getPropertyValue(`${props.strokeWidth}`.replace(/^var\((.+)\)$/, '$1'))
        : props.strokeWidth ?? 1
    )
  );
};

const drawPath = (g: GraphicsInst) => {
  g.clear();
  g.lineStyle({
    width: strokeWidth.value,
    color: strokeColor.value.toHex(),
    alpha: strokeOpacity.value,
    alignment: 0.5,
    cap: LINE_CAP.ROUND,
    join: LINE_JOIN.ROUND
  });
  g.moveTo(startPoint.value.x, startPoint.value.y);

  const mid = Math$.Vector.middle(endPoint.value, startPoint.value);
  const boundaryDelta = Math$.Vector.delta(nodeBoundary.value.min, nodeBoundary.value.max, true);
  const scale = Math$.Vector.minus(
    { x: 1, y: 1 },
    Math$.Vector.divide(
      Math$.Vector.delta(props.edge.to?.position ?? { x: 0, y: 0 }, nodeBoundary.value.min, true),
      boundaryDelta,
      true
    )
  );

  if (ray.value.x > 0) {
    g.lineTo(Math.max(mid.x - props.radius, 0), startPoint.value.y);
    g.quadraticCurveTo(
      mid.x,
      startPoint.value.y,
      mid.x,
      startPoint.value.y + props.radius * (ray.value.y > 0 ? 1 : -1)
    );
    g.lineTo(mid.x, endPoint.value.y - props.radius * (ray.value.y > 0 ? 1 : -1));
    g.quadraticCurveTo(mid.x, endPoint.value.y, mid.x + props.radius, endPoint.value.y);
    g.lineTo(endPoint.value.x, endPoint.value.y);
    drawArrow(g, endPoint.value);
  } else if (ray.value.x < 0) {
    g.lineTo(
      startPoint.value.x + props.radius * scale.x + props.radius * (1 + (scale.y * -Math.E) / 2),
      startPoint.value.y
    );
    g.quadraticCurveTo(
      startPoint.value.x +
        props.radius * (1 + scale.x) +
        props.radius * (1 + (scale.y * -Math.E) / 2),
      startPoint.value.y,
      startPoint.value.x +
        props.radius * (1 + scale.x) +
        props.radius * (1 + (scale.y * -Math.E) / 2),
      startPoint.value.y + props.radius * (ray.value.y > 0 ? -1 : 1)
    );
    g.lineTo(
      startPoint.value.x +
        props.radius * (1 + scale.x) +
        props.radius * (1 + (scale.y * -Math.E) / 2),
      startPoint.value.y -
        props.edge.from.position.y +
        (ray.value.y > 0 ? -startPoint.value.y : nodeBoundary.value.max.y * 1.15) * scale.x -
        props.radius * (ray.value.y > 0 ? -1 : 1) +
        props.radius * (1 + (scale.y * -Math.PI) / 2)
    );
    g.quadraticCurveTo(
      startPoint.value.x +
        props.radius * (1 + scale.x) +
        props.radius * (1 + (scale.y * -Math.E) / 2),
      startPoint.value.y -
        props.edge.from.position.y +
        (ray.value.y > 0 ? -startPoint.value.y : nodeBoundary.value.max.y * 1.15) * scale.x +
        props.radius * (1 + (scale.y * -Math.PI) / 2),
      startPoint.value.x + props.radius * scale.x + props.radius * (1 + (scale.y * -Math.E) / 2),
      startPoint.value.y -
        props.edge.from.position.y +
        (ray.value.y > 0 ? -startPoint.value.y : nodeBoundary.value.max.y * 1.15) * scale.x +
        props.radius * (1 + (scale.y * -Math.PI) / 2)
    );
    g.lineTo(
      endPoint.value.x - props.radius * (1 + scale.y),
      startPoint.value.y -
        props.edge.from.position.y +
        (ray.value.y > 0 ? -startPoint.value.y : nodeBoundary.value.max.y * 1.15) * scale.x +
        props.radius * (1 + (scale.y * -Math.PI) / 2)
    );
    g.quadraticCurveTo(
      endPoint.value.x - props.radius * (2 + scale.y),
      startPoint.value.y -
        props.edge.from.position.y +
        (ray.value.y > 0 ? -startPoint.value.y : nodeBoundary.value.max.y * 1.15) * scale.x +
        props.radius * (1 + (scale.y * -Math.PI) / 2),
      endPoint.value.x - props.radius * (2 + scale.y),
      startPoint.value.y -
        props.edge.from.position.y +
        (ray.value.y > 0 ? -startPoint.value.y : nodeBoundary.value.max.y * 1.15) * scale.x +
        props.radius * (ray.value.y > 0 ? 1 : -1) +
        props.radius * (1 + (scale.y * -Math.PI) / 2)
    );
    g.lineTo(
      endPoint.value.x - props.radius * (2 + scale.y),
      endPoint.value.y + props.radius * (ray.value.y > 0 ? -1 : 1)
    );
    g.quadraticCurveTo(
      endPoint.value.x - props.radius * (2 + scale.y),
      endPoint.value.y,
      endPoint.value.x - props.radius * (1 + scale.y),
      endPoint.value.y
    );
    g.lineTo(endPoint.value.x, endPoint.value.y);
    drawArrow(g, endPoint.value);
  } else {
    g.lineTo(startPoint.value.x + props.radius * ((1 + scale.y * -Math.E) / 2), startPoint.value.y);
    g.quadraticCurveTo(
      startPoint.value.x + props.radius + props.radius * ((1 + scale.y * -Math.E) / 2),
      startPoint.value.y,
      startPoint.value.x + props.radius + props.radius * ((1 + scale.y * -Math.E) / 2),
      startPoint.value.y + props.radius * (ray.value.y > 0 ? 1 : -1)
    );
    g.lineTo(
      startPoint.value.x + props.radius + props.radius * ((1 + scale.y * -Math.E) / 2),
      ray.value.y - props.radius * 2 * (ray.value.y > 0 ? 1 : 0)
    );
    g.quadraticCurveTo(
      startPoint.value.x + props.radius + props.radius * ((1 + scale.y * -Math.E) / 2),
      ray.value.y - props.radius,
      startPoint.value.x + props.radius * ((1 + scale.y * -Math.E) / 2),
      ray.value.y - props.radius
    );
    g.lineTo(endPoint.value.x, ray.value.y - props.radius);
    g.quadraticCurveTo(
      endPoint.value.x - props.radius,
      ray.value.y - props.radius,
      endPoint.value.x - props.radius,
      ray.value.y
    );
    g.lineTo(endPoint.value.x - props.radius, endPoint.value.y - props.radius);
    g.quadraticCurveTo(
      endPoint.value.x - props.radius,
      endPoint.value.y,
      endPoint.value.x,
      endPoint.value.y
    );
    drawArrow(g, endPoint.value);
  }

  g.endFill();
};

const drawArrow = (g: GraphicsInst, position: Vec2) => {
  g.moveTo(position.x, position.y);
  g.lineTo(position.x - props.arrowSize, position.y - props.arrowSize);
  g.moveTo(position.x, position.y);
  g.lineTo(position.x - props.arrowSize, position.y + props.arrowSize);
};

const mouseHandler = ($event: MouseEvent) => {
  if ($event.type === 'mouseover' || $event.type === 'pointerover') {
    showInspectInfo.set(true);
  } else if ($event.type === 'mouseleave' || $event.type === 'pointerleave') {
    showInspectInfo.set(false);
  }
};

const tokenStyleObserver = useMutationObserver(document.head, fetchToken, {
  childList: true
});

onMounted(() => {
  fetchToken();
})

onBeforeUnmount(() => {
  tokenStyleObserver.stop();
});
</script>

<template>
  <template v-if="debugOptions?.showControlPoint">
    <Graphics
      :position="startPoint"
      @render="
        (graphics) => {
          graphics.clear();
          graphics.beginFill(0x3249de);
          graphics.drawCircle(0, 0, 5);
          graphics.endFill();
        }
      "
    />
    <Text
      :position="startPoint"
      :anchor-y="1"
      :style="{
        fontSize: 8,
        fontFamily: 'monospace',
        whiteSpace: 'pre',
        padding: 10,
        leading: 1.2,
        breakWords: true,
        trim: true,
        fill: '#3249de'
      }"
      :text="`
          #${props.edge.id}

          offset-x: ${startPoint.x}
          offset-y: ${startPoint.y}
        `"
    />
    <template v-if="props.edge.to">
      <Graphics
        :position="endPoint"
        @render="
          (graphics) => {
            graphics.clear();
            graphics.beginFill(0xf9de32);
            graphics.drawCircle(0, 0, 5);
            graphics.endFill();
          }
        "
      />
      <Text
        :position="endPoint"
        :anchor-x="1"
        :style="{
          fontSize: 8,
          fontFamily: 'monospace',
          whiteSpace: 'pre',
          padding: 10,
          leading: 1.2,
          breakWords: true,
          trim: true,
          align: 'right',
          fill: '#f9de32'
        }"
        :text="`
          #${props.edge.id}

          offset-x: ${endPoint.x}
          offset-y: ${endPoint.y}
        `"
      />
    </template>
    <template v-if="showInspectInfo()">
      <Text
        :position="startPoint"
        :style="{
          fontSize: 10,
          fontFamily: 'monospace',
          whiteSpace: 'pre',
          padding: 10,
          leading: 1.2,
          breakWords: true,
          trim: true,
          fill: '#ffffff'
        }"
        :text="props.edge.id"
      />
    </template>
  </template>
  <Graphics @render="drawPath" @mouseover="mouseHandler" @mouseleave="mouseHandler" />
</template>
