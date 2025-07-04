import { mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { createVitestConfig } from "@plyaz/devtools/configs/vitest.config.mjs";
import { resolve } from "node:path";
import { URL } from "node:url";

const base = createVitestConfig(
  resolve(new URL("./src/", import.meta.url).pathname)
);

export default mergeConfig(base, {
  plugins: [tsconfigPaths(), react()],
});
