import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import FormattedNumber from '@/components/FormattedNumber/FormattedNumber';
import type { TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from '@/constants/constant';

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const formattedNumberProps = {
  value: 1234.56,
  className: 'bg-red-200 px-4 py-2',
  element: 'h1' as TextElement,
  variant: 'body' as keyof typeof VARIANT_MAPPER,
  weight: 'light' as keyof typeof TEXT_WEIGHT_MAPPER,
};

describe('FormattedNumber component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    render(<FormattedNumber {...formattedNumberProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(300);
  });

  it('renders with correct element, class, and formatted value', () => {
    render(<FormattedNumber {...formattedNumberProps} />);
    expect(screen.getByText(/1,234\.56/i)).toBeDefined();
  });
});
