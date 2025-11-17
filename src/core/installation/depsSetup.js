import { baseDeps, frameworkDeps, tailwindDeps } from './depsData.js';

export function getDependencies(framework, tailwind) {
  const fw = frameworkDeps[framework] || { deps: [], devDeps: [] };

  const deps = [...fw.deps];
  const devDeps = [...baseDeps.devDeps, ...fw.devDeps];

  if (tailwind) {
    devDeps.push(...tailwindDeps.devDeps);
  }

  return { deps, devDeps };
}
