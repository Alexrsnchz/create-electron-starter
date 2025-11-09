export const installCmds = {
  npm: { base: ['install'], flag: '--save-dev' },
  pnpm: { base: ['add'], flag: '-D' },
  yarn: { base: ['add'], flag: '-D' },
  bun: { base: ['install'], flag: '--dev' },
};
