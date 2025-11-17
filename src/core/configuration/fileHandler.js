import path from 'path';
import { readFile, writeFile } from 'fs/promises';

/* Updates the electron.vite.config file with the
framework configuration */
export async function updateViteConfig(rootDir, imp, plugin) {
  const configPath = path.join(rootDir, 'electron.vite.config.ts');
  let config = await readFile(configPath, 'utf8');

  /* Adds the dependency import below the
  "defineConfig" import */
  config = config.replace(
    /(import\s*\{[\s\S]*defineConfig[\s\S]*}\s*from\s*['"]electron-vite['"]\s*;?)/,
    `$1\n${imp};`,
  );

  /* Adds the plugin of the dependency inside
  the renderer/plugins section */
  config = config.replace(/(renderer:\s*\{\s*plugins:\s*\[)/, `$1${plugin}, `);

  await writeFile(configPath, config, 'utf8');
}
