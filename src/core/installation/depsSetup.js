import { BASE_CONFIG, FRAMEWORK_DATA, TAILWIND_CONFIG } from '../data/depencencies.js';

export function getDependencies(framework, tailwind, builder) {
  const fw = (FRAMEWORK_DATA[framework] || (() => ({ deps: [], devDeps: [] })))(tailwind);

  const deps = [...(fw.deps ?? [])];
  const devDeps = [...BASE_CONFIG.devDeps, ...(fw.devDeps ?? [])];

  if (tailwind) {
    devDeps.push(...TAILWIND_CONFIG.devDeps);
  }
  if (builder) {
    devDeps.push('electron-builder');
  }

  return { deps, devDeps };
}
