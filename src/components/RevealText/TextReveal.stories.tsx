import type { Meta, StoryObj } from '@storybook/react';

import { TextReveal } from './TextReveal';

const meta: Meta<typeof TextReveal> = {
  title: 'Components/TextReveal',
  component: TextReveal,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the Text Reveal',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Text Reveal.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextReveal>;

export const Base: Story = {
  args: {
    children: 'Scroll to reveal each word as you move down the page.',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Custom styled scroll-based word animation.',
    className: 'text-center text-blue-500',
  },
};
