import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu';

const renderDropdownMenu = () =>
  render(
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Test Item</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

describe('DropdownMenu component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderDropdownMenu();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });

  it('renders dropdown menu with trigger', () => {
    renderDropdownMenu();
    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });
});
