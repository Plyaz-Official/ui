import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import FormattedDate from './FormattedDate';

const meta: Meta<typeof FormattedDate> = {
  title: 'Typography/FormattedDate',
  component: FormattedDate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A specialized Text component that formats and displays dates with internationalization support using the @plyaz/translations library.',
      },
    },
  },
  argTypes: {
    date: {
      control: { type: 'date' },
      description: 'The date to format. Can be a Date object, string, or number.',
    },
    formatOptions: {
      control: 'object',
      description: 'Intl.DateTimeFormatOptions for custom date formatting.',
    },
    locale: {
      control: 'select',
      options: ['en-US', 'es-ES', 'fr-FR', 'de-DE', 'ja-JP'],
      description: 'Locale for date formatting.',
    },
    element: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
      description: 'The HTML element to render as the Text.',
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

type Story = StoryObj<typeof FormattedDate>;

export const Default: Story = {
  args: {
    date: new Date('2024-01-15'),
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const CustomFormat: Story = {
  args: {
    date: new Date('2024-01-15'),
    formatOptions: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    element: 'p',
    size: 'lg',
    variant: 'body',
    weight: 'medium',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const DifferentLocales: Story = {
  args: {
    date: new Date('2024-01-15'),
    formatOptions: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    locale: 'es-ES',
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const ShortFormat: Story = {
  args: {
    date: new Date('2024-01-15'),
    formatOptions: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
    element: 'span',
    size: 'sm',
    variant: 'caption',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    date: new Date('2024-01-15'),
    element: 'p',
    size: 'base',
    variant: 'body',
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
    await expect(duration).toBeLessThan(100);
    await expect(args.onClick).toBeCalled();
  },
}; 