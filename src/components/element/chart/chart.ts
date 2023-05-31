import { fromPairs, isEmpty, map, max, min, toPairs, uniq } from 'lodash-es';
import { watchEffect, reactive, unref } from 'vue';
import { computedEager } from '@vueuse/core';

import type { MaybeRef } from 'vue';

import { parser } from '@/shared/libs/parser';
import { selector } from '@/shared/libs/selector';

import type { ObjectLike } from '@/shared/types/object';
import type { Chart } from './chart.model';

export const useChart = ({
  type,
  axises,
  data
}: {
  type: MaybeRef<Chart.Type>;
  axises: MaybeRef<Chart.Props['axises']>;
  data: MaybeRef<ObjectLike[] | ObjectLike>;
}) => {
  const state = reactive({
    datasets: [] as Chart.NormalizedDatasets[],
    axises: {} as Chart.Props['axises']
  });

  const getters = {
    datasets: computedEager(() => state.datasets),
    axises: computedEager(() => state.axises)
  }

  const datasetParser = (data: ObjectLike[] | ObjectLike): Chart.Datasets[] => {
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    } else if (Array.isArray(data) && data[0]?.label) {
      return data as Chart.Datasets[];
    } else {
      return [
        {
          label: 'Data',
          series: data as Chart.Plot[]
        }
      ];
    }
  };

  const seriesParser = (
    axises: Chart.Props['axises'],
    series: Chart.Plot[]
  ): Chart.NormalizedPlot[] =>
    series.map((plot) => ({
      data: plot,
      ...(fromPairs(
        toPairs(axises).map(([axisKey, axis]) => {
          const picked = axis.selector ? selector(plot, axis.selector) : null;

          const parsed = axis.accessor ? parser(plot, axis.accessor) : picked;

          return [
            axisKey,
            {
              normalized: Number(
                axis.type === 'number'
                  ? Number(picked)
                  : axis.type === 'date'
                  ? new Date(Number(picked))
                  : picked
              ),
              value: parsed
            }
          ];
        })
      ) as Omit<Chart.NormalizedPlot, 'data'>)
    }));

  const computeChartData = (
    type: Chart.Type,
    axisesConfig: Chart.Props['axises'],
    data: ObjectLike[] | ObjectLike
  ): {
    datasets: Chart.NormalizedDatasets[];
    axises: Chart.Props['axises'];
  } => {
    const datasets = datasetParser(data).map((dataset) => ({
      ...dataset,
      label: parser(dataset, dataset.label ?? ''),
      series: seriesParser(axisesConfig, dataset.series)
    }));

    const series = datasets.flatMap((dataset) => dataset.series);

    const axises = fromPairs(
      toPairs(axisesConfig).map(([axisKey, axis]) => {
        const plotSets = uniq(map(series, `${axisKey}.value`));
        const axisMin = Number(axis.min === 'auto' ? min(plotSets) : axis.min ?? 0);
        const axisMax = Number(
          axis.max === 'auto'
            ? max(plotSets)
            : axis.max ?? plotSets.length - (/radar|doughnut/.test(type ?? '') ? 0 : 1)
        );

        return [
          axisKey,
          {
            ...axis,
            min: axisMin,
            max: axisMax,
            metrics:
              axis.type === 'string'
                ? plotSets.map((value, index) => ({
                    normalized: index / (axisMax - axisMin),
                    value
                  }))
                : Array(Math.ceil((axisMax - axisMin) / (axis.step ?? 1)) + 1)
                    .fill(0)
                    .map((_, index) => ({
                      normalized: index / Math.ceil((axisMax - axisMin) / (axis.step ?? 1)),
                      value: axisMin + (axis.step ?? 1) * index
                    }))
          } as Chart.Axis
        ];
      })
    ) as Chart.Props['axises'];

    if (axises) {
      (toPairs(axises) as ['x' | 'y', Chart.Axis][]).forEach(([axisKey, axis]) => {
        if (axis.type === 'string') {
          datasets.forEach((dataset) => {
            dataset.series.forEach((plot) => {
              plot[axisKey].normalized =
                map(axis.metrics, 'value').indexOf(plot[axisKey].value) /
                (axis.metrics!.length - (/radar|doughnut/.test(type ?? '') ? 0 : 1));
            });
          });
        } else {
          datasets.forEach((dataset) => {
            dataset.series.forEach((plot) => {
              plot[axisKey].normalized =
                (Number(plot[axisKey].normalized ?? 0) - Number(axis.min)) /
                (Number(axis.max) - Number(axis.min));
            });
          });
        }
      });
    }

    return {
      datasets,
      axises
    };
  };

  watchEffect(() => {
    if (!isEmpty(unref(data))) {
      const chartData = computeChartData(unref(type), unref(axises), unref(data));
      state.datasets = chartData.datasets;
      state.axises = chartData.axises;
    }
  });

  return {
    ...getters
  }
};
