const baseDeps = [];

const baseDevDeps = ['electron', 'vite', 'electron-vite', 'typescript', '@types/node'];

const frameworkDeps = {
  react: {
    deps: ['react', 'react-dom'],
    devDeps: ['@vitejs/plugin-react-swc', '@types/react', '@types/react-dom'],
  },
};

export function getDependencies(framework) {
  const fwDeps = frameworkDeps[framework] || { deps: [], devDeps: [] };

  return {
    deps: [...baseDeps, ...fwDeps.deps],
    devDeps: [...baseDevDeps, ...fwDeps.devDeps],
  };
}
