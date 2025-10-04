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

const renderCommand = () =>
  render(
    <Command>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Test'>
          <CommandItem>Test Item</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );

describe('Command component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    renderCommand();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders command with input and list', () => {
    renderCommand();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });
});
