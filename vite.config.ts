import path from 'path';

import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

import baseConfig from './node_modules/@plyaz/devtools/configs/vite.config';

baseConfig.plugins?.push(
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
    filename: 'performance/reports/bundle-stats.html',
    exclude: {
      bundle: 'storybook-static',
    },
    template: 'treemap',
    sourcemap: true,
  }) as PluginOption
);

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
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
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
      entry: {
        index: path.resolve(__dirname, 'src/main.ts'),
        client: path.resolve(__dirname, 'src/components/client.ts'),
      },
      name: 'PlyazUI',
      fileName: (format: string, name: string) => `${name}.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'next-intl',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@radix-ui/react-slot',
        '@radix-ui/react-select',
        'clsx',
        'lucide-react',
      ],
    },
  },
};
export default config;
