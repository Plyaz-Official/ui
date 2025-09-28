import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';

describe('Command component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Test">
            <CommandItem>Test Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(200);
  });

  it('renders command with input and list', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Test">
            <CommandItem>Test Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });
});
