import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { config } from '../contents/builder.js';

async function createConfig(targetDir) {
  await writeFile(path.join(targetDir, 'electron-builder.yml'), config, 'utf8');
}

async function updateScripts(targetDir) {
  const configPath = path.join(targetDir, 'package.json');
  const pkg = JSON.parse(await readFile(configPath, 'utf8'));

  pkg.scripts['build:installer'] = 'electron-builder';
  pkg.scripts['build:win'] = 'electron-builder --win';
  pkg.scripts['build:mac'] = 'electron-builder --mac';
  pkg.scripts['build:linux'] = 'electron-builder --linux';

  await writeFile(configPath, JSON.stringify(pkg, null, 2), 'utf8');
}

export async function builderSetup(rootDir) {
  await createConfig(rootDir);
  await updateScripts(rootDir);
}
