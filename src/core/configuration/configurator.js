import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { reactSetup } from './react/reactSetup.js';

export async function configureDeps(framework, targetDir) {
  try {
    startSpinner('⚙️  Adding configuration...');

    switch (framework) {
      case 'react':
        await reactSetup(targetDir);
        break;
      default:
        break;
    }

    successSpinner('Configuration added successfully.');
  } catch (err) {
    failSpinner('Error adding configuration.');
    throw err;
  }
}
