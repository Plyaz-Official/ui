import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Heading } from '@/components';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Heading` component wraps the `Text` component to render semantic headings (`h1` to `h6`) with consistent typography using Tailwind CSS.',
      },
    },
  },
  argTypes: {
    element: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML element to render as the Heading.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Heading.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Heading.',
    },
    size: {
      control: 'select',
      options: ['4xl', '3xl', '2xl', 'xl', 'lg', 'base'],
      description: 'Size of the heading text.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    children: 'This is an H1 heading',
    element: 'h1',
    size: '4xl',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const H2: Story = {
  args: {
    children: 'This is an H2 heading',
    element: 'h2',
    size: '3xl',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const H3: Story = {
  args: {
    children: 'This is an H3 heading',
    element: 'h3',
    size: '2xl',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const H4: Story = {
  args: {
    children: 'This is an H4 heading',
    element: 'h4',
    size: 'xl',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const H5: Story = {
  args: {
    children: 'This is an H5 heading',
    element: 'h5',
    size: 'lg',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const H6: Story = {
  args: {
    children: 'This is an H6 heading',
    element: 'h6',
    size: 'base',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    children: 'This is an H6 heading',
    element: 'h6',
    size: 'base',
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
