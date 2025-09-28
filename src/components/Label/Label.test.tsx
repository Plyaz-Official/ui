import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './Label';

describe('Label component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Label>Test Label</Label>);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders label with text content', () => {
    render(<Label>Test Label</Label>);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});
