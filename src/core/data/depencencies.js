export const FRAMEWORK_CONFIG = {
  vanilla: {
    main: 'main.ts',
  },
  react: {
    imp: `import react from '@vitejs/plugin-react-swc'`,
    plugin: 'react()',
    main: 'main.tsx',
    app: 'App.tsx',
    deps: ['react', 'react-dom'],
    devDeps: ['@vitejs/plugin-react-swc', '@types/react', '@types/react-dom'],
  },
  vue: {
    imp: `import vue from '@vitejs/plugin-vue'`,
    plugin: 'vue()',
    main: 'main.ts',
    app: 'App.vue',
    deps: ['vue'],
    devDeps: ['@vitejs/plugin-vue', '@vue/compiler-sfc'],
  },
};

export const BASE_CONFIG = {
  devDeps: ['electron', 'vite', 'electron-vite', 'typescript', '@types/node'],
};

export const TAILWIND_CONFIG = {
  imp: `import tailwindcss from '@tailwindcss/vite'`,
  plugin: 'tailwindcss()',
  devDeps: ['tailwindcss', '@tailwindcss/vite'],
};

export const BUILDER_CONFIG = {
  devDeps: ['electron-builder'],
};
