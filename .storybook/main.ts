import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mdx|ts|tsx)', '../tailwind.config.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    'storybook-addon-tailwind-autodocs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [...(config.plugins || [])],
      build: {
        sourcemap: "hidden",
      },
    };
  },
};
export default config;
