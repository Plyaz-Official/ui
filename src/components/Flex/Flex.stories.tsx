import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Box, Flex } from '@/components';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Flex component that provides a flexible box layout system. It allows you to easily align and distribute space among items in a Box.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const FlexItemsStart: Story = {
  args: {
    direction: 'row',
    justify: 'start',
    align: 'start',
    wrap: 'wrap',
    gap: '2',
    className: 'bg-gray-100 p-4 rounded dark:bg-black dark:text-white',
    children: (
      <>
        {Array.from({ length: 6 }, (_, i) => (
          <Box key={i} className={`rounded bg-blue-400 p-3 text-white`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Direction of the flex items.',
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      description: 'Justify content alignment.',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
      description: 'Align items vertically.',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior.',
    },
    gap: {
      control: { type: 'text' },
      description: 'Tailwind CSS gap classes for spacing between items.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Flex container.',
    },
    element: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'nav', 'header', 'footer', 'main', 'span'],
      description: 'The HTML element to render as the Flex container. Defaults to `div`.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Flex container.',
    },
  },
};
export const FlexItemsCenter: Story = {
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: '4',
    className: 'bg-gray-200 p-4 rounded dark:bg-black dark:text-white',
    element: 'div',
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`rounded bg-green-400 p-3 text-white`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
  },
};

export const UserInteraction: Story = {
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: '4',
    className: 'bg-gray-200 p-4 rounded',
    element: 'div',
    onClick: fn(),
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`rounded bg-green-400 p-3 text-white`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId('box')[0];
    const performanceTime = 200;
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(performanceTime);
    await expect(args.onClick).toBeCalled();
  },
};
