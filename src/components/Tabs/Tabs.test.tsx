import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Tabs component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    render(
      <Tabs defaultValue='tab1'>
        <TabsList>
          <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
          <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1'>
          <div>Content 1</div>
        </TabsContent>
        <TabsContent value='tab2'>
          <div>Content 2</div>
        </TabsContent>
      </Tabs>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(150);
  });

  it('renders tabs with default props', () => {
    render(
      <Tabs defaultValue='tab1'>
        <TabsList>
          <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
          <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1'>
          <div>Content 1</div>
        </TabsContent>
        <TabsContent value='tab2'>
          <div>Content 2</div>
        </TabsContent>
      </Tabs>
    );

    const tabsElement = screen.getByRole('tablist');
    expect(tabsElement).toBeInTheDocument();
  });
});
