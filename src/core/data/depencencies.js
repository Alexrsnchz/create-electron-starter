import {
  vanillaCss,
  vanillaHtml,
  vanillaMain,
  vanillaTailwindMain,
} from '../configuration/templates/framework/vanilla.js';
import {
  reactCss,
  reactCssApp,
  reactEslint,
  reactHtml,
  reactMain,
  reactTailwindApp,
} from '../configuration/templates/framework/react.js';
import {
  vueCssApp,
  vueCssMain,
  vueEslint,
  vueHtml,
  vueMain,
  vueTailwindApp,
} from '../configuration/templates/framework/vue.js';
import {
  svelteCssApp,
  svelteCssMain,
  svelteEslint,
  svelteHtml,
  svelteMain,
  svelteTailwindApp,
} from '../configuration/templates/framework/svelte.js';

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
    devDeps: [
      '@vitejs/plugin-react-swc',
      '@types/react',
      '@types/react-dom',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'eslint-plugin-react-refresh',
    ],
  }),
  vue: (tailwind) => ({
    imp: `import vue from '@vitejs/plugin-vue'`,
    plugin: 'vue()',
    main: 'main.ts',
    app: 'App.vue',
    cssDir: tailwind,
    deps: ['vue'],
    devDeps: ['@vitejs/plugin-vue', '@vue/compiler-sfc', 'eslint-plugin-vue'],
  }),
  svelte: (tailwind) => ({
    imp: `import { svelte } from '@sveltejs/vite-plugin-svelte'`,
    plugin: 'svelte()',
    main: 'main.ts',
    app: 'App.svelte',
    cssDir: tailwind,
    deps: ['svelte'],
    devDeps: ['@sveltejs/vite-plugin-svelte', 'svelte-check', 'eslint-plugin-svelte'],
  }),
};

export const FRAMEWORK_TEMPLATES = {
  vanilla: (tailwind) => ({
    html: vanillaHtml,
    main: tailwind ? vanillaTailwindMain : vanillaMain,
    css: tailwind ? '' : vanillaCss,
  }),
  react: (tailwind) => ({
    eslint: reactEslint,
    html: reactHtml,
    main: reactMain,
    app: tailwind ? reactTailwindApp : reactCssApp,
    css: tailwind ? '' : reactCss,
  }),
  vue: (tailwind) => ({
    eslint: vueEslint,
    html: vueHtml,
    main: tailwind ? vueCssMain : vueMain,
    app: tailwind ? vueTailwindApp : vueCssApp,
    css: '',
  }),
  svelte: (tailwind) => ({
    eslint: svelteEslint,
    html: svelteHtml,
    main: tailwind ? svelteCssMain : svelteMain,
    app: tailwind ? svelteTailwindApp : svelteCssApp,
    css: '',
  }),
};

export const BASE_CONFIG = {
  devDeps: [
    'electron',
    'vite',
    'electron-vite',
    'typescript',
    '@types/node',
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'globals',
  ],
};

export const TAILWIND_CONFIG = {
  imp: `import tailwindcss from '@tailwindcss/vite'`,
  plugin: 'tailwindcss()',
  devDeps: ['tailwindcss', '@tailwindcss/vite'],
};
