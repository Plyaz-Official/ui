import type { StoryContext } from "@storybook/react";
import {
  createContext,
  useState,
  useContext,
  useLayoutEffect,
} from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (_: string) => {},
});

export const useTheme = () => useContext(ThemeContext);

/**
 * Wraps each story with a ThemeContext provider to enable dynamic theme switching
 * based on the selected global toolbar value (e.g., "light" or "dark").
 * Key Features:
 * - Uses Storybook's `context.globals.theme` to sync the selected theme
 * - Updates internal state when the toolbar selection changes
 * - Makes the current theme and setter function accessible via `useTheme()` hook
 * This approach ensures consistent theme rendering across all stories and supports
 */

export const ThemeProvider = (
  Story: React.ComponentType,
  context: StoryContext
) => {
  const { theme: initialTheme } = context.globals;
  const [theme, setTheme] = useState(initialTheme);
  useLayoutEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Story />
    </ThemeContext.Provider>
  );
};
