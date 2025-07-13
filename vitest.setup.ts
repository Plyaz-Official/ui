import '@plyaz/devtools/configs/vitest.setup.mjs';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('@plyaz/translations/frontend', () => ({
  useTranslation: () => ({
    t: (key: string) => `translated:${key}`,
  }),
}));
