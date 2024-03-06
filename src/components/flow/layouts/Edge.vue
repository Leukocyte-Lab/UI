<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, inject, toRef, ref, onBeforeUnmount, onBeforeUpdate } from 'vue';
import { computedInject, useMutationObserver } from '@vueuse/core';
import { Color, LINE_CAP, LINE_JOIN } from 'pixi.js';

import type { GraphicsInst } from 'vue3-pixi';

import { Flow } from '../Flow.model';

import Math$ from '@/shared/libs/math';
import { signal } from '@/shared/libs/signal';

import type { Vec2 } from '@/shared/types/vector';

const debugOptions = inject(Flow.UI.Debugger.InjectionKey);
const gap = computedInject(
  Flow.UI.Screen.Viewport.Gap,
  (gap) => gap?.value,
  toRef(Math$.Vector.ORIGIN_2D)
);
const viewport = computedInject(
  Flow.UI.Screen.Viewport.Size,
  (size) => size?.value,
  toRef({
    width: 0,
    height: 0
  })
);
const offset = computedInject(
  Flow.UI.Screen.Viewport.Offset,
  (offset) => offset?.value,
  toRef(Math$.Vector.ORIGIN_2D)
);
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
  arrowSize: 5
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

const extraStrokeOptionsFromProps = <
  P extends keyof Pick<Flow.UI.Layout.Edge.Props, 'strokeColor' | 'strokeOpacity' | 'strokeWidth'>
>(
  key: P
) =>
  ((value) =>
    Array.isArray(value)
      ? props.priority === 'blur-first'
        ? props.blur
          ? value[2]
          : props.active
            ? value[1]
            : value[0]
        : props.active
          ? value[1]
          : props.blur
            ? value[2]
            : value[0]
      : value)(props[key]);

