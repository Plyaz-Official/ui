import type { Preview } from "@storybook/react";
import { autoDocsTemplate } from "../src/docs/DocTemplate";
import "../src/index.css";
import { allModes } from "./mode";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: allModes,
      defaultViewport: allModes.default,
    },
    chromatic: {
      diffThreshold: 0.02,
      autoAcceptChanges: false,
      captureBeyondViewport: false,
      diffIncludeAntiAliasing: false,
      delay: 1000,
      modes: {
        Mobile: allModes.mobile_small,
        Tablet: allModes.tablet,
        Desktop: allModes.default,
      },
    },
    docs: {
      page: autoDocsTemplate,
    },
  },
};
export default preview;
