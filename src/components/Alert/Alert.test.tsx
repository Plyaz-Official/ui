import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Alert, AlertTitle, AlertDescription } from './Alert';

const renderAlert = () =>
  render(
    <Alert>
      <AlertTitle>Test Title</AlertTitle>
      <AlertDescription>Test Description</AlertDescription>
    </Alert>
  );

describe('Alert component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderAlert();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });

  it('renders alert with title and description', () => {
    renderAlert();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
