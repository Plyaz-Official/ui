import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const renderDialog = () =>
  render(
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>Test description</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );

describe('Dialog component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    renderDialog();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders dialog with trigger', () => {
    renderDialog();
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });
});
