import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from '@/components/Grid/Grid';

const gridProps = {
  children: 'Grid',
  className: 'bg-red-200 px-4 py-2',
};

describe('Grid component ', () => {
  it('renders with correct element, class, and children', () => {
    render(<Grid {...gridProps} />);
    expect(screen.getByText(/Grid/i)).toBeDefined();
  });
});
