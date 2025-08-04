import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './AlertDialog';

describe('AlertDialog Component', () => {
  const setup = () =>
    render(
      <AlertDialog>
        <AlertDialogTrigger data-testid='openDialog'>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction data-testid='continue'>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

  it('renders under 100ms', () => {
    const start = performance.now();
    setup();
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(100);
  });

  it('opens the dialog and shows the Continue button when trigger is clicked', async () => {
    setup();

    await userEvent.click(screen.getByTestId('openDialog'));

    expect(screen.getByTestId('continue')).toBeInTheDocument();
  });
});
