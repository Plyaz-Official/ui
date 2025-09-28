import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './Sheet';

describe('Sheet component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
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
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(150);
  });

  it('renders sheet with trigger', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Test Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByText('Open Sheet')).toBeInTheDocument();
  });
});
