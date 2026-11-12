import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { VocabiaPage } from './VocabiaPage';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VocabiaPage />
  </StrictMode>,
);
