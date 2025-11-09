import { resolve } from 'path';

export function getProjectPath(projectName) {
  return resolve(process.cwd(), projectName);
}
