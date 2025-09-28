import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Combobox, type ComboboxOption } from './Combobox';

const mockOptions: ComboboxOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Combobox component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    render(<Combobox options={mockOptions} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(200);
  });

  it('renders combobox with options', () => {
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('Select option...');
  });
});
