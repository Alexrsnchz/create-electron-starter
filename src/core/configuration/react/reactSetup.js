import path from 'path';
import { writeFile, readFile } from 'fs/promises';
import { app, html, index } from './reactData.js';

async function createFiles(targetDir) {
  const rendererPath = path.join(targetDir, 'src', 'renderer');

  await writeFile(path.join(rendererPath, 'index.html'), html, 'utf8');
  await writeFile(path.join(rendererPath, 'index.tsx'), index, 'utf8');
  await writeFile(path.join(rendererPath, 'App.tsx'), app, 'utf8');
}

async function updateViteConfig(targetDir) {
  const configPath = path.join(targetDir, 'electron.vite.config.ts');
  const reactImport = `import react from '@vitejs/plugin-react-swc';`;

  let config = await readFile(configPath, 'utf8');

  config = `${reactImport}\n${config}`;
  config = config.replace(/plugins:\s*\[/, 'plugins: [react(), ');

  await writeFile(configPath, config, 'utf8');
}

export async function reactSetup(targetDir) {
  await createFiles(targetDir);
  await updateViteConfig(targetDir);
}