const fetchToken = () => {
  const options = {
    strokeColor: extraStrokeOptionsFromProps('strokeColor'),
    strokeOpacity: extraStrokeOptionsFromProps('strokeOpacity'),
    strokeWidth: extraStrokeOptionsFromProps('strokeWidth')
  };

  strokeColor.value = new Color(
    `${options.strokeColor}`.startsWith('var(--')
      ? globalThis
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`${options.strokeColor}`.replace(/^var\((.+)\)$/, '$1')) || 0x000000
      : options.strokeColor
  );
  strokeOpacity.value = Number(
    `${options.strokeOpacity}`.startsWith('var(--')
      ? globalThis
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`${options.strokeOpacity}`.replace(/^var\((.+)\)$/, '$1'))
      : options.strokeOpacity ?? strokeColor.value.alpha
  );
  strokeWidth.value = parseFloat(
    String(
      `${options.strokeWidth}`.startsWith('var(--')
        ? globalThis
            .getComputedStyle(document.documentElement)
            .getPropertyValue(`${options.strokeWidth}`.replace(/^var\((.+)\)$/, '$1'))
        : options.strokeWidth ?? 1
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
  const fromScale = Math$.Vector.minus(
    { x: 1, y: 1 },
    Math$.Vector.divide(
      Math$.Vector.delta(props.edge.from.position ?? { x: 0, y: 0 }, nodeBoundary.value.min, true),
      boundaryDelta,
      true
    )
  );
  const toScale = Math$.Vector.minus(
    { x: 1, y: 1 },
    Math$.Vector.divide(
      Math$.Vector.delta(props.edge.to?.position ?? { x: 0, y: 0 }, nodeBoundary.value.min, true),
      boundaryDelta,
      true
    )
  );
  const initVector = {
    x: ((value) =>
      Math.abs(value) < gap.value.x ? (ray.value.y > 0 ? 1 : -1) : value > 0 ? 1 : -1)(
      props.edge.from.position.x + startPoint.value.x - viewport.value.width / 2
    ),
    y: ((value) =>
      Math.abs(value) < gap.value.y ? (ray.value.y > 0 ? 1 : -1) : value > 0 ? 1 : -1)(
      props.edge.from.position.y + startPoint.value.y - viewport.value.height / 2
    )
  };
  const endVector = {
    x: ((value) =>
      Math.abs(value) < gap.value.x ? (ray.value.y > 0 ? 1 : -1) : value > 0 ? 1 : -1)(
      props.edge.to?.position.x ?? 0 - viewport.value.width / 2
    ),
    y: ((value) =>
      Math.abs(value) < gap.value.y ? (ray.value.y > 0 ? 1 : -1) : value > 0 ? 1 : -1)(
      props.edge.to?.position.y ??
        0 + (props.edge.to?.boundingBox.height ?? 0 / 2) - viewport.value.height / 2
    )
  };
  const origin = {
    x:
      startPoint.value.x -
      props.edge.from.boundingBox.width / 2 +
      viewport.value.width / 2 -
      props.edge.from.position.x,
    y:
      startPoint.value.y -
      props.edge.from.boundingBox.height / 2 +
      viewport.value.height / 2 -
      (props.edge.from.position.y - offset.value.y)
  };

  if (ray.value.x > 0) {
    if (ray.value.x - props.edge.from.boundingBox.width > gap.value.x) {
      const firstTurnPoint = {
        x:
          startPoint.value.x +
          gap.value.x / 2 -
          props.radius / 8 -
          props.radius * ((0.5 - fromScale.y) * -Math.E),
        y: startPoint.value.y
      };
      g.lineTo(firstTurnPoint.x - props.radius, startPoint.value.y);
      g.quadraticCurveTo(
        firstTurnPoint.x,
        startPoint.value.y,
        firstTurnPoint.x,
        startPoint.value.y + props.radius * initVector.y
      );
      g.lineTo(
        firstTurnPoint.x,
        origin.y +
          (viewport.value.height / 2 - gap.value.y) * initVector.y -
          props.radius *
            (4 -
              (-1.5 +
                ((fromScale.x +
                  (fromScale.y > 0.5 ? fromScale.y - 0.5 : fromScale.y) *
                    endVector.y *
                    initVector.y) *
                  Math.PI) /
                  Math.LOG2E)) *
            initVector.y
      );
      g.quadraticCurveTo(
        firstTurnPoint.x,
        origin.y +
          (viewport.value.height / 2 - gap.value.y) * initVector.y -
          props.radius *
            (3 -
              (-1.5 +
                ((fromScale.x +
                  (fromScale.y > 0.5 ? fromScale.y - 0.5 : fromScale.y) *
                    endVector.y *
                    initVector.y) *
                  Math.PI) /
                  Math.LOG2E)) *
            initVector.y,
        firstTurnPoint.x + props.radius,
        origin.y +
          (viewport.value.height / 2 - gap.value.y) * initVector.y -
          props.radius *
            (3 -
              (-1.5 +
                ((fromScale.x +
                  (fromScale.y > 0.5 ? fromScale.y - 0.5 : fromScale.y) *
                    endVector.y *
                    initVector.y) *
                  Math.PI) /
                  Math.LOG2E)) *
            initVector.y
      );
      g.lineTo(
        endPoint.value.x - props.radius * (2 + (1 - toScale.y * initVector.y) * toScale.x),
        origin.y +
          (viewport.value.height / 2 - gap.value.y) * initVector.y -
          props.radius *
            (3 -
              (-1.5 +
                ((fromScale.x +
                  (fromScale.y > 0.5 ? fromScale.y - 0.5 : fromScale.y) *
                    endVector.y *
                    initVector.y) *
                  Math.PI) /
                  Math.LOG2E)) *
            initVector.y
      );
      g.quadraticCurveTo(
        endPoint.value.x - props.radius * 1.5,
        origin.y +
          (viewport.value.height / 2 - gap.value.y) * initVector.y -
          props.radius *
            (3 -
              (-1.5 +
                ((fromScale.x +
                  (fromScale.y > 0.5 ? fromScale.y - 0.5 : fromScale.y) *
                    endVector.y *
                    initVector.y) *
                  Math.PI) /
                  Math.LOG2E)) *
            initVector.y,
        endPoint.value.x - props.radius * 1.5,
        origin.y +
          (viewport.value.height / 2 - gap.value.y) * initVector.y -
          props.radius *
            (3 -
              (-2.5 +
                ((fromScale.x +
                  (fromScale.y > 0.5 ? fromScale.y - 0.5 : fromScale.y) *
                    endVector.y *
                    initVector.y) *
                  Math.PI) /
                  Math.LOG2E)) *
            initVector.y
      );
      g.lineTo(
        endPoint.value.x - props.radius * 1.5,
        endPoint.value.y + props.radius * (initVector.y > 0 ? 1 : -1)
      );
      g.quadraticCurveTo(
        endPoint.value.x - props.radius * 1.5,
        endPoint.value.y,
        endPoint.value.x - props.radius * 0.5,
        endPoint.value.y
      );
      g.lineTo(endPoint.value.x, endPoint.value.y);
    } else {
      if (ray.value.y !== 0) {
        const firstTurnPoint = {
          x: Math.max(mid.x, 0) - props.radius * ((0.5 - fromScale.y) * -Math.E),
          y: startPoint.value.y
        };

        g.lineTo(firstTurnPoint.x - props.radius, firstTurnPoint.y);
        g.quadraticCurveTo(
          firstTurnPoint.x,
          firstTurnPoint.y,
          firstTurnPoint.x,
          startPoint.value.y + props.radius * (ray.value.y > 0 ? 1 : -1)
        );
        g.lineTo(firstTurnPoint.x, endPoint.value.y - props.radius * (ray.value.y > 0 ? 1 : -1));
        g.quadraticCurveTo(
          firstTurnPoint.x,
          endPoint.value.y,
          firstTurnPoint.x + props.radius,
          endPoint.value.y
        );
        g.lineTo(endPoint.value.x, endPoint.value.y);
      } else {
        g.lineTo(endPoint.value.x, endPoint.value.y);
      }
    }

    drawArrow(g, endPoint.value);
  } else if (ray.value.x < 0) {
    g.lineTo(
      startPoint.value.x +
        props.radius *
          (-0.5 +
            ((toScale.x +
              (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
              Math.PI) /
              Math.LOG2E),
      startPoint.value.y
    );
    g.quadraticCurveTo(
      startPoint.value.x +
        props.radius *
          (0.5 +
            ((toScale.x +
              (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
              Math.PI) /
              Math.LOG2E),
      startPoint.value.y,
      startPoint.value.x +
        props.radius *
          (0.5 +
            ((toScale.x +
              (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
              Math.PI) /
              Math.LOG2E),
      startPoint.value.y + props.radius * initVector.y
    );
    g.lineTo(
      startPoint.value.x +
        props.radius *
          (0.5 +
            ((toScale.x +
              (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
              Math.PI) /
              Math.LOG2E),
      origin.y +
        (viewport.value.height / 2 - gap.value.y) * initVector.y -
        props.radius *
          (2 -
            (-1.5 +
              ((toScale.x +
                (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
                Math.PI) /
                Math.LOG2E)) *
          initVector.y
    );
    g.quadraticCurveTo(
      startPoint.value.x +
        props.radius *
          (0.5 +
            ((toScale.x +
              (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
              Math.PI) /
              Math.LOG2E),
      origin.y +
        (viewport.value.height / 2 - gap.value.y) * initVector.y -
        props.radius *
          (1 -
            (-1.5 +
              ((toScale.x +
                (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
                Math.PI) /
                Math.LOG2E)) *
          initVector.y,
      startPoint.value.x +
        props.radius *
          (-0.5 +
            ((toScale.x +
              (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
              Math.PI) /
              Math.LOG2E),
      origin.y +
        (viewport.value.height / 2 - gap.value.y) * initVector.y -
        props.radius *
          (1 -
            (-1.5 +
              ((toScale.x +
                (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
                Math.PI) /
                Math.LOG2E)) *
          initVector.y
    );
    g.lineTo(
      endPoint.value.x - props.radius * (1 + (1 - toScale.y * initVector.y) * toScale.x),
      origin.y +
        (viewport.value.height / 2 - gap.value.y) * initVector.y -
        props.radius *
          (1 -
            (-1.5 +
              ((toScale.x +
                (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
                Math.PI) /
                Math.LOG2E)) *
          initVector.y
    );
    g.quadraticCurveTo(
      endPoint.value.x - props.radius * (2 + (1 - toScale.y * initVector.y) * toScale.x),
      origin.y +
        (viewport.value.height / 2 - gap.value.y) * initVector.y -
        props.radius *
          (1 -
            (-1.5 +
              ((toScale.x +
                (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
                Math.PI) /
                Math.LOG2E)) *
          initVector.y,
      endPoint.value.x - props.radius * (2 + (1 - toScale.y * initVector.y) * toScale.x),
      origin.y +
        (viewport.value.height / 2 - gap.value.y) * initVector.y -
        props.radius *
          (1 -
            (-2.5 +
              ((toScale.x +
                (toScale.y > 0.5 ? toScale.y - 0.5 : toScale.y) * endVector.y * initVector.y) *
                Math.PI) /
                Math.LOG2E)) *
          initVector.y
    );
    g.lineTo(
      endPoint.value.x - props.radius * (2 + (1 - toScale.y * initVector.y) * toScale.x),
      endPoint.value.y + props.radius * (initVector.y > 0 ? 1 : -1)
    );
    g.quadraticCurveTo(
      endPoint.value.x - props.radius * (2 + (1 - toScale.y * initVector.y) * toScale.x),
      endPoint.value.y,
      endPoint.value.x - props.radius * (1 + (1 - toScale.y * initVector.y) * toScale.x),
      endPoint.value.y
    );
    g.lineTo(endPoint.value.x, endPoint.value.y);
    drawArrow(g, endPoint.value);
  } else {
    g.lineTo(startPoint.value.x + props.radius * (0.25 - 1 / Math.E), startPoint.value.y);
    g.quadraticCurveTo(
      startPoint.value.x + props.radius * (1.25 - 1 / Math.E),
      startPoint.value.y,
      startPoint.value.x + props.radius * (1.25 - 1 / Math.E),
      startPoint.value.y + props.radius * (ray.value.y > 0 ? 1 : -1)
    );
    g.lineTo(
      startPoint.value.x + props.radius * (1.25 - 1 / Math.E),
      startPoint.value.y + (props.edge.from.boundingBox.height / 2) * (ray.value.y > 0 ? 1 : -1)
    );
    g.quadraticCurveTo(
      startPoint.value.x + props.radius * (1.25 - 1 / Math.E),
      startPoint.value.y +
        (props.edge.from.boundingBox.height / 2 + props.radius) * (ray.value.y > 0 ? 1 : -1),
      startPoint.value.x + props.radius * (0.25 - 1 / Math.E),
      startPoint.value.y +
        (props.edge.from.boundingBox.height / 2 + props.radius) * (ray.value.y > 0 ? 1 : -1)
    );
    g.lineTo(
      endPoint.value.x - props.radius * (0.75 - (toScale.y * 2) / Math.E),
      startPoint.value.y +
        (props.edge.from.boundingBox.height / 2 + props.radius) * (ray.value.y > 0 ? 1 : -1)
    );
    g.quadraticCurveTo(
      endPoint.value.x - props.radius * (1.75 - (toScale.y * 2) / Math.E),
      startPoint.value.y +
        (props.edge.from.boundingBox.height / 2 + props.radius) * (ray.value.y > 0 ? 1 : -1),
      endPoint.value.x - props.radius * (1.75 - (toScale.y * 2) / Math.E),
      startPoint.value.y +
        (props.edge.from.boundingBox.height / 2 + props.radius * 2) * (ray.value.y > 0 ? 1 : -1)
    );
    g.lineTo(
      endPoint.value.x - props.radius * (1.75 - (toScale.y * 2) / Math.E),
      endPoint.value.y - props.radius * (ray.value.y > 0 ? 1 : -1)
    );
    g.quadraticCurveTo(
      endPoint.value.x - props.radius * (1.75 - (toScale.y * 2) / Math.E),
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

onBeforeUpdate(() => {
  fetchToken();
});

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
