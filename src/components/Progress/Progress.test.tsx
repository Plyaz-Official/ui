import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Progress } from './Progress';

describe('Progress component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Progress value={50} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders progress bar with value', () => {
    render(<Progress value={50} />);

    const progress = document.querySelector('[data-slot="progress"]');
    expect(progress).toBeInTheDocument();
  });
});
