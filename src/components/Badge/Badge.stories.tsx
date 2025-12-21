import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/components';

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta = {
  title: 'components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'info',
        'warning',
        'error',
      ],
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    variant: 'default',
    children: 'Badge',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the badge.
 */
export const Default: Story = {};

/**
 * Use the `secondary` badge to call for less urgent information, blending
 * into the interface while still signaling minor updates or statuses.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

/**
 * Use the `destructive` badge to  indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

/**
 * Use the `outline` badge for overlaying without obscuring interface details,
 * emphasizing clarity and subtlety..
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

/**
 * Use the `success` badge to indicate successful operations, completed tasks,
 * or positive status indicators.
 */
export const Success: Story = {
  args: {
    variant: 'success',
  },
};

/**
 * Use the `info` badge to display informational messages, general updates,
 * or neutral status indicators.
 */
export const Info: Story = {
  args: {
    variant: 'info',
  },
};

/**
 * Use the `warning` badge to signal caution, pending actions, or items
 * that require attention but are not critical.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

/**
 * Use the `error` badge to highlight errors, failed operations, or critical
 * issues that need immediate attention.
 */
export const Error: Story = {
  args: {
    variant: 'error',
  },
};
