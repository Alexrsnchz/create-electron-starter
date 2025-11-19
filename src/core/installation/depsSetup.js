import { baseDeps, builderDeps, frameworkDeps, tailwindDeps } from './depsData.js';

export function getDependencies(framework, tailwind, builder) {
  const fw = frameworkDeps[framework] || { deps: [], devDeps: [] };

  const deps = [...fw.deps];
  const devDeps = [...baseDeps.devDeps, ...fw.devDeps];

  if (tailwind) {
    devDeps.push(...tailwindDeps.devDeps);
  }
  if (builder) {
    devDeps.push(...builderDeps.devDeps);
  }

  return { deps, devDeps };
}
