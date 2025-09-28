import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skeleton } from './Skeleton';

describe('Skeleton component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Skeleton className='h-4 w-[250px]' />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders skeleton with default classes', () => {
    render(<Skeleton />);
    // Check that the skeleton element exists by its role or class
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toBeInTheDocument();
  });
});
