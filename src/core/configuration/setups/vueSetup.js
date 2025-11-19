import path from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { app, html, main } from '../contents/vue.js';
import { updateViteConfig } from '../fileHandler.js';

/* Creates the files and folders needed by
the framework */
async function createConfig(rootDir) {
  const rendererPath = path.join(rootDir, 'src', 'renderer');
  const sourcePath = path.join(rendererPath, 'src');
  const stylesPath = path.join(sourcePath, 'assets', 'styles');

  await mkdir(stylesPath, { recursive: true });

  await writeFile(path.join(rendererPath, 'index.html'), html, 'utf8');
  await writeFile(path.join(sourcePath, 'main.ts'), main, 'utf8');
  await writeFile(path.join(sourcePath, 'App.vue'), app, 'utf8');
  // TODO Check for tailwind, if installed, this file needs to be created
  await writeFile(path.join(stylesPath, 'main.css'), '', 'utf8');
}

export async function vueSetup(rootDir) {
  const imp = `import vue from '@vitejs/plugin-vue'`;
  const plugin = `vue()`;

  await createConfig(rootDir);
  await updateViteConfig(rootDir, imp, plugin);
}
