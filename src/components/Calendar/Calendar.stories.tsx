import type { Meta, StoryObj } from '@storybook/react';
import { addDays } from 'date-fns';
import { expect, userEvent, fn } from '@storybook/test';

import { Calendar } from '@/components/client';

/**
 * A date field component that allows users to enter and edit date.
 */
const meta: Meta<typeof Calendar> = {
  title: 'components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: 'boolean',
    },
    numberOfMonths: {
      control: 'number',
      description: 'Number of months to display',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days that fall outside the current month',
    },
  },
  args: {
    mode: 'single',
    selected: new Date(),
    onSelect: fn(),
    className: 'rounded-md border w-fit',
    disabled: false,
    numberOfMonths: 1,
    showOutsideDays: true,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

/**
 * The default form of the calendar.
 */
export const Default: Story = {
  args: {},
};

/**
 * Use the `multiple` mode to select multiple dates.
 */
const twoDays = 2;
const eightDays = 8;
export const Multiple: Story = {
  args: {
    min: 1,
    selected: [new Date(), addDays(new Date(), twoDays), addDays(new Date(), eightDays)],
    mode: 'multiple',
  },
};

/**
 * Use the `range` mode to select a range of dates.
 */
const addDaysConstant = 7;
export const Range: Story = {
  args: {
    selected: {
      from: new Date(),
      to: addDays(new Date(), addDaysConstant),
    },
    mode: 'range',
  },
};

/**
 * Use the `disabled` prop to disable specific dates.
 */
const addDaysConstantRange: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  five: 5,
};
export const Disabled: Story = {
  args: {
    disabled: [
      addDays(new Date(), addDaysConstantRange.one),
      addDays(new Date(), addDaysConstantRange.two),
      addDays(new Date(), addDaysConstantRange.three),
      addDays(new Date(), addDaysConstantRange.five),
    ],
  },
};

/**
 * Use the `numberOfMonths` prop to display multiple months.
 */
export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
    showOutsideDays: false,
  },
};
const year = 2000;
export const ShouldNavigateMonthsWhenClicked: Story = {
  name: 'when using the calendar navigation, should change months',
  tags: ['!autodocs'],
  args: {
    defaultMonth: new Date(year, eightDays),
  },
  play: async ({ canvas }) => {
    const title = await canvas.findByText(/2000/i);
    const startTitle = title.textContent ?? '';
    const backBtn = await canvas.findByRole('button', {
      name: /previous/i,
    });
    const nextBtn = await canvas.findByRole('button', {
      name: /next/i,
    });
    const steps = 6;
    for (let i = 0; i < steps / twoDays; i++) {
      await userEvent.click(backBtn);
      await expect(title).not.toHaveTextContent(startTitle);
    }
    for (let i = 0; i < steps; i++) {
      await userEvent.click(nextBtn);
      if (i == steps / twoDays - 1) {
        await expect(title).toHaveTextContent(startTitle);
        continue;
      }
      await expect(title).not.toHaveTextContent(startTitle);
    }
  },
};
