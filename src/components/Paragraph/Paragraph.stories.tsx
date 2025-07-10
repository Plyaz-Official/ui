import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Paragraph } from '@/components';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Paragraph component built on top of Text that supports different sizes and normal weight body text.',
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Paragraph.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Paragraph.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg'],
      description: 'Size of the paragraph text.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Base: Story = {
  args: {
    children: 'This is a paragraph with base size.',
    size: 'base',
    className: 'text-gray-800 dark:bg-black dark:text-white',
  },
};

export const Small: Story = {
  args: {
    children: 'This is a small paragraph.',
    size: 'sm',
    className: 'text-gray-700 dark:bg-black dark:text-white',
  },
};

export const ExtraSmall: Story = {
  args: {
    children: 'This is an extra small paragraph.',
    size: 'xs',
    className: 'text-gray-600 dark:bg-black dark:text-white',
  },
};

export const Large: Story = {
  args: {
    children: 'This is a large paragraph.',
    size: 'lg',
    className: 'text-gray-900  dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    children: 'This is a large paragraph.',
    size: 'lg',
    className: 'text-gray-900',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getByTestId('text');
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(100);
    await expect(args.onClick).toBeCalled();
  },
};
