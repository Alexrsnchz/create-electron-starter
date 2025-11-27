import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { builderSetup, frameworkSetup, prettierSetup, tailwindSetup } from './configSetup.js';
import * as vanillaTemplate from './templates/framework/vanilla.js';
import * as reactTemplate from './templates/framework/react.js';
import * as vueTemplate from './templates/framework/vue.js';
import * as svelteTemplate from './templates/framework/svelte.js';
import { builderTemplate } from './templates/extra/builder.js';
import * as prettierTemplate from './templates/extra/prettier.js';

/* Adds the configuration needed by the dependencies
of the project */
export async function configureDeps(framework, tailwind, builder, prettier, rootDir) {
  try {
    startSpinner('⚙️  Adding configuration...');

    switch (framework) {
      case 'vanilla':
        await frameworkSetup(rootDir, 'vanilla', tailwind, prettier, vanillaTemplate);
        break;
      case 'react':
        await frameworkSetup(rootDir, 'react', tailwind, prettier, reactTemplate);
        break;
      case 'vue':
        await frameworkSetup(rootDir, 'vue', tailwind, prettier, vueTemplate);
        break;
      case 'svelte':
        await frameworkSetup(rootDir, 'svelte', tailwind, prettier, svelteTemplate);
        break;
      default:
        break;
    }

    if (tailwind) await tailwindSetup(rootDir);
    if (builder) await builderSetup(rootDir, 'electron-builder.yml', builderTemplate);
    if (prettier) await prettierSetup(rootDir, prettierTemplate);

    successSpinner('Configuration added successfully.');
  } catch (err) {
    failSpinner('Error adding configuration.');
    throw err;
  }
}
