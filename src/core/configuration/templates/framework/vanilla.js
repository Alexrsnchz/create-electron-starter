export const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Electron-vite + Vanilla</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./src/main.ts"></script>
  </body>
</html>`;

export const main = `import './assets/styles/main.css';

const root = document.querySelector<HTMLDivElement>('#app');
if (root) {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.textAlign = 'center';
    container.style.fontFamily = 'system-ui';

    const title = document.createElement('h1');
    title.textContent = '⚡ Electron-vite + ';

    const highlight = document.createElement('span');
    highlight.textContent = 'Vanilla';
    highlight.style.color = 'coral';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Thanks for using my template. Happy coding!';

    title.appendChild(highlight);
    container.appendChild(title);
    container.appendChild(paragraph);
    root.appendChild(container);
}`;
