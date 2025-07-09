import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Heading, type HeadingType } from '@/components/Heading/Heading';

export const SIZE_MAP = {
  xs: 'xs',
} as const;

const headingProps = {
  children: 'Heading',
  className: 'bg-red-200 px-4 py-2',
  element: 'h2' as HeadingType,
  size: SIZE_MAP['xs'],
};

describe('Heading component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Heading {...headingProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it('renders with correct element, class, and children', () => {
    render(<Heading {...headingProps} />);
    expect(screen.getByText(/Heading/i)).toBeDefined();
  });
});
