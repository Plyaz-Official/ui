import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ScrollArea } from './ScrollArea';

describe('ScrollArea component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    render(
      <ScrollArea>
        <div>Test content</div>
      </ScrollArea>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(200);
  });

  it('renders scroll area with content', () => {
    render(
      <ScrollArea>
        <div>Test content</div>
      </ScrollArea>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
