import { mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { createVitestConfig } from "@plyaz/devtools/configs/vitest.config.mjs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const base = createVitestConfig(__dirname);

export default mergeConfig(base, {
  plugins: [tsconfigPaths(), react()],
});