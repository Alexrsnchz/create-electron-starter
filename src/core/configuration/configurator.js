import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { frameworkSetup } from './configSetup.js';
import * as vanillaTemplate from './templates/framework/vanilla.js';
import * as reactTemplate from './templates/framework/react.js';
import * as vueTemplate from './templates/framework/vue.js';
import { setupTailwind } from './setups/tailwindSetup.js';
import { builderSetup } from './setups/builderSetup.js';

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

    if (tailwind) await setupTailwind(rootDir);
    if (builder) await builderSetup(rootDir);

    successSpinner('Configuration added successfully.');
  } catch (err) {
    failSpinner('Error adding configuration.');
    throw err;
  }
}
