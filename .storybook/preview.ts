import type { Preview } from "@storybook/react";
import { autoDocsTemplate } from "../src/docs/DocTemplate";
import "../src/index.css";
import { allModes } from "./mode";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
