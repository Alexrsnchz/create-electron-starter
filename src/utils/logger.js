import ora from 'ora';
import chalk from 'chalk';

let spinner = null;

/* Shows a spinner along a message while
the operation is ongoing */
export function startSpinner(message) {
  spinner = ora({
    text: chalk.cyan(message),
    color: 'cyan',
    spinner: 'dots',
  }).start();
}

/* Shows an icon along with a success message
when the operation finishes correctly */
export function successSpinner(message) {
  if (spinner) {
    spinner.succeed(chalk.white(message));
    spinner = null;
  } else {
    success(message);
  }
}

/* Shows an icon along with an error message
when the operation fails */
export function failSpinner(message) {
  if (spinner) {
    spinner.fail(chalk.white(message));
    spinner = null;
  } else {
    error(message);
  }
}

/* Shows a simple log message */
export function log(message) {
  console.log('\n' + message + '\n');
}

/* Shows a success message when the operation
finishes correctly */
function success(message) {
  console.log(`${chalk.cyan('✔')} ${chalk.gray(message)}\n`);
}

/* Shows an error message when the
operation fails */
export function error(message) {
  console.log(chalk.red(message.charAt(0).toUpperCase() + message.slice(1)));
}

/* Shows a final message when the CLI finishes
installing the project successfully */
export function steps(projectName, pkgManager) {
  log(chalk.white('─────────────────────────────────'));

  console.log(chalk.bold.cyan(`Your Electron project is ready!\n`));

  if (projectName !== '.') console.log(`${chalk.white('👉  cd')} ${chalk.cyan(projectName)}`);
  console.log(chalk.white(`⚡️  ${pkgManager} run ${chalk.cyan('dev')}`));

  log(chalk.white('─────────────────────────────────'));
}
