import { describe, expect, test } from 'vitest';
import { Icon } from '@iconify/vue/offline';
import { mount } from '@vue/test-utils';

import ButtonBoxComponent from './ButtonBox.vue';

import type { ButtonBox } from '@/components/element/button/ButtonBox.model';

const testPropsStyle = (propValues: string[], propType: keyof ButtonBox.Props) => {
  propValues.forEach((value) => {
    test(`renders correctly with ${propType}: ${value}`, async () => {
      const props = { [propType]: value };
      const wrapper = mount(ButtonBoxComponent, { props });

      const classNames = wrapper.element.className.split(' ');

      const isTestNameIncluded = classNames.some((className: string) => className.includes(`_${value}_`));

      expect(isTestNameIncluded).toBe(true);

      wrapper.unmount();
    });
  });
};

const testPropsLabel = (label: string) => {
  test(`renders correctly with label: ${label}`, async () => {
    const wrapper = mount(ButtonBoxComponent, { props: { label } });

    expect(wrapper.text()).toContain(label);

    wrapper.unmount();
  });
};

// TODO: Test icon class and props
const testPropsIcon = (icon: string) => {
  test('renders correctly with icon', async () => {
    const wrapper = mount(ButtonBoxComponent, {
      props: { icon }
    });

    const iconElement = wrapper.findComponent(Icon);

    expect(iconElement.exists()).toBe(true);

    wrapper.unmount();
  });
};

const testPropsDisabled = (disabled: boolean) => {
  test(`renders correctly with disabled(${disabled})`, async () => {
    const wrapper = mount(ButtonBoxComponent, {
      props: { disabled }
    });
    const classNames = wrapper.element.className.split(' ');

    const isTestNameIncluded = classNames.some((className: string) =>
      className.includes(disabled ? '_disabled_' : '_clickable_')
    );

    expect(isTestNameIncluded).toBe(true);

    expect(wrapper.attributes('disabled')).toBe(disabled ? '' : undefined);

    wrapper.unmount();
  });

  test(`button click with disabled(${disabled})`, async () => {
    const wrapper = mount(ButtonBoxComponent, {
      props: { disabled }
    });

    await wrapper.trigger('click');

    disabled
      ? expect(wrapper.emitted('click')).toBeUndefined()
      : expect(wrapper.emitted()).toHaveProperty('click');

    wrapper.unmount();
  });
};

// TODO: add click action test
const testPropsClicked = (clicked: boolean) => {
  test(`renders correctly with props clicked(${clicked}}`, async () => {
    const wrapper = mount(ButtonBoxComponent, { props: { clicked } });

    const classNames = wrapper.element.className.split(' ');

    const isTestNameIncluded = classNames.some((className: string) => className.includes(`_clicked_`));

    expect(isTestNameIncluded).toBe(clicked);

    wrapper.unmount();
  });
};

describe('ButtonBox.vue', () => {
  const variants = [
    'rounded',
    'square',
    'text-square',
    'circle',
    'rect',
    'extendable-rect',
    'text',
    'file'
  ];
  const level = ['primary', 'secondary'];
  const size = ['small', 'large'];

  testPropsStyle(variants, 'variant');
  testPropsStyle(level, 'level');
  testPropsStyle(size, 'size');

  testPropsLabel('test');

  testPropsIcon('fa6-solid:arrow-right');

  testPropsDisabled(true);
  testPropsDisabled(false);

  testPropsClicked(true);
  testPropsClicked(false);
});
