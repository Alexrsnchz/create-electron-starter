import path from 'path';
import { writeFile } from 'fs/promises';
import { updateViteConfig } from '../fileHandler.js';

async function createConfig(rootDir) {
  const sourcePath = path.join(rootDir, 'src', 'renderer', 'src');
  const stylesPath = path.join(sourcePath, 'assets', 'styles', 'main.css');

  await writeFile(stylesPath, `@import 'tailwindcss';`, 'utf8');
}

export async function setupTailwind(targetDir) {
  const imp = `import tailwindcss from '@tailwindcss/vite'`;
  const plugin = `tailwindcss()`;

  await createConfig(targetDir);
  await updateViteConfig(targetDir, imp, plugin);
}
