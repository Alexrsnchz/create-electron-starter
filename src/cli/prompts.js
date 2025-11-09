import { input, select } from '@inquirer/prompts';

export async function askProjectName() {
  return input({
    message: 'Name of the project:',
    default: 'my-electron-app',
  });
}

export async function askFramework() {
  return select({
    message: 'Choose a framework:',
    choices: [{ name: 'React', value: 'react' }],
    default: 'React',
  });
}
