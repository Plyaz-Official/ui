/* eslint-disable @typescript-eslint/naming-convention */
import path from 'path';

import dts from 'vite-plugin-dts';

import baseConfig from './node_modules/@plyaz/devtools/vite.config';

baseConfig.plugins?.push(
  dts({
    include: ['src'],
    exclude: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    insertTypesEntry: true,
    outDir: 'dist/types',
    tsconfigPath: './tsconfig.json',
    entryRoot: 'src',
  })
);

const config: Record<string, unknown> = {
  ...baseConfig,
  test: {
    ...baseConfig.test,
    setupFiles: ['./setupTests.js'],
    include: ['src/**/**/*.test.tsx', 'src/*.test.tsx'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    ...baseConfig.build,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'PlyazUI',
      fileName: (format: string) => `ui.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
};
export default config;
