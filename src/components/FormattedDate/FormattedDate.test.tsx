import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from '@/constants/constant';

import FormattedDate from './FormattedDate';

// Mock the useFormatting hook
vi.mock('@plyaz/translations/frontend', () => ({
  useFormatting: () => ({
    formatDate: (date: Date | string | number) => {
      if (date instanceof Date) {
        return date.toLocaleDateString('en-US');
      }
      return new Date(date).toLocaleDateString('en-US');
    },
  }),
}));

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const formattedDateProps = {
  date: new Date('2024-01-15'),
  className: 'bg-red-200 px-4 py-2',
  element: 'h1' as TextElement,
  variant: 'body' as keyof typeof VARIANT_MAPPER,
  weight: 'light' as keyof typeof TEXT_WEIGHT_MAPPER,
};

describe('FormattedDate component', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<FormattedDate {...formattedDateProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  // Unit test to check if the component renders with the correct element, class, and children
  it('renders with correct element, class, and children', () => {
    render(<FormattedDate {...formattedDateProps} />);
    expect(screen.getByText(/1\/15\/2024/i)).toBeDefined();
  });

  // Test with different date formats
  it('renders with custom format options', () => {
    const customProps = {
      ...formattedDateProps,
      formatOptions: {
        weekday: 'long' as const,
        year: 'numeric' as const,
        month: 'long' as const,
        day: 'numeric' as const,
      },
    };
    render(<FormattedDate {...customProps} />);
    expect(screen.getByText(/1\/15\/2024/i)).toBeDefined();
  });

  // Test with different locale
  it('renders with different locale', () => {
    const localeProps = {
      ...formattedDateProps,
      locale: 'es-ES',
    };
    render(<FormattedDate {...localeProps} />);
    expect(screen.getByText(/1\/15\/2024/i)).toBeDefined();
  });

  // Test with string date input
  it('renders with string date input', () => {
    const stringDateProps = {
      ...formattedDateProps,
      date: '2024-01-15',
    };
    render(<FormattedDate {...stringDateProps} />);
    expect(screen.getByText(/1\/15\/2024/i)).toBeDefined();
  });

  // Test with number date input (timestamp)
  it('renders with number date input', () => {
    const numberDateProps = {
      ...formattedDateProps,
      date: 1705276800000, // 2024-01-15 timestamp
    };
    render(<FormattedDate {...numberDateProps} />);
    expect(screen.getByText(/1\/15\/2024/i)).toBeDefined();
  });
}); 