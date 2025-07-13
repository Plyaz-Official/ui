import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Box, Grid } from '@/components';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Grid component that allows for flexible layout using CSS Grid. It supports responsive columns, rows, and gaps.',
      },
    },
  },
  argTypes: {
    cols: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'CSS classes for grid columns.',
    },
    rows: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'CSS classes for grid rows.',
    },
    gap: {
      control: 'text',
      description: 'CSS classes for grid gap.',
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],

      description: 'CSS classes for justify content.',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
      description: 'CSS classes for align items.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Grid.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Grid.',
    },
    element: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'nav', 'header', 'footer', 'main', 'span'],
      description: "The HTML element to render as the Grid. Defaults to 'div'.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const TwoColumnGrid: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`rounded bg-green-400 p-3 text-white`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
    cols: '1',
    rows: '2',
    gap: '4',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const ThreeColumnGrid: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`rounded bg-green-400 p-3 text-white`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
    cols: '3',
    rows: '1',
    gap: '6',
    justify: 'center',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`rounded bg-green-400 p-3 text-white`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
    cols: '3',
    rows: '1',
    gap: '6',
    justify: 'center',
    onClick: fn(),
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
