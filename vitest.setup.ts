import '@plyaz/devtools/configs/vitest.setup.mjs';
import '@testing-library/jest-dom';

import { vi } from 'vitest';

// Mock next-intl for translation components
export const mockNextIntl = () => {
  vi.mock('next-intl', () => ({
    useTranslations: vi.fn(() => {
      return (key: string) => {
        // Return the key as fallback, or mock specific translations
        if (key === 'components.LanguageSelector.label') {
          return 'Language';
        }
        if (key === 'LanguageSelector.label') {
          return 'Language';
        }
        return key;
      };
    }),
  }));
};
