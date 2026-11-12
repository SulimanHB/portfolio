import collections from '../assets/projects/vocabia/idiomas-colecciones.webp';
import home from '../assets/projects/vocabia/inicio.webp';
import study from '../assets/projects/vocabia/estudio.webp';
import cards from '../assets/projects/vocabia/tarjetas.webp';
import portfolioContact from '../assets/projects/portfolio/contacto.webp';
import portfolioHome from '../assets/projects/portfolio/portada.webp';
import portfolioStack from '../assets/projects/portfolio/tarjetas-apiladas.webp';

/** Imagen con su tamaño real en píxeles. */
export interface Shot {
  src: string;
  width: number;
  height: number;
}

// Capturas de los proyectos. Las de Vocabia salen de su demo local. Declarar ancho y alto permite al
// navegador reservar su hueco antes de cargarlas: la página no «crece» al
// bajar y los saltos a una sección calculan bien la distancia.
export const vocabiaShots = {
  home: { src: home, width: 1440, height: 900 },
  collections: { src: collections, width: 1240, height: 470 },
  cards: { src: cards, width: 1240, height: 1050 },
  study: { src: study, width: 1240, height: 810 },
} satisfies Record<string, Shot>;

// Capturas de este portfolio a 1280×900, tomadas con Chrome sin barra de scroll.
export const portfolioShots = {
  home: { src: portfolioHome, width: 1280, height: 900 },
  stack: { src: portfolioStack, width: 1280, height: 900 },
  contact: { src: portfolioContact, width: 1280, height: 900 },
} satisfies Record<string, Shot>;
