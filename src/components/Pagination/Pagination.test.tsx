import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from './Pagination';

const renderPagination = () =>
  render(
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            1
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

describe('Pagination component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderPagination();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });

  it('renders pagination with content', () => {
    renderPagination();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
