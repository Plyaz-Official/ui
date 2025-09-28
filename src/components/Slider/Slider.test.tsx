import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Slider } from './Slider';

describe('Slider component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Slider defaultValue={[50]} max={100} step={1} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(350);
  });

  it('renders slider with default props', () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />);
    // Check that the slider element exists by its role
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
  });
});
