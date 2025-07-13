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
    translationKey: 'common.price',
    tag: 'div',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
  parameters: {
    mockData: {
      translations: {
        welcome_message: 'Welcome to <strong>Our App</strong>',
      },
    },
  },
};

export const WithOptions: Story = {
  args: {
    translationKey: 'common.price',
    translationOptions: { args: { url: '/help', text: 'here' } },
    tag: 'p',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
  parameters: {
    mockData: {
      translations: {
        click_here: 'Click <a href="{url}">{text}</a> for more information',
      },
    },
  },
};

export const CustomTag: Story = {
  args: {
    translationKey: 'common.price',
    tag: 'h2',
    className: 'bg-white dark:bg-black dark:text-white p-4',
  },
  parameters: {
    mockData: {
      translations: {
        section_title: 'This is a <em>section</em> title',
      },
    },
  },
};

export const WithStyling: Story = {
  args: {
    translationKey: 'common.price',
    tag: 'div',
    className: 'bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border',
  },
  parameters: {
    mockData: {
      translations: {
        styled_content:
          'This content has <span class="text-red-500 font-bold">styled elements</span> and <a href="/docs" class="text-blue-600 hover:underline">links</a>.',
      },
    },
  },
};

export const ComplexContent: Story = {
  args: {
    translationKey: 'common.price',
    translationOptions: {
      interpolation: {
        username: 'John',
        count: '5',
        link: '/profile',
      },
    },
    tag: 'article',
    className: 'bg-white dark:bg-black dark:text-white p-4 max-w-md',
  },
  parameters: {
    mockData: {
      translations: {
        complex_message:
          'Hello <strong>{username}</strong>! You have <span class="text-green-600 font-semibold">{count}</span> new messages. <a href="{link}" class="text-blue-600 hover:underline">View profile</a>',
      },
    },
  },
};

export const UserInteraction: Story = {
  args: {
    translationKey: 'common.price',
    tag: 'div',
    className: 'bg-white dark:bg-black dark:text-white p-4 cursor-pointer',
  },
  parameters: {
    mockData: {
      translations: {
        interactive_content:
          'Click <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">this button</button> to interact',
      },
    },
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
