import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from '@/components/Badge/Badge';

describe('Badge component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Badge>New</Badge>);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders with correct text content', () => {
    render(<Badge>Sale</Badge>);
    expect(screen.getByText('Sale')).toBeInTheDocument();
  });

  it('applies default styling class', () => {
    render(<Badge>Promo</Badge>);
    const badge = screen.getByText('Promo');
    expect(badge).toHaveClass('inline-flex'); // Update this based on your actual Tailwind class
  });

  it('renders with variant prop', () => {
    render(<Badge variant='destructive'>Error</Badge>);
    const badge = screen.getByText('Error');
    expect(badge.className).toMatch(/destructive/i);
  });
});
