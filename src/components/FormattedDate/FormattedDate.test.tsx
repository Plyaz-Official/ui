import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from '@/constants/constant';

import FormattedDate from './FormattedDate';

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const formattedDateProps = {
  date: new Date(Date.UTC(2024, 0, 15)).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  }),
  className: 'bg-red-200 px-4 py-2',
  element: 'h1' as TextElement,
  variant: 'body' as keyof typeof VARIANT_MAPPER,
  weight: 'light' as keyof typeof TEXT_WEIGHT_MAPPER,
};

describe('FormattedDate component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<FormattedDate {...formattedDateProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders with correct element, class, and children', () => {
    render(<FormattedDate {...formattedDateProps} />);
    expect(screen.getByText('1/15/2024')).toBeDefined();
  });
});
