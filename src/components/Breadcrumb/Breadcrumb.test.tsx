import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './Breadcrumb';

const renderBreadcrumb = () =>
  render(
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

describe('Breadcrumb component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderBreadcrumb();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });

  it('renders breadcrumb with proper structure', () => {
    renderBreadcrumb();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
  });
});
