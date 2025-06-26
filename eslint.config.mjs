import path from 'path';
import { fileURLToPath } from 'url';

import { presets } from '@plyaz/devtools/eslint/base.frontend.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default presets.viteReact({
  enableNextjs: false,
  enableReact: true,
  enableReactRefresh: true,
  tsconfigDir: __dirname,
  enableImport: true,
});
