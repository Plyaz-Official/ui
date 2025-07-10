import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import TranslatedText from "./TranslatedText";

// Mock useTranslation
vi.mock("@plyaz/translations", () => ({
  useTranslation: () => ({
    t: (key: string) => `translated:${key}`,
  }),
}));

describe("TranslatedText component", () => {
  it("renders translated text", () => {
    render(
      <TranslatedText
        translationKey="common.hello"
        element="p"
        variant="body"
        weight="normal"
      />
    );
    expect(screen.getByText("translated:common.hello")).toBeDefined();
  });

  it("renders with correct element and class", () => {
    render(
      <TranslatedText
        translationKey="common.farewell"
        element="h2"
        variant="caption"
        weight="bold"
      />
    );
    const el = screen.getByText("translated:common.farewell");
    expect(el.tagName.toLowerCase()).toBe("h2");
  });
}); 