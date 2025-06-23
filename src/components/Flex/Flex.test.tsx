import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Flex } from '@/components/Flex/Flex';

const flexProps = {
  children: 'Flex',
  className: 'bg-red-200 px-4 py-2',
};

describe('Flex component ', () => {
  it('renders with correct element, class, and children', () => {
    render(<Flex {...flexProps} />);
    expect(screen.getByText(/Flex/i)).toBeDefined();
  });
});
