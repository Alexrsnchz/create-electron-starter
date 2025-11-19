import { resolve } from 'path';

/* List of installation commands based on the supported
package managers */
export const installCmds = {
  npm: { cmd: ['install'], flag: '--save-dev' },
  pnpm: { cmd: ['add'], flag: '-D' },
  yarn: { cmd: ['add'], flag: '-D' },
  bun: { cmd: ['install'], flag: '--dev' },
};

/* Checks if the project's name is ".", in which case
returns the current directory, otherwise adds the
name to the path */
function getProjectPath(projectName) {
  if (projectName === '.') return process.cwd();
  return resolve(process.cwd(), projectName);
}

/* Detects the package manager that was used
to start the CLI */
function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent;

  if (userAgent?.includes('pnpm')) return 'pnpm';
  if (userAgent?.includes('yarn')) return 'yarn';
  if (userAgent?.includes('bun')) return 'bun';

  return 'npm';
}

/* Gets the current directory and package manager
when the user executes the CLI */
export function getUserInfo(projectName) {
  const rootDir = getProjectPath(projectName);
  const pkgManager = getPackageManager();

  return { rootDir, pkgManager };
}
