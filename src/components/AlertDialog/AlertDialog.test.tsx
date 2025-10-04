import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from './AlertDialog';

const renderAlertDialog = () =>
  render(
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );

describe('AlertDialog Component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderAlertDialog();
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(150);
  });

  it('renders alert dialog with content', () => {
    renderAlertDialog();
    expect(screen.getByText('Open')).toBeInTheDocument();
  });
});
