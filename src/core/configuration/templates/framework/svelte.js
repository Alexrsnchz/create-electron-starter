export const svelteEslint = `import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginSvelte from 'eslint-plugin-svelte';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**',
      '**/release/**',
      '**/*.lock*',
      '**/.DS_Store',
      '**/*.log',
      '**/.cache/**'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginSvelte.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['src/main/**/*.{js,ts}', 'src/preload/**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ['src/renderer/**/*.{js,ts,svelte}'],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: ['src/renderer/**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  }
]);`;

export const svelteHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Electron-vite + Svelte</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./src/main.ts"></script>
  </body>
</html>`;

export const svelteMain = `import { mount } from 'svelte';
import App from './App.svelte';

mount(App, {
  target: document.getElementById('app')!
});`;

export const svelteCssMain = `import { mount } from 'svelte';
import './assets/styles/main.css';
import App from './App.svelte';

mount(App, {
  target: document.getElementById('app')!
});`;

export const svelteCssApp = `<script lang="ts">
</script>

<main>
  <div class="container">
    <h1 class="title">⚡ Electron-vite + <span class="svelte">Svelte</span></h1>

    <p class="description">
      Thanks for using my template! If you find it useful, consider giving the project a star on GitHub ⭐
    </p>

    <a href="https://github.com/Alexrsnchz/create-electron-starter" target="_blank" class="link">
      🚀 View on GitHub
    </a>
  </div>
</main>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to bottom, #1f2544, #272c4d, #35395a, #4a4e6d, #6b6b85, #83759a, #a37aaf, #d2a6cd);
}

.title {
  margin-top: 10rem;
  font-weight: bold;
  font-size: 2.5rem;
  color: #f6f6f6;
}

.svelte {
  color: #fb542b;
}

.description {
  margin-top: 1.5rem;
  max-width: 500px;
  line-height: 1.7;
  color: #d9d9d9;
}

.link {
  margin-top: 4rem;
  padding: 8px 30px;
  border: 1px solid #303355;
  border-radius: 5px;
  background: #414669;
  text-decoration: none;
  color: #f6f6f6;
  transition: all 0.25s ease;
}

.link:hover {
  border-color: #d2a6cd;
  background: #b489c9;
  box-shadow: 0 0 12px #b489c9;
}
</style>`;

export const svelteTailwindApp = `<script lang="ts">
</script>

<main>
  <div class="w-[100vw] h-[100vh] flex flex-col items-center text-center bg-[linear-gradient(to_bottom,_#1f2544,_#272c4d,_#35395a,_#4a4e6d,_#6b6b85,_#83759a,_#a37aaf,_#d2a6cd)]">
    <h1 class="mt-[10rem] font-bold text-[2.5rem] text-[#f6f6f6]">
      ⚡ Electron-vite + <span class="text-[#fb542b]">Svelte</span>
    </h1>

    <p class="mt-[1.5rem] max-w-[500px] leading-[1.7] text-[#d9d9d9]">
      Thanks for using my template! If you find it useful, consider giving the project a star on GitHub ⭐
    </p>

    <a href="https://github.com/Alexrsnchz/create-electron-starter" target="_blank" class="mt-[4rem] px-[30px] py-[8px] rounded-[5px] text-[#f6f6f6] no-underline border border-[#303355] bg-[#414669] transition-all duration-200 ease-in-out hover:bg-[#b489c9] hover:border-[#d2a6cd] hover:shadow-[0_0_12px_#b489c9]">
      🚀 View on GitHub
    </a>
  </div>
</main>

<style>
</style>`;
