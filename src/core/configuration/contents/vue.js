export const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Electron-vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./src/main.ts"></script>
  </body>
</html>`;

export const main = `import { createApp } from 'vue';
import './assets/styles/main.css';
import App from './App.vue';

createApp(App).mount('#app');`;

export const app = `<template>
  <div id="app">
    <h1>⚡ Electron-vite + <span class="vue">Vue</span></h1>
    <p>Thanks for using my template. Happy coding!</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#app {
  padding: 2rem;
  text-align: center;
  font-family: system-ui;
}

.vue {
 color: lightseagreen;
}
</style>
`;
