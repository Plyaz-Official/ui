import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

describe('Select component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
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
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(300);
  });

  it('renders select with placeholder', () => {
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

    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });
});
