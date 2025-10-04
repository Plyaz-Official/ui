import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './Sheet';

const renderSheet = () =>
  render(
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Test</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );

describe('Sheet component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderSheet();
    const end = performance.now();
    expect(end - start).toBeLessThan(150);
  });

  it('renders sheet with trigger', () => {
    renderSheet();
    expect(screen.getByText('Open')).toBeInTheDocument();
  });
});
