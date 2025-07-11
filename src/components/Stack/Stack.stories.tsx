import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Box, Stack } from '@/components';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Stack component that arranges its children in a horizontal or vertical layout with customizable spacing.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the stack layout.',
    },
    spacing: {
      control: 'text',
      description: 'Tailwind CSS spacing class for the gap between items.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Stack.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Stack.',
    },
    element: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'nav', 'header', 'footer', 'main', 'span'],
      description: "The Stack element to render as the Box. Defaults to 'div'.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    direction: 'horizontal',
    spacing: 'space-x-2',
    className: 'bg-gray-100 p-4 rounded dark:bg-black dark:text-white',
    children: (
      <>
        <Box className='rounded bg-red-400 p-4 text-white'>Item 1</Box>
        <Box className='rounded bg-blue-400 p-4 text-white'>Item 2</Box>
        <Box className='rounded bg-green-400 p-4 text-white'>Item 3</Box>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    spacing: 'space-y-4',
    className: 'bg-gray-200 p-4 rounded dark:bg-black dark:text-white',
    children: (
      <>
        <Box className='rounded bg-purple-500 p-3 text-white'>Item A</Box>
        <Box className='rounded bg-purple-600 p-3 text-white'>Item B</Box>
        <Box className='rounded bg-purple-700 p-3 text-white'>Item C</Box>
      </>
    ),
  },
};

export const UserInteraction: Story = {
  args: {
    direction: 'vertical',
    spacing: 'space-y-4',
    className: 'bg-gray-200 p-4 rounded',
    onClick: fn(),
    children: (
      <>
        <Box className='rounded bg-purple-500 p-3 text-white'>Item A</Box>
        <Box className='rounded bg-purple-600 p-3 text-white'>Item B</Box>
        <Box className='rounded bg-purple-700 p-3 text-white'>Item C</Box>
      </>
    ),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId('box')[0];
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(100);
    await expect(args.onClick).toBeCalled();
  },
};
