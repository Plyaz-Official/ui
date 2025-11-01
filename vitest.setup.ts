import '@plyaz/devtools/configs/vitest.setup.mjs';
import '@testing-library/jest-dom';
import { mockNextIntl } from '@plyaz/translations/testing';
import { beforeEach } from 'vitest';
import { AnimationUtils } from '@plyaz/testing/utils';

mockNextIntl();

// Mock IntersectionObserver and ResizeObserver
beforeEach(() => {
  AnimationUtils.setupObserverMocks();
});
