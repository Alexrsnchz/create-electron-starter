import degit from 'degit';
import { failSpinner, startSpinner, successSpinner } from '../utils/logger.js';

export async function cloneTemplate(framework, targetDir) {
  const repositories = {
    react: 'Alexrsnchz/electron-react-starter',
    //vue: 'Alexrsnchz/electron-vue-starter',
    //svelte: 'Alexrsnchz/electron-svelte-starter',
  };
  const repository = repositories[framework];

  try {
    startSpinner('📁  Cloning template from GitHub...');

    const emitter = degit(repository, { cache: false, force: true });
    await emitter.clone(targetDir);

    successSpinner('Template cloned successfully.');
  } catch (err) {
    failSpinner('Error cloning the template.');
    throw err;
  }
}
