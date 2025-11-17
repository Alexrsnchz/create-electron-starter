import path from 'path';
import { readFile, writeFile } from 'fs/promises';

async function createConfig(targetDir) {
  const configPath = path.join(targetDir, 'src', 'renderer', 'src', 'index.css');
  const config = `@import 'tailwindcss';`;

  await writeFile(configPath, config, 'utf8');
}

async function updateViteConfig(targetDir) {
  const configPath = path.join(targetDir, 'electron.vite.config.ts');
  let config = await readFile(configPath, 'utf8');

  // Adds the React import beneath the defineConfig one
  config = config.replace(
    /(import\s*\{[\s\S]*defineConfig[\s\S]*}\s*from\s*['"]electron-vite['"]\s*;?)/,
    `$1\nimport tailwindcss from '@tailwindcss/vite';`,
  );

  // Adds the React plugin to the plugins array in renderer
  config = config.replace(/(renderer:\s*\{\s*plugins:\s*\[)/, `$1tailwindcss(), `);

  await writeFile(configPath, config, 'utf8');
}

export async function setupTailwind(targetDir) {
  await createConfig(targetDir);
  await updateViteConfig(targetDir);
}
