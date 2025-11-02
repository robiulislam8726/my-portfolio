// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import './index.css'; // Tailwind CSS
import { ThemeProvider } from './context/ThemeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/my-portfolio">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
