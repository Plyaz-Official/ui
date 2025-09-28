import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from './Pagination';

describe('Pagination component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
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
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders pagination with content', () => {
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

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
