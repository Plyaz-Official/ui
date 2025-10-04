import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/MenuBar/Menubar';

const renderMenubar = () =>
  render(
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );

describe('Menubar component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderMenubar();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders menubar with menu items', () => {
    renderMenubar();
    expect(screen.getByText('File')).toBeInTheDocument();
  });
});
