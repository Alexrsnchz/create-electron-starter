import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { builderSetup, frameworkSetup, tailwindSetup } from './configSetup.js';
import * as vanillaTemplate from './templates/framework/vanilla.js';
import * as reactTemplate from './templates/framework/react.js';
import * as vueTemplate from './templates/framework/vue.js';
import { builderTemplate } from './templates/extra/builder.js';

/* Adds the configuration needed by the dependencies
of the project */
export async function configureDeps(framework, tailwind, builder, rootDir) {
  try {
    startSpinner('⚙️  Adding configuration...');

    switch (framework) {
      case 'vanilla':
        await frameworkSetup(rootDir, 'vanilla', vanillaTemplate);
        break;
      case 'react':
        await frameworkSetup(rootDir, 'react', reactTemplate);
        break;
      case 'vue':
        await frameworkSetup(rootDir, 'vue', vueTemplate);
        break;
      default:
        break;
    }

    if (tailwind) await tailwindSetup(rootDir);
    if (builder) await builderSetup(rootDir, 'electron-builder.yml', builderTemplate);

    successSpinner('Configuration added successfully.');
  } catch (err) {
    failSpinner('Error adding configuration.');
    throw err;
  }
}
