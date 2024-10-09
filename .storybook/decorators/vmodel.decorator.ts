import { useArgs } from '@storybook/preview-api';

import type { Decorator } from '@storybook/vue3';


export const fixVModel: Decorator = (story, ctx) => {
  const [args, updateArgs] = useArgs();
  const { component, context } = ctx;

  component?.emits?.forEach((emit: string) => {
    const [, model] = emit.split(':');
    if (!model) return;
    const update = args[emit.replace('update', 'onUpdate')];
    args[emit.replace('update', 'onUpdate')] = (...values: any[]) => {
      update?.(...values);

      /**
       * Arg with `undefined` will be deleted by `deleteUndefined()`, then loss of reactive
       * @see {@link https://github.com/storybookjs/storybook/blob/next/code/lib/preview-api/src/modules/store/ArgsStore.ts#L63}
       */
      const modelValue = values[0] === undefined ? null : values[0];
      context.args[model] = modelValue;
    };
  });

  return story({ ...context, updateArgs });
}
