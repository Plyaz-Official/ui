import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Input from './Input';

describe('Input component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Input type='email' className='px-4' />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
});
