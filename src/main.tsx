import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import './index.css';

// Imports let one file use code from another. CSS imports tell Vite to include
// these styles in the page; component imports give us reusable UI functions.
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Missing #root element in index.html');

// createRoot connects React to the HTML element in index.html. JSX looks like
// HTML, but it describes UI using JavaScript. Capitalized tags are components.
createRoot(rootElement).render(
  <StrictMode>
    {/* BrowserRouter lets all descendant components read and change the URL.
        StrictMode runs extra development checks; it adds no visible element. */}
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>,
);
