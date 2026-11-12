# Portfolio · Suliman Hassan El Boutaybi

Mi portfolio personal como desarrollador de software full stack. Presenta mis proyectos, mi experiencia y cómo contactar conmigo.

Partí de una idea propia, generé una versión con ChatGPT (web estática en HTML, CSS y JavaScript) y otra con Claude Code (React), y combiné lo mejor de cada una en este proyecto. El proceso completo está contado en la propia web, en la página `/portfolio/`.

## Tecnologías

- **React 19 + TypeScript**, servido y compilado con **Vite** como sitio multipágina: cada proyecto tiene su propia página y URL, sin router.
- **CSS** por componente, con variables comunes de color y tipografía (Space Grotesk y DM Sans).
- **Vitest** para las pruebas y **ESLint** para revisar el código.
- Iconos SVG y animaciones hechos a mano, sin librerías extra.

## Qué incluye

- Portada con barra de progreso y un cochecito pixelado que avanza con el scroll.
- Secciones que se apilan como tarjetas al bajar, con aviso de la sección actual en la cabecera.
- Páginas de proyecto: [Vocabia](https://github.com/SulimanHB/Vocabia) y este propio portfolio.
- Respeta la preferencia de movimiento reducido del sistema y es usable con teclado.

## Estructura

```text
index.html               portada (/)
vocabia/index.html       página de Vocabia (/vocabia/)
portfolio/index.html     página de este portfolio (/portfolio/)
src/
├── components/          piezas de la interfaz, cada una con su CSS
├── data/                textos y datos: perfil, proyectos, experiencia, capturas
├── hooks/               lógica del scroll, apariciones y navegación interna
├── lib/                 funciones puras con pruebas (cálculos de scroll, fechas…)
├── pages/               componentes propios de cada página de proyecto
├── assets/              capturas de los proyectos (WebP)
└── styles/              estilos globales y comunes a las páginas de proyecto
```
