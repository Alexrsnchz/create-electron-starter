import {
  vanillaCss,
  vanillaHtml,
  vanillaMain,
  vanillaTailwindMain,
} from '../configuration/templates/framework/vanilla.js';
import {
  reactCss,
  reactCssApp,
  reactHtml,
  reactMain,
  reactTailwindApp,
} from '../configuration/templates/framework/react.js';
import {
  vueCssApp,
  vueCssMain,
  vueHtml,
  vueMain,
  vueTailwindApp,
} from '../configuration/templates/framework/vue.js';

export const FRAMEWORK_DATA = {
  vanilla: () => ({
    main: 'main.ts',
    cssDir: true,
  }),
  react: () => ({
    imp: `import react from '@vitejs/plugin-react-swc'`,
    plugin: 'react()',
    main: 'main.tsx',
    app: 'App.tsx',
    cssDir: true,
    deps: ['react', 'react-dom'],
    devDeps: ['@vitejs/plugin-react-swc', '@types/react', '@types/react-dom'],
  }),
  vue: (tailwind) => ({
    imp: `import vue from '@vitejs/plugin-vue'`,
    plugin: 'vue()',
    main: 'main.ts',
    app: 'App.vue',
    cssDir: tailwind,
    deps: ['vue'],
    devDeps: ['@vitejs/plugin-vue', '@vue/compiler-sfc'],
  }),
};

export const FRAMEWORK_TEMPLATES = {
  vanilla: (tailwind) => ({
    html: vanillaHtml,
    main: tailwind ? vanillaTailwindMain : vanillaMain,
    css: tailwind ? '' : vanillaCss,
  }),
  react: (tailwind) => ({
    html: reactHtml,
    main: reactMain,
    app: tailwind ? reactTailwindApp : reactCssApp,
    css: tailwind ? '' : reactCss,
  }),
  vue: (tailwind) => ({
    html: vueHtml,
    main: tailwind ? vueCssMain : vueMain,
    app: tailwind ? vueTailwindApp : vueCssApp,
    css: '',
  }),
};

export const BASE_CONFIG = {
  devDeps: ['electron', 'vite', 'electron-vite', 'typescript', '@types/node'],
};

export const TAILWIND_CONFIG = {
  imp: `import tailwindcss from '@tailwindcss/vite'`,
  plugin: 'tailwindcss()',
  devDeps: ['tailwindcss', '@tailwindcss/vite'],
};
