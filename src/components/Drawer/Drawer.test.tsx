import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';

const renderDrawer = () =>
  render(
    <Drawer>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Test Drawer</DrawerTitle>
          <DrawerDescription>Test description</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );

describe('Drawer component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    renderDrawer();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders drawer with trigger', () => {
    renderDrawer();
    expect(screen.getByText('Open Drawer')).toBeInTheDocument();
  });
});
