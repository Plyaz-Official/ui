import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import noArbitraryTailwind from "./eslint-rules/no-arbitrary-tailwind.js";
import storybook from "eslint-plugin-storybook";

export default [
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["dist", "!.storybook"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      custom: {
        rules: {
          "no-arbitrary-tailwind": noArbitraryTailwind,
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "storybook/default-exports": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "custom/no-arbitrary-tailwind": "error",
    },
  },
];
