#!/usr/bin/env node
import chalk from 'chalk';
import { detectPackageManager } from './src/core/detector.js';
import { askFramework, askProjectName } from './src/cli/prompts.js';
import { getProjectPath } from './src/utils/paths.js';
import { cloneTemplate } from './src/core/clone.js';
import { installDeps } from './src/core/installation/installer.js';
import { log, error, steps } from './src/utils/logger.js';
import { configureDeps } from './src/core/configuration/configurator.js';

async function runCLI() {
  log(chalk.cyanBright.bold('🚀  Electron-vite Starter Template'));

  try {
    // Setup prompts
    const projectName = await askProjectName();
    const framework = await askFramework();

    // Intermediate tools
    const pkgManager = await detectPackageManager();
    const targetDir = getProjectPath(projectName);

    // Installation process
    await cloneTemplate(targetDir);
    await installDeps(framework, pkgManager, targetDir);
    await configureDeps(framework, targetDir);

    steps(projectName, pkgManager);
  } catch (err) {
    error(err.message || err);
    process.exit(1);
  }
}

runCLI();
