import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Popover, PopoverTrigger, PopoverContent } from './Popover';

describe('Popover component', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
});
