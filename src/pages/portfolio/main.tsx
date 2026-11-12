import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PortfolioPage } from './PortfolioPage';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
);
