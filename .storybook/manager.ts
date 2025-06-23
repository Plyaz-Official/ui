import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
// import theme from "./theme";
addons.setConfig({
  // TODO: We are gonna pass custom theme as per Figma in the next PRs here
  theme: themes.light,
});
