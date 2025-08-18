import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Text } from '@/components';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A versatile Text component that supports different semantic elements, sizes, weights, and variants using Tailwind CSS.',
      },
    },
  },
  argTypes: {
    element: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML element to render as the Text.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Text.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Text.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'],
      description: 'Size of the text.',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold', 'light'],
      description: 'Font weight of the text.',
    },
    variant: {
      control: 'select',
      options: ['body', 'heading', 'caption'],
      description: 'Variant of the text, which applies different styles.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    children: 'This is a paragraph',
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};
export const Heading: Story = {
  args: {
    children: 'This is a heading',
    element: 'h1',
    size: '2xl',
    variant: 'heading',
    weight: 'bold',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};
export const Caption: Story = {
  args: {
    children: 'This is a caption',
    element: 'p',
    size: 'sm',
    variant: 'caption',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    children: 'This is a caption',
    element: 'p',
    size: 'sm',
    variant: 'caption',
    weight: 'normal',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getByTestId('text');
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    const EXPECTED_DURATION = 100;
    await expect(duration).toBeLessThan(EXPECTED_DURATION);
    await expect(args.onClick).toBeCalled();
  },
};
