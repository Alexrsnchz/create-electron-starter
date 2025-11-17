import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { reactSetup } from './setups/reactSetup.js';
import { vanillaSetup } from './setups/vanillaSetup.js';
import { setupTailwind } from './setups/extrasSetup.js';

/* Adds the configuration needed by the dependencies
of the project */
export async function configureDeps(framework, tailwind, rootDir) {
  try {
    startSpinner('⚙️  Adding configuration...');

    switch (framework) {
      case 'vanilla':
        await vanillaSetup(rootDir);
        break;
      case 'react':
        await reactSetup(rootDir);
        break;
      default:
        break;
    }

    if (tailwind) {
      await setupTailwind(rootDir);
    }

    successSpinner('Configuration added successfully.');
  } catch (err) {
    failSpinner('Error adding configuration.');
    throw err;
  }
}
