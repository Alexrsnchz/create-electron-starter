import {
  BASE_CONFIG,
  BUILDER_CONFIG,
  FRAMEWORK_CONFIG,
  TAILWIND_CONFIG,
} from '../data/depencencies.js';

export function getDependencies(framework, tailwind, builder) {
  const fw = FRAMEWORK_CONFIG[framework] || { deps: [], devDeps: [] };

  const deps = [...(fw.deps ?? [])];
  const devDeps = [...BASE_CONFIG.devDeps, ...(fw.devDeps ?? [])];

  if (tailwind) {
    devDeps.push(...TAILWIND_CONFIG.devDeps);
  }
  if (builder) {
    devDeps.push(...BUILDER_CONFIG.devDeps);
  }

  return { deps, devDeps };
}
