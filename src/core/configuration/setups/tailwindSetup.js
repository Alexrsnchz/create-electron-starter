import path from 'path';
import { writeFile } from 'fs/promises';
import { updateViteConfig } from '../fileHandler.js';

async function createConfig(targetDir) {
  const configPath = path.join(targetDir, 'src', 'renderer', 'src', 'index.css');
  const config = `@import 'tailwindcss';`;

  await writeFile(configPath, config, 'utf8');
}

export async function setupTailwind(targetDir) {
  const imp = `import tailwindcss from '@tailwindcss/vite'`;
  const plugin = `tailwindcss()`;

  await createConfig(targetDir);
  await updateViteConfig(targetDir, imp, plugin);
}
