import path from 'path';
import { mkdir, writeFile, readFile } from 'fs/promises';
import { app, html, main } from '../contents/react.js';
import { updateViteConfig } from '../fileHandler.js';

/* Creates the files and folders needed by
the framework */
async function createStructure(rootDir) {
  const rendererPath = path.join(rootDir, 'src', 'renderer');
  const sourcePath = path.join(rendererPath, 'src');
  const stylesPath = path.join(sourcePath, 'assets', 'styles');

  await mkdir(stylesPath, { recursive: true });

  await writeFile(path.join(rendererPath, 'index.html'), html, 'utf8');
  await writeFile(path.join(sourcePath, 'main.tsx'), main, 'utf8');
  await writeFile(path.join(sourcePath, 'App.tsx'), app, 'utf8');
  await writeFile(path.join(stylesPath, 'main.css'), '', 'utf8');
}

/* Updates the tsconfig.json file with the
framework configuration */
async function updateTsConfig(rootDir) {
  const configPath = path.join(rootDir, 'tsconfig.json');
  let config = await readFile(configPath, 'utf8');
  const json = JSON.parse(config);

  // Inserts the jsx attribute in the compiler options
  json.compilerOptions.jsx = 'react-jsx';

  await writeFile(configPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
}

export async function reactSetup(rootDir) {
  const imp = `import react from '@vitejs/plugin-react-swc'`;
  const plugin = `react()`;

  await createStructure(rootDir);
  await updateTsConfig(rootDir);
  await updateViteConfig(rootDir, imp, plugin);
}
