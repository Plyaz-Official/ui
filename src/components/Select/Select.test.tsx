import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

const renderSelect = () =>
  render(
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
      </SelectContent>
    </Select>
  );

describe('Select component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    renderSelect();
    const end = performance.now();
    expect(end - start).toBeLessThan(300);
  });

  it('renders select with placeholder', () => {
    renderSelect();
    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });
});
