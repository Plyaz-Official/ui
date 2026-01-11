import path from 'path';
import { copyFile, mkdir, readFile, readdir, rm, stat } from 'node:fs/promises';

import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

import baseConfig from './node_modules/@plyaz/devtools/configs/vite.config';

type TsxFile = {
  fullPath: string;
  relPath: string;
};

const pathExists = async (target: string): Promise<boolean> => {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
};

const findTsxFiles = async (
  dir: string,
  excludeStories = true,
  relativePath = ''
): Promise<TsxFile[]> => {
  const files: TsxFile[] = [];

  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = relativePath ? `${relativePath}${path.sep}${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      files.push(...(await findTsxFiles(fullPath, excludeStories, relPath)));
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith('.tsx')) {
      continue;
    }

    if (excludeStories && entry.name.endsWith('.stories.tsx')) {
      continue;
    }

    files.push({ fullPath, relPath });
  }

  return files;
};

const copyDirectory = async (source: string, destination: string): Promise<void> => {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });

  await Promise.all(
    entries.map(async entry => {
      const sourcePath = path.join(source, entry.name);
      const destinationPath = path.join(destination, entry.name);

      if (entry.isDirectory()) {
        await copyDirectory(sourcePath, destinationPath);
      } else if (entry.isFile()) {
        await mkdir(path.dirname(destinationPath), { recursive: true });
        await copyFile(sourcePath, destinationPath);
      }
    })
  );
};

const copyPackageFilesPlugin = (): PluginOption => {
  let rootDir = process.cwd();
  let outDir = path.resolve(rootDir, 'dist');

  return {
    name: 'copy-package-files',
    apply: 'build',
    configResolved(config) {
      rootDir = config.root;
      const resolvedOutDir = config.build?.outDir ?? 'dist';
      outDir = path.isAbsolute(resolvedOutDir)
        ? resolvedOutDir
        : path.resolve(rootDir, resolvedOutDir);
    },
    async closeBundle() {
      const packageJsonPath = path.join(rootDir, 'package.json');
      const packageJsonRaw = await readFile(packageJsonPath, 'utf-8');
      const packageJson = JSON.parse(packageJsonRaw) as { files?: unknown };
      const patterns = Array.isArray(packageJson.files) ? packageJson.files : [];

      for (const pattern of patterns) {
        if (typeof pattern !== 'string' || pattern.startsWith('!')) {
          continue;
        }

        const sourcePath = path.join(rootDir, pattern);

        if (!(await pathExists(sourcePath))) {
          continue;
        }

        if (pattern.endsWith('/')) {
          if (pattern === 'src/') {
            const files = await findTsxFiles(sourcePath, true, 'src');

            for (const { fullPath, relPath } of files) {
              const destinationPath = path.join(outDir, relPath);
              await mkdir(path.dirname(destinationPath), { recursive: true });
              await copyFile(fullPath, destinationPath);
            }

            continue;
          }

          const destinationPath = path.join(outDir, pattern);
          await rm(destinationPath, { recursive: true, force: true });
          await copyDirectory(sourcePath, destinationPath);
        } else {
          const destinationPath = path.join(outDir, pattern);
          await mkdir(path.dirname(destinationPath), { recursive: true });
          await copyFile(sourcePath, destinationPath);
        }
      }
    },
  };
};

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

baseConfig.plugins?.push(copyPackageFilesPlugin());

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
        'client/reveal-text': path.resolve(__dirname, 'src/components/RevealText/TextReveal.tsx'),
        'client/alert-dialog': path.resolve(
          __dirname,
          'src/components/AlertDialog/AlertDialog.tsx'
        ),
        'client/calendar': path.resolve(__dirname, 'src/components/Calendar/Calendar.tsx'),
        'client/carousel': path.resolve(__dirname, 'src/components/Carousel/Carousel.tsx'),
        'client/combobox': path.resolve(__dirname, 'src/components/Combobox/Combobox.tsx'),
        'client/input-otp': path.resolve(__dirname, 'src/components/InputOTP/InputOTP.tsx'),
        'client/slider': path.resolve(__dirname, 'src/components/Slider/Slider.tsx'),
        'client/progress': path.resolve(__dirname, 'src/components/Progress/Progress.tsx'),
        'client/accordion': path.resolve(__dirname, 'src/components/Accordion/Accordion.tsx'),
        'client/avatar': path.resolve(__dirname, 'src/components/Avatar/Avatar.tsx'),
        'client/checkbox': path.resolve(__dirname, 'src/components/Checkbox/Checkbox.tsx'),
        'client/context-menu': path.resolve(
          __dirname,
          'src/components/ContextMenu/ContextMenu.tsx'
        ),
        'client/dropdown-menu': path.resolve(
          __dirname,
          'src/components/DropdownMenu/DropdownMenu.tsx'
        ),
        'client/hover-card': path.resolve(__dirname, 'src/components/HoverCard/HoverCard.tsx'),
        'client/radio-group': path.resolve(__dirname, 'src/components/RadioGroup/RadioGroup.tsx'),
        'client/scroll-area': path.resolve(__dirname, 'src/components/ScrollArea/ScrollArea.tsx'),
        'client/switch': path.resolve(__dirname, 'src/components/Switch/Switch.tsx'),
        'client/tabs': path.resolve(__dirname, 'src/components/Tabs/Tabs.tsx'),
        'client/tooltip': path.resolve(__dirname, 'src/components/Tooltip/Tooltip.tsx'),
        'client/command': path.resolve(__dirname, 'src/components/Command/Command.tsx'),
        'client/dialog': path.resolve(__dirname, 'src/components/Dialog/Dialog.tsx'),
        'client/drawer': path.resolve(__dirname, 'src/components/Drawer/Drawer.tsx'),
        'client/sheet': path.resolve(__dirname, 'src/components/Sheet/Sheet.tsx'),
        'client/toaster': path.resolve(__dirname, 'src/components/Toaster/Toaster.tsx'),
        'client/toggle': path.resolve(__dirname, 'src/components/Toggle/Toggle.tsx'),
        'client/label': path.resolve(__dirname, 'src/components/Label/Label.tsx'),
        'client/menu-bar': path.resolve(__dirname, 'src/components/MenuBar/Menubar.tsx'),
        'client/popover': path.resolve(__dirname, 'src/components/Popover/Popover.tsx'),
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
        '@radix-ui/react-accordion',
        '@radix-ui/react-alert-dialog',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-context-menu',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-hover-card',
        '@radix-ui/react-label',
        '@radix-ui/react-menubar',
        '@radix-ui/react-popover',
        '@radix-ui/react-progress',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-scroll-area',
        '@radix-ui/react-select',
        '@radix-ui/react-separator',
        '@radix-ui/react-slider',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-toggle',
        '@radix-ui/react-tooltip',
        'class-variance-authority',
        'clsx',
        'cmdk',
        'date-fns',
        'embla-carousel-react',
        'input-otp',
        'lucide-react',
        'motion',
        'next-themes',
        'react-day-picker',
        'sonner',
        'tailwind-merge',
        'vaul',
      ],
    },
  },
};
export default config;
