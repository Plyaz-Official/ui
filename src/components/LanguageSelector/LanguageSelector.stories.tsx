import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import LanguageSelector from './LanguageSelector';

type Story = StoryObj<typeof LanguageSelector>;

const meta: Meta<typeof LanguageSelector> = {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`LanguageSelector` is a specialized Select component for switching between available locales. It provides a dropdown interface for users to change the application\'s language with proper routing and maintains the current page context during language changes.',
      },
    },
  },
  argTypes: {
    locale: {
      control: 'text',
      description: 'Current selected locale.',
    },
    locales: {
      control: 'object',
      description: 'Array of available locale codes.',
    },
    onChange: {
      action: 'changed',
      description: 'Called when user selects a new locale.',
    },
    getLabel: {
      description: 'Function to get display label for a locale code.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the language selector during transitions.',
    },
  },
};

export default meta;

const mockLocales = ['en', 'es', 'fr', 'de', 'pt'];
const mockGetLabel = (locale: string) => {
  const labels: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    pt: 'Português',
  };
  return labels[locale] || locale;
};

// Default LanguageSelector
export const Default: Story = {
  args: {
    locale: 'en',
    locales: mockLocales,
    onChange: fn(),
    getLabel: mockGetLabel,
  },
  render: args => (
    <LanguageSelector {...args} />
  ),
};

// With different current locale
export const SpanishSelected: Story = {
  args: {
    locale: 'es',
    locales: mockLocales,
    onChange: fn(),
    getLabel: mockGetLabel,
  },
  render: args => (
    <LanguageSelector {...args} />
  ),
};

// Disabled state (during transition)
export const Disabled: Story = {
  args: {
    locale: 'en',
    locales: mockLocales,
    onChange: fn(),
    getLabel: mockGetLabel,
    disabled: true,
  },
  render: args => (
    <LanguageSelector {...args} />
  ),
};

// Minimal locales
export const MinimalLocales: Story = {
  args: {
    locale: 'en',
    locales: ['en', 'es'],
    onChange: fn(),
    getLabel: mockGetLabel,
  },
  render: args => (
    <LanguageSelector {...args} />
  ),
};

// Custom label function
export const CustomLabels: Story = {
  args: {
    locale: 'en',
    locales: mockLocales,
    onChange: fn(),
    getLabel: (locale: string) => locale.toUpperCase(),
  },
  render: args => (
    <LanguageSelector {...args} />
  ),
};

// User interaction test
export const UserInteraction: Story = {
  args: {
    locale: 'en',
    locales: mockLocales,
    onChange: fn(),
    getLabel: mockGetLabel,
  },
  render: args => (
    <LanguageSelector {...args} />
  ),
  play: async ({ canvasElement, args }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      const start = performance.now();
      await userEvent.click(button);
      const end = performance.now();
      const duration = end - start;
      const expectDuration = 200;
      await expect(duration).toBeLessThan(expectDuration);
      
      // Test selecting a different locale
      const spanishOption = canvasElement.querySelector('[data-value="es"]');
      if (spanishOption) {
        await userEvent.click(spanishOption);
        await expect(args.onChange).toBeCalledWith('es');
      }
    }
  },
}; 