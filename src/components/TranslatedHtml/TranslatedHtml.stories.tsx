import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';

import TranslatedHtml from './TranslatedHtml';

const meta: Meta<typeof TranslatedHtml> = {
  title: 'Typography/TranslatedHtml',
  component: TranslatedHtml,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A component that renders translated content as HTML, allowing for embedded markup within translation keys while maintaining proper semantic structure.',
      },
    },
  },
  argTypes: {
    translationKey: {
      control: { type: 'text' },
      description: 'The translation key to render as HTML.',
    },
    translationOptions: {
      control: { type: 'object' },
      description: 'Options for dynamic content interpolation in the translation.',
    },
    namespace: {
      control: { type: 'text' },
      description: 'The translation namespace to use.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the wrapper element.',
    },
    tag: {
      control: 'select',
      options: ['div', 'p', 'span', 'section', 'article'],
      description: 'The HTML element to render as the wrapper.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TranslatedHtml>;

export const Default: Story = {
  args: {
    translationKey: 'common.hello',
    tag: 'div',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};

export const WithOptions: Story = {
  args: {
    translationKey: 'common.greeting',
    translationOptions: { args: { name: 'Martin' } },
    tag: 'p',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};

export const CustomTag: Story = {
  args: {
    translationKey: 'common.farewell',
    tag: 'h2',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};

export const WithStyling: Story = {
  args: {
    translationKey: 'common.hello',
    tag: 'div',
    className: 'bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border',
  },
};

export const ComplexContent: Story = {
  args: {
    translationKey: 'common.followers.other',
    translationOptions: {
      args: {
        count: '42',
      },
    },
    tag: 'article',
    className: 'bg-white dark:bg-black dark:text-white p-4 max-w-md',
  },
};

export const UserInteraction: Story = {
  args: {
    translationKey: 'common.hello',
    tag: 'div',
    className: 'bg-white dark:bg-black dark:text-white p-4 cursor-pointer',
  },
  play: async ({ canvas }) => {
    const container = canvas.getByTestId('translated-html');
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(100);
  },
};

export const WithPriceInterpolation: Story = {
  args: {
    translationKey: 'common.price',
    translationOptions: { args: { price: '29.99' } },
    tag: 'span',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};

export const WithDateInterpolation: Story = {
  args: {
    translationKey: 'common.ordered',
    translationOptions: {
      args: { orderDate: '2024-01-15' },
    },
    tag: 'p',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};

export const WithFollowersZero: Story = {
  args: {
    translationKey: 'common.followers.zero',
    tag: 'p',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};

export const WithFollowersOne: Story = {
  args: {
    translationKey: 'common.followers.one',
    tag: 'p',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
};
