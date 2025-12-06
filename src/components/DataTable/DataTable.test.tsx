import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { ColumnDef } from '@tanstack/react-table';

import { DataTable } from './DataTable';

type TestData = {
  id: string;
  name: string;
  value: number;
};

const testData: TestData[] = [
  { id: '1', name: 'Item 1', value: 100 },
  { id: '2', name: 'Item 2', value: 200 },
];

const columns: ColumnDef<TestData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'value',
    header: 'Value',
  },
];

const renderDataTable = () => render(<DataTable columns={columns} data={testData} />);

describe('DataTable component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderDataTable();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });

  it('renders table with data', () => {
    renderDataTable();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders empty state when no data', () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText('No results.')).toBeInTheDocument();
  });
});
