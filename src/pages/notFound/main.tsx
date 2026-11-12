import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NotFoundPage } from './NotFoundPage';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotFoundPage />
  </StrictMode>,
);
