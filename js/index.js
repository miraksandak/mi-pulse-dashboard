import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../public/css/style.css';

console.log('JS loaded');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-root');
  console.log('container:', container);

  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
});
