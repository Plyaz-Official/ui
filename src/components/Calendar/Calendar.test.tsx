import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Calendar } from './Calendar';

describe('Calendar component', () => {
  it('renders under 500ms', () => {
    const start = performance.now();
    render(<Calendar mode="single" />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(500);
  });

  it('renders calendar with default props', () => {
    render(<Calendar mode="single" />);

    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });
});
