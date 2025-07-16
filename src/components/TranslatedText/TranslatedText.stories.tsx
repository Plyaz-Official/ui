import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import TranslatedText from './TranslatedText';

const meta: Meta<typeof TranslatedText> = {
  title: 'Typography/TranslatedText',
  component: TranslatedText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Text component that uses translations via useTranslation hook.',
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
    translationKey: {
      control: { type: 'text' },
      description: 'Translation key to lookup.',
    },
    translationOptions: {
      control: { type: 'object' },
      description: 'Translation options (interpolation, defaultValue, etc).',
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
    namespace: {
      control: { type: 'text' },
      description: 'Translation namespace (optional).',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TranslatedText>;

export const Body: Story = {
  args: {
    translationKey: 'common.hello',
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};
export const Heading: Story = {
  args: {
    translationKey: 'common.farewell',
    element: 'h1',
    size: '2xl',
    variant: 'heading',
    weight: 'bold',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};
export const Caption: Story = {
  args: {
    translationKey: 'common.hello',
    element: 'p',
    size: 'sm',
    variant: 'caption',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const WithInterpolation: Story = {
  args: {
    translationKey: 'common.greeting',
    translationOptions: { args: { name: 'Martin' } },
    element: 'span',
    size: 'lg',
    variant: 'body',
    weight: 'medium',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    translationKey: 'common.hello',
    element: 'p',
    size: 'sm',
    variant: 'caption',
    weight: 'normal',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getByTestId('text');
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(100);
    await expect(args.onClick).toBeCalled();
  },
};

export const WithPriceInterpolation: Story = {
  args: {
    translationKey: 'common.price',
    translationOptions: { args: { price: '29.99' } },
    element: 'span',
    size: 'lg',
    variant: 'body',
    weight: 'semibold',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const WithDateInterpolation: Story = {
  args: {
    translationKey: 'common.ordered',
    translationOptions: { 
      args: { orderDate: '2024-01-15' }
    },
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const WithFollowersCount: Story = {
  args: {
    translationKey: 'common.followers.other',
    translationOptions: { args: { count: '42' } },
    element: 'span',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};
