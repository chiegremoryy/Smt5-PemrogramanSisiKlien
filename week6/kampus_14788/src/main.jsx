import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Tambahkan impor BrowserRouter
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Bungkus aplikasi dengan BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);