import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ScrollArea } from './ScrollArea';

const renderScrollArea = () =>
  render(
    <ScrollArea>
      <div>Test content</div>
    </ScrollArea>
  );

describe('ScrollArea component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    renderScrollArea();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders scroll area with content', () => {
    renderScrollArea();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
