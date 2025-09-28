import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Separator } from './Separator';

describe('Separator component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Separator />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders separator with default props', () => {
    render(<Separator />);
    const separator = document.querySelector('[data-slot="separator"]');
    expect(separator).toBeInTheDocument();
  });
});
