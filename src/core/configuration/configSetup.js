import { FRAMEWORK_DATA, FRAMEWORK_TEMPLATES, TAILWIND_CONFIG } from '../data/depencencies.js';
import {
  createConfigFile,
  createFrameworkStructure,
  modifyCssFile,
  updateScripts,
  updateTsConfig,
  updateViteConfig,
} from './fileHandler.js';

/* Executes the complete setup for the
indicated framework */
export async function frameworkSetup(rootDir, framework, tailwind) {
  const config = FRAMEWORK_DATA[framework](tailwind);
  const template = FRAMEWORK_TEMPLATES[framework](tailwind);

  if (framework !== 'vanilla') await updateViteConfig(rootDir, config.imp, config.plugin);
  if (framework === 'react') await updateTsConfig(rootDir);
  await createFrameworkStructure(rootDir, config, template);
}

/* Executes the setup for Tailwind */
export async function tailwindSetup(rootDir) {
  await updateViteConfig(rootDir, TAILWIND_CONFIG.imp, TAILWIND_CONFIG.plugin);
  await modifyCssFile(rootDir);
}

/* Executes the setup for Electron Builder */
export async function builderSetup(rootDir, output, template) {
  await updateScripts(rootDir);
  await createConfigFile(rootDir, output, template);
}
