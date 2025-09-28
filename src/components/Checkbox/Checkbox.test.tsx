import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    render(<Checkbox />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(150);
  });

  it('renders checkbox with default props', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
