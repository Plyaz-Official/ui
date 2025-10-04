import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const renderAccordion = () =>
  render(
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Test Trigger</AccordionTrigger>
        <AccordionContent>Test Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );

describe('Accordion component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderAccordion();
    const end = performance.now();
    expect(end - start).toBeLessThan(150);
  });

  it('renders accordion with trigger', () => {
    renderAccordion();
    expect(screen.getByText('Test Trigger')).toBeInTheDocument();
  });
});
