import { FRAMEWORK_DATA, FRAMEWORK_TEMPLATES, TAILWIND_CONFIG } from '../data/depencencies.js';
import {
  createConfigFile,
  createFrameworkStructure,
  modifyCssFile,
  updateEslintConfig,
  updateScripts,
  updateTsConfig,
  updateViteConfig,
} from './fileHandler.js';

/* Executes the complete setup for the
indicated framework */
export async function frameworkSetup(rootDir, framework, tailwind, prettier) {
  const config = FRAMEWORK_DATA[framework](tailwind);
  const template = FRAMEWORK_TEMPLATES[framework](tailwind);

  if (framework !== 'vanilla') await updateViteConfig(rootDir, config.imp, config.plugin);
  await updateEslintConfig(rootDir, config, prettier, template);
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

/* Executes the setup for Prettier */
export async function prettierSetup(rootDir, template) {
  await createConfigFile(rootDir, '.prettierignore', template.ignore);
  await createConfigFile(rootDir, '.prettierrc', template.config);
}
