import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Badge>Test Badge</Badge>);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders badge with different variants correctly', () => {
    render(
      <div>
        <Badge>Default</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='destructive'>Destructive</Badge>
        <Badge variant='outline'>Outline</Badge>
      </div>
    );

    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
    expect(screen.getByText('Destructive')).toBeInTheDocument();
    expect(screen.getByText('Outline')).toBeInTheDocument();
  });
});
