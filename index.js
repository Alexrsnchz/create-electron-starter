#!/usr/bin/env node
import chalk from 'chalk';
import { detectPackageManager } from './src/core/detector.js';
import { askFramework, askProjectName } from './src/cli/prompts.js';
import { getProjectPath } from './src/utils/paths.js';
import { cloneTemplate } from './src/core/clone.js';
import { installDeps } from './src/core/install.js';
import { log, error, steps } from './src/utils/logger.js';

async function runCLI() {
  log(chalk.cyanBright.bold('🚀  Electron-vite Starter Template'));

  try {
    const pkgManager = await detectPackageManager();

    const projectName = await askProjectName();
    const framework = await askFramework();

    const targetDir = getProjectPath(projectName);
    await cloneTemplate(framework, targetDir);
    await installDeps(targetDir, pkgManager);

    steps(projectName, pkgManager);
  } catch (err) {
    error(err.message || err);
    process.exit(1);
  }
}

runCLI();
