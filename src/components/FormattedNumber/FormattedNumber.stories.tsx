import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { FormattedNumber } from '@/components';

const meta: Meta<typeof FormattedNumber> = {
  title: 'Typography/FormattedNumber',
  component: FormattedNumber,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A FormattedNumber component that displays numbers with proper formatting using internationalization and extends the Text component.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'The numeric value to format and display.',
    },
    formatOptions: {
      control: { type: 'object' },
      description: 'Options for number formatting (Intl.NumberFormatOptions).',
    },
    locale: {
      control: 'select',
      options: ['en', 'es', 'fr', 'it', 'pt-BR', 'pt-PT'],
      description: 'Locale for number formatting.',
    },
    element: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The HTML element to render as the Text.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Text.',
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

type Story = StoryObj<typeof FormattedNumber>;

export const Default: Story = {
  args: {
    value: 1234.56,
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const Currency: Story = {
  args: {
    value: 1234.56,
    formatOptions: {
      style: 'currency',
      currency: 'USD',
    },
    element: 'p',
    size: 'lg',
    variant: 'body',
    weight: 'semibold',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const Percentage: Story = {
  args: {
    value: 0.1234,
    formatOptions: {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const LargeNumber: Story = {
  args: {
    value: 1234567.89,
    formatOptions: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    element: 'p',
    size: 'xl',
    variant: 'heading',
    weight: 'bold',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const DifferentLocale: Story = {
  args: {
    value: 1234.56,
    formatOptions: {
      style: 'currency',
      currency: 'EUR',
    },
    locale: 'es',
    element: 'p',
    size: 'base',
    variant: 'body',
    weight: 'normal',
    className: 'bg-white dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    value: 999.99,
    formatOptions: {
      style: 'currency',
      currency: 'USD',
    },
    element: 'p',
    size: 'lg',
    variant: 'body',
    weight: 'semibold',
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
