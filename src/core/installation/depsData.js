export const baseDeps = {
  devDeps: ['electron', 'vite', 'electron-vite', 'typescript', '@types/node'],
};

export const frameworkDeps = {
  react: {
    deps: ['react', 'react-dom'],
    devDeps: ['@vitejs/plugin-react-swc', '@types/react', '@types/react-dom'],
  },
};

export const tailwindDeps = {
  devDeps: ['tailwindcss', '@tailwindcss/vite'],
};

export const builderDeps = {
  devDeps: ['electron-builder'],
};
