import { FRAMEWORK_CONFIG } from '../data/depencencies.js';
import { createFrameworkStructure, updateTsConfig, updateViteConfig } from './fileHandler.js';

/* Executes the complete setup for the
indicated framework */
export async function frameworkSetup(rootDir, framework, template) {
  const config = FRAMEWORK_CONFIG[framework];

  if (framework !== 'vanilla') await updateViteConfig(rootDir, config.imp, config.plugin);
  if (framework === 'react') await updateTsConfig(rootDir);
  await createFrameworkStructure(rootDir, config, template);
}
