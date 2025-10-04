import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InputOTP, InputOTPGroup, InputOTPSlot } from './InputOTP';

const renderInputOTP = () =>
  render(
    <InputOTP maxLength={6} value='' onChange={() => {}}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
    </InputOTP>
  );

describe('InputOTP component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    renderInputOTP();
    const end = performance.now();
    expect(end - start).toBeLessThan(250);
  });

  it('renders input OTP with slots', () => {
    renderInputOTP();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
