import { installCmds } from '../../utils/detector.js';
import { getDependencies } from './depsSetup.js';
import { failSpinner, startSpinner, successSpinner } from '../../utils/logger.js';
import { execa } from 'execa';

/* Installs the base and chosen dependencies
for the project */
export async function installDeps(framework, tailwind, builder, pkgManager, targetDir) {
  const pm = installCmds[pkgManager];
  const { deps, devDeps } = getDependencies(framework, tailwind, builder);

  try {
    startSpinner('📦  Installing dependencies...');

    if (deps.length > 0) {
      await execa(pkgManager, [...pm.cmd, ...deps], {
        cwd: targetDir,
        stdio: 'pipe',
      });
    }

    if (devDeps.length > 0) {
      await execa(pkgManager, [...pm.cmd, pm.flag, ...devDeps], {
        cwd: targetDir,
        stdio: 'pipe',
      });
    }

    successSpinner('Dependencies installed successfully.');
  } catch (err) {
    failSpinner('Error installing dependencies.');
    throw err;
  }
}
