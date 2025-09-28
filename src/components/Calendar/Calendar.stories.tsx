import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from '@storybook/test';
import { addDays, subDays } from 'date-fns';

import { Calendar } from '@/components';

const DAYS_TO_ADD = {
  ONE_WEEK: 7,
  THREE_DAYS: 3,
  ONE_DAY: 1,
  THIRTY_DAYS: 30,
} as const;

type Story = StoryObj<typeof Calendar>;

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Calendar` component is a date picker built with react-day-picker. It provides a flexible and accessible way to select dates, date ranges, and multiple dates. Styled with Tailwind CSS and integrated with the design system.',
      },
    },
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode for the calendar.',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days from previous/next month.',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown'],
      description: 'Layout for the month caption.',
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Variant for navigation buttons.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    mode: 'single',
    showOutsideDays: true,
  },
};

export const Range: Story = {
  args: {
    mode: 'range',
    showOutsideDays: true,
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    showOutsideDays: true,
  },
};

export const WithSelectedDate: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
    showOutsideDays: true,
  },
};

export const WithDateRange: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: addDays(new Date(), DAYS_TO_ADD.ONE_WEEK),
    },
    showOutsideDays: true,
  },
};

export const WithMultipleDates: Story = {
  args: {
    mode: 'multiple',
    selected: [
      new Date(),
      addDays(new Date(), DAYS_TO_ADD.ONE_DAY),
      addDays(new Date(), DAYS_TO_ADD.THREE_DAYS),
    ],
    showOutsideDays: true,
  },
};

export const WithDisabledDates: Story = {
  args: {
    mode: 'single',
    disabled: [new Date(), addDays(new Date(), 1), addDays(new Date(), 2)],
    showOutsideDays: true,
  },
};

export const WithMinMaxDates: Story = {
  args: {
    mode: 'single',
    fromDate: subDays(new Date(), DAYS_TO_ADD.THIRTY_DAYS),
    toDate: addDays(new Date(), DAYS_TO_ADD.THIRTY_DAYS),
    showOutsideDays: true,
  },
};

export const DropdownLayout: Story = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
    showOutsideDays: true,
  },
};

export const WithoutOutsideDays: Story = {
  args: {
    mode: 'single',
    showOutsideDays: false,
  },
};

export const CustomButtonVariant: Story = {
  args: {
    mode: 'single',
    buttonVariant: 'outline',
    showOutsideDays: true,
  },
};

export const WithWeekNumbers: Story = {
  args: {
    mode: 'single',
    showWeekNumber: true,
    showOutsideDays: true,
  },
};

export const WithCustomClassNames: Story = {
  args: {
    mode: 'single',
    showOutsideDays: true,
    className: 'border-2 border-blue-200 rounded-lg',
    classNames: {
      day: 'hover:bg-blue-50',
      today: 'bg-blue-100 text-blue-900',
    },
  },
};

export const UserInteraction: Story = {
  args: {
    mode: 'single',
    showOutsideDays: true,
    onSelect: fn(),
  },
  play: async ({ canvas }) => {
    const calendar = await canvas.findByTestId('calendar');
    await expect(calendar).toBeInTheDocument();
  },
};
