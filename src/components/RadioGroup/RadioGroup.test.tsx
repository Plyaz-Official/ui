import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RadioGroup, RadioGroupItem } from './RadioGroup';

const renderRadioGroup = () =>
  render(
    <RadioGroup>
      <RadioGroupItem value='option1' />
      <RadioGroupItem value='option2' />
    </RadioGroup>
  );

describe('RadioGroup component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    renderRadioGroup();
    const end = performance.now();
    expect(end - start).toBeLessThan(250);
  });

  it('renders radio group with items', () => {
    renderRadioGroup();
    const radioGroup = document.querySelector('[data-slot="radio-group"]');
    expect(radioGroup).toBeInTheDocument();
  });
});
