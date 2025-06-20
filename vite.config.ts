/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "bundle-stats.html",
      template: "treemap",
      sourcemap: true,
    }) as PluginOption,
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
      insertTypesEntry: true,
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.json',
      entryRoot: 'src',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'PlyazUI',
      fileName: format => `ui.${format}.js`,
      formats: ['es', 'cjs'],
    },
   
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./setupTests.js'],
    include: ['src/**/**/*.test.tsx', 'src/*.test.tsx'],
  },
});
