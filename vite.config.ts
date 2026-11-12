import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 5174 para no chocar con Vocabia, que usa 5173.
  server: { host: '127.0.0.1', port: 5174, strictPort: true },
  // Sitio multipágina: cada HTML es una página real con su propia URL
  // (/, /vocabia/ y /portfolio/), sin router y sin reglas especiales en el alojamiento.
  // Las rutas son relativas a la raíz del proyecto.
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        vocabia: 'vocabia/index.html',
        portfolio: 'portfolio/index.html',
        // Vercel muestra dist/404.html cuando una dirección no existe.
        notFound: '404.html',
      },
    },
  },
  test: { environment: 'node' },
});
