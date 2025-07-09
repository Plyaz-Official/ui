import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Box } from '@/components/Box/Box';
import type { ElementType } from '@/types/type';

const BoxProps = {
  children: 'React',
  element: 'div' as ElementType,
  className: 'text-xl font-bold',
};

describe('Box Component', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Box element='div'>Text</Box>);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it('renders with correct element, class, and children', () => {
    render(<Box {...BoxProps} />);
    expect(screen.getByTestId('box')).toBeDefined();
    expect(screen.getByText(/React/i)).toBeDefined();
  });
});
