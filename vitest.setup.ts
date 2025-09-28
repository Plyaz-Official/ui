import '@plyaz/devtools/configs/vitest.setup.mjs';
import '@testing-library/jest-dom';
import { mockNextIntl } from '@plyaz/translations/testing';
import { beforeEach, vi } from 'vitest';

mockNextIntl();

// Mock IntersectionObserver and ResizeObserver
beforeEach(() => {
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});
