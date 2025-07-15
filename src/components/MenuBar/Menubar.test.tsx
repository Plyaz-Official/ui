import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarSeparator,
  MenubarItem,
  MenubarShortcut,
} from '@/components/MenuBar/Menubar';

describe('Menubar component ', () => {
  beforeAll(() => {
    class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    global.ResizeObserver = ResizeObserver;
  });
  // Performance test to ensure the component renders quickly
  it('renders under 300ms', () => {
    const start = performance.now();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(300);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it('renders MenubarContent after clicking MenubarTrigger', async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger data-testid='menuitem'>File</MenubarTrigger>
          <MenubarContent data-testid='share'>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const menuItem = screen.getByTestId('menuitem');

    const user = userEvent.setup();
    await user.click(menuItem);

    const share = await screen.findByTestId('share');
    expect(share).toBeInTheDocument();
  });
});
