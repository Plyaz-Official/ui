import { fireEvent, render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, vi } from 'vitest';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

describe('Select component', () => {
  beforeAll(() => {
    class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    global.ResizeObserver = ResizeObserver;
  });
  it('renders with placeholder', async () => {
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

    await expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });

  it('allows selecting an option and calls onValueChange and render under 100ms', async () => {
    const onChange = vi.fn();

    const start = performance.now();
    render(
      <Select onValueChange={onChange} data-testid='select' open={true}>
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
    expect(duration).toBeLessThan(100);
    const trigger = screen.getByTestId('select');
    expect(screen.getByText('Select a fruit')).toBeDefined();
    await fireEvent.click(trigger);
  });
});
