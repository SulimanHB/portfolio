import { Analytics } from '@vercel/analytics/react';
import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';

/**
 * Monta una página del sitio. Todas las páginas pasan por aquí, así que lo
 * común (estilos globales y estadísticas de visitas) se añade una sola vez.
 *
 * <Analytics /> es Vercel Web Analytics: cuenta visitas sin cookies. En local
 * no envía nada; solo funciona en la web publicada en Vercel.
 */
export function mountPage(page: ReactNode) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      {page}
      <Analytics />
    </StrictMode>,
  );
}
