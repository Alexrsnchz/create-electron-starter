export const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Electron-vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>`;

export const main = `import { createRoot } from 'react-dom/client';
import './assets/styles/main.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);`;

export const app = `export default function App() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui' }}>
      <h1>⚡ Electron-vite + <span style={{ color: 'deepskyblue' }}>React</span></h1>
      <p>Thanks for using my template. Happy coding!</p>
    </div>
  );
}`;
