import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import FormattedNumber from '@/components/FormattedNumber/FormattedNumber';
import type { TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from '@/constants/constant';

// // Mock the @plyaz/translations/frontend module
// vi.mock('@plyaz/translations', () => ({
//   formatNumber: (value: number, options?: Intl.NumberFormatOptions) => {
//     return new Intl.NumberFormat('en-US', options).format(value);
//   },
// }));

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const formattedNumberProps = {
  value: 1234.56,
  className: 'bg-red-200 px-4 py-2',
  element: 'h1' as TextElement,
  variant: 'body' as keyof typeof VARIANT_MAPPER,
  weight: 'light' as keyof typeof TEXT_WEIGHT_MAPPER,
};

describe('FormattedNumber component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<FormattedNumber {...formattedNumberProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  // Unit test to check if the component renders with the correct element, class, and formatted value
  it('renders with correct element, class, and formatted value', () => {
    render(<FormattedNumber {...formattedNumberProps} />);
    expect(screen.getByText(/1,234\.56/i)).toBeDefined();
  });

  // Test currency formatting
  it('formats currency correctly', () => {
    render(
      <FormattedNumber
        {...formattedNumberProps}
        value={999.99}
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
      />
    );
    expect(screen.getByText(/\$999\.99/i)).toBeDefined();
  });

  // Test percentage formatting
  it('formats percentage correctly', () => {
    render(
      <FormattedNumber
        {...formattedNumberProps}
        value={0.1234}
        formatOptions={{
          style: 'percent',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      />
    );
    expect(screen.getByText(/12\.34%/i)).toBeDefined();
  });

  // Test different locale
  it('formats with different locale correctly', () => {
    render(
      <FormattedNumber
        {...formattedNumberProps}
        value={1234.56}
        formatOptions={{
          style: 'currency',
          currency: 'EUR',
        }}
        locale='de-DE'
      />
    );
    // German locale with EUR currency - expect 1.234,56 € (symbol at end)
    expect(screen.getByText(/1\.234,56 €/i)).toBeDefined();
  });

  // Test large number formatting
  it('formats large numbers correctly', () => {
    render(
      <FormattedNumber
        {...formattedNumberProps}
        value={1234567.89}
        formatOptions={{
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      />
    );
    expect(screen.getByText(/1,234,567\.89/i)).toBeDefined();
  });
});
