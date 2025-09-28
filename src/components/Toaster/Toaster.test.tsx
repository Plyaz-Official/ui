import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Toaster } from './Toaster';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}));

// Mock sonner
vi.mock('sonner', () => ({
  toast: vi.fn(),
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Toaster: ({ children, ...props }: any) => (
    <div data-testid='toaster' {...props}>
      {children}
    </div>
  ),
}));

describe('Toaster component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Toaster />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders toaster with default props', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('toaster');
    expect(toaster).toBeInTheDocument();
  });
});
