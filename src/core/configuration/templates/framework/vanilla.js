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
  container.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add('title')
  title.textContent = '⚡ Electron-vite + ';

  const highlight = document.createElement('span');
  highlight.classList.add('vanilla')
  highlight.textContent = 'Vanilla';

  const paragraph = document.createElement('p');
  paragraph.classList.add('description');
  paragraph.textContent = 'Thanks for using my template. Happy coding!';
    
  const link = document.createElement('a');
  link.classList.add('link');
  link.href = 'https://github.com/Alexrsnchz/create-electron-starter';
  link.target = '_blank';
  link.textContent = '🚀 View on GitHub';

  title.appendChild(highlight);
  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(button);
    
  root.appendChild(container);
}`;

export const vanillaTailwindMain = `import './assets/styles/main.css';

const root = document.querySelector<HTMLDivElement>('#app');
if (root) {
  const container = document.createElement('div');
  container.className = 'w-[100vw] h-[100vh] flex flex-col items-center text-center bg-[linear-gradient(to_bottom,_#1f2544,_#272c4d,_#35395a,_#4a4e6d,_#6b6b85,_#83759a,_#a37aaf,_#d2a6cd)]';
  
  const title = document.createElement('h1');
  title.className = 'mt-[10rem] font-bold text-[2.5rem] text-[#f6f6f6]';
  title.textContent = '⚡ Electron-vite + ';

  const highlight = document.createElement('span');
  highlight.className = 'text-[#ffa28b]';
  highlight.textContent = 'Vanilla';
  
  const paragraph = document.createElement('p');
  paragraph.className = 'mt-[1.5rem] max-w-[500px] leading-[1.7] text-[#d9d9d9]';
  paragraph.textContent = 'Thanks for using my template! If you find it useful, consider giving the project a star on GitHub ⭐';
  
  const link = document.createElement('a');
  link.className = 'mt-[4rem] px-[30px] py-[8px] rounded-[5px] text-[#f6f6f6] no-underline border border-[#303355] bg-[#414669] transition-all duration-200 ease-in-out hover:bg-[#b489c9] hover:border-[#d2a6cd] hover:shadow-[0_0_12px_#b489c9]';
  link.href = 'https://github.com/Alexrsnchz/create-electron-starter';
  link.target = '_blank';
  link.textContent = '🚀 View on GitHub';

  title.appendChild(highlight);
  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(link);

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

.title {
    margin-top: 10rem;
    font-weight: bold;
    font-size: 2.5rem;
    color: #f6f6f6;
}

.vanilla {
    color: #ffa28b;
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
}`;
