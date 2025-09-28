import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Toggle } from './Toggle';

describe('Toggle component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Toggle aria-label='Test toggle' />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders toggle with default props', () => {
    render(<Toggle aria-label='Test toggle' />);

    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toBeInTheDocument();
  });
});
