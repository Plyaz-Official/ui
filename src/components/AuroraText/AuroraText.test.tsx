import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AuroraText } from './AuroraText';

describe('Aurora Text component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<AuroraText className='px-4'> Text</AuroraText>);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
});
