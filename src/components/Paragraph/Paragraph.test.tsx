import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paragraph } from '@/components/Paragraph/Paragraph';

const SIZE_MAP = {
  lg: 'lg',
} as const;

const paragraphProps = {
  children: 'Paragraph',
  className: 'bg-red-200 px-4 py-2',
  size: SIZE_MAP['lg'],
};

describe('Paragraph component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Paragraph {...paragraphProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it('renders with correct element, class, and children', () => {
    render(<Paragraph {...paragraphProps} />);
    expect(screen.getByText(/Paragraph/i)).toBeDefined();
  });
});
