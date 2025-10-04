import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';

const renderTable = () =>
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

describe('Table component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderTable();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });

  it('renders table with default props', () => {
    renderTable();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
