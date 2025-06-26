import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Box } from '@/components/Box/Box';
import type { ElementType } from '@/types/type';

const BoxProps = {
  children: 'React',
  element: 'div' as ElementType,
  className: 'text-xl font-bold',
};

describe('Box Component', () => {
  it('renders with correct element, class, and children', () => {
    render(<Box {...BoxProps} />);
    expect(screen.getByTestId('box')).toBeDefined();
    expect(screen.getByText(/React/i)).toBeDefined();
  });
});
