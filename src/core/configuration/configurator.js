import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { reactSetup } from './react/reactSetup.js';
import { vanillaSetup } from './vanilla/vanillaSetup.js';
import { setupTailwind } from './extras/extrasSetup.js';

export async function configureDeps(framework, tailwind, targetDir) {
  try {
    startSpinner('⚙️  Adding configuration...');

    switch (framework) {
      case 'vanilla':
        await vanillaSetup(targetDir);
        break;
      case 'react':
        await reactSetup(targetDir);
        break;
      default:
        break;
    }

    if (tailwind) {
      await setupTailwind(targetDir);
    }

    successSpinner('Configuration added successfully.');
  } catch (err) {
    failSpinner('Error adding configuration.');
    throw err;
  }
}
