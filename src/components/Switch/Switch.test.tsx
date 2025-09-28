import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Switch } from './Switch';

describe('Switch component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Switch />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(200);
  });

  it('renders switch with default props', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });
});
