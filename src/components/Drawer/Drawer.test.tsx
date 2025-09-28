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

describe('Drawer component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
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
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders drawer with trigger', () => {
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

    expect(screen.getByText('Open Drawer')).toBeInTheDocument();
  });
});
