import type { Preview } from '@storybook/react';
import { resources } from '@plyaz/translations';
import { NextIntlClientProvider } from 'next-intl';

import { autoDocsTemplate } from '../src/docs/DocTemplate';

import { allModes } from './mode';

import '../src/global.css';

/**
 * This  globalType adds a light/dark mode menu in the Storybook toolbar,
 * allowing developers and designers to preview components under different themes.
 * Key Features:
 * - `defaultValue` sets the initial theme
 * - `toolbar.items` defines available theme options
 * - `dynamicTitle` enables real-time updates in the toolbar label
 * The selected theme is passed to the `withThemeProvider` decorator for consistent theming.
 */

export const globalTypes = {
  theme: {
    name: 'Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      return (
        <NextIntlClientProvider locale='en' messages={resources['en']}>
          <div className={theme}>
            <Story />
          </div>
        </NextIntlClientProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: allModes,
      defaultViewport: allModes.laptop_xl,
    },
    chromatic: {
      diffThreshold: 0.02,
      autoAcceptChanges: false,
      captureBeyondViewport: false,
      diffIncludeAntiAliasing: false,
      delay: 1000,
      modes: {
        Mobile: allModes.mobile_xs,
        Tablet: allModes.tablet_lg,
        Desktop: allModes.laptop_xl,
      },
    },
    docs: {
      page: autoDocsTemplate,
    },
  },
};
export default preview;
