import path from 'path';
import { mkdir, readFile, writeFile } from 'fs/promises';

/* Updates the electron.vite.config file with the
framework configuration */
export async function updateViteConfig(rootDir, imp, plugin) {
  const configPath = path.join(rootDir, 'electron.vite.config.ts');
  let config = await readFile(configPath, 'utf8');

  config = config.replace(
    /(import\s*\{[\s\S]*defineConfig[\s\S]*}\s*from\s*['"]electron-vite['"]\s*;?)/,
    `$1\n${imp};`,
  );

  config = config.replace(/(renderer:\s*\{\s*plugins:\s*\[)/, `$1${plugin}, `);

  await writeFile(configPath, config, 'utf8');
}

/* Adds support for jsx in the compiler options
of the tsconfig */
export async function updateTsConfig(rootDir) {
  const configPath = path.join(rootDir, 'tsconfig.json');
  let config = await readFile(configPath, 'utf8');
  const json = JSON.parse(config);

  // Inserts the jsx attribute in the compiler options
  json.compilerOptions.jsx = 'react-jsx';

  await writeFile(configPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
}

/* Creates the files and folders needed by
the framework */
export async function createFrameworkStructure(rootDir, config, template) {
  const rendererPath = path.join(rootDir, 'src', 'renderer');
  const sourcePath = path.join(rendererPath, 'src');
  const stylesPath = path.join(sourcePath, 'assets', 'styles');

  await mkdir(stylesPath, { recursive: true });

  await writeFile(path.join(rendererPath, 'index.html'), template.html, 'utf8');
  await writeFile(path.join(sourcePath, config.main), template.main, 'utf8');
  if (config.app && template.app) {
    await writeFile(path.join(sourcePath, config.app), template.app, 'utf8');
  }
  await writeFile(path.join(stylesPath, 'main.css'), '', 'utf8');
}
