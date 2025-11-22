export const vanillaHtml = `<!DOCTYPE html>
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

export const vanillaMain = `import './assets/styles/main.css';

const root = document.querySelector<HTMLDivElement>('#app');
if (root) {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.textAlign = 'center';
    container.style.fontFamily = 'system-ui';

    const title = document.createElement('h1');
    title.textContent = '⚡ Electron-vite + ';

    const highlight = document.createElement('span');
    highlight.classList.add('vanilla')
    highlight.textContent = 'Vanilla';
    highlight.style.color = 'coral';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Thanks for using my template. Happy coding!';

    title.appendChild(highlight);
    container.appendChild(title);
    container.appendChild(paragraph);
    root.appendChild(container);
}`;

export const vanillaCss = `* {
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

h1 {
    margin-top: 10rem;
    font-weight: bold;
    font-size: 2.5rem;
    color: #f6f6f6;
}

.react {
    color: #61dafb;
}

p {
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
}`;
