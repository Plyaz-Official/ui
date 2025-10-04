
import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@/components/client";

/**
 * An input where the user selects a value from within a given range.
 */
const defaultValue = 33;
const meta: Meta<typeof Slider> = {
  title: "components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    defaultValue: [defaultValue],
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the slider.
 */
export const Default: Story = {};

/**
 * Use the `inverted` prop to have the slider fill from right to left.
 */
export const Inverted: Story = {
  args: {
    inverted: true,
  },
};

/**
 * Use the `disabled` prop to disable the slider.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
