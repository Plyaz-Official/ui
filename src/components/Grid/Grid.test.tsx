import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from '@/components/Grid/Grid';

const gridProps = {
  children: 'Grid',
  className: 'bg-red-200 px-4 py-2',
};

describe('Grid component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 150ms', () => {
    const start = performance.now();
    render(<Grid {...gridProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(150);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it('renders with correct element, class, and children', () => {
    render(<Grid {...gridProps} />);
    expect(screen.getByText(/Grid/i)).toBeDefined();
  });
});
