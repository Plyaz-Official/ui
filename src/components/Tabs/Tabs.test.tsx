import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const renderTabs = () =>
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

describe('Tabs component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    renderTabs();
    const end = performance.now();
    expect(end - start).toBeLessThan(150);
  });

  it('renders tabs with default props', () => {
    renderTabs();
    const tabsElement = screen.getByRole('tablist');
    expect(tabsElement).toBeInTheDocument();
  });
});
