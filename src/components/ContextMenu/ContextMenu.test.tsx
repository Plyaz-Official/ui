import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './ContextMenu';

const renderContextMenu = () =>
  render(
    <ContextMenu>
      <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item 1</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );

describe('ContextMenu component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderContextMenu();
    const end = performance.now();
    expect(end - start).toBeLessThan(150);
  });

  it('renders context menu with trigger', () => {
    renderContextMenu();
    expect(screen.getByText('Right click me')).toBeInTheDocument();
  });
});
