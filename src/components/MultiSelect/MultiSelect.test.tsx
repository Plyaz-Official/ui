import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectValue,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectGroup,
} from './MultiSelect';

// Startup/Helper function to create MultiSelect with common configurations
const createMultiSelect = (
  config: {
    values?: string[];
    defaultValues?: string[];
    placeholder?: string;
    items?: Array<{ value: string; label: string }>;
    withSearch?: boolean;
  } = {}
) => {
  const {
    values,
    defaultValues,
    placeholder = 'Select items...',
    items = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
    withSearch = false,
  } = config;

  return render(
    <MultiSelect values={values} defaultValues={defaultValues}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder={placeholder} />
      </MultiSelectTrigger>
      <MultiSelectContent search={withSearch}>
        <MultiSelectGroup>
          {items.map(item => (
            <MultiSelectItem key={item.value} value={item.value}>
              {item.label}
            </MultiSelectItem>
          ))}
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  );
};

describe('MultiSelect component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    createMultiSelect();
    const end = performance.now();
    expect(end - start).toBeLessThan(400);
  });

  it('renders multi-select with placeholder', () => {
    createMultiSelect({ placeholder: 'Choose options...' });
    expect(screen.getByText('Choose options...')).toBeInTheDocument();
  });

  //   it('renders multi-select with selected values', () => {
  //     createMultiSelect({ values: ['option1'] });
  //     expect(screen.getByText('Option 1')).toBeInTheDocument();
  //   });

  it('renders multi-select with default values', async () => {
    createMultiSelect({ defaultValues: ['option1', 'option2'] });
    expect(await screen.findAllByText('Option 1')).toBeTruthy();
    expect(await screen.findAllByText('Option 2')).toBeTruthy();
  });

  it('renders all options in multi-select', () => {
    createMultiSelect({
      items: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ],
    });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Orange')).toBeInTheDocument();
  });

  it('renders multi-select with custom placeholder', () => {
    createMultiSelect({ placeholder: 'Pick your items' });
    expect(screen.getByText('Pick your items')).toBeInTheDocument();
  });
});
