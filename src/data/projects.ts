import type { IconName } from '../components/Icon';
import { portfolioShots, vocabiaShots, type Shot } from './shots';

// Cada proyecto solo contiene hechos comprobados en el código o confirmados
// por Suliman. Para añadir uno nuevo basta con añadir un objeto a la lista.

export type ProjectCategory = 'personal' | 'universidad';

export const categoryLabels: Record<ProjectCategory, string> = {
  personal: 'Proyecto personal',
  universidad: 'Proyecto académico',
};

export interface ProjectLink {
  label: string;
  href: string;
  icon?: IconName;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  tech?: readonly string[];
  /** Página propia del proyecto dentro del portfolio. */
  detailHref?: string;
  /** Enlaces externos (se abren en otra pestaña). */
  links?: readonly ProjectLink[];
  /** Aviso breve junto a los enlaces, por ejemplo que no hay demo online. */
  note?: string;
  /** Estado honesto del proyecto, por ejemplo «Beta funcional en local». */
  status?: string;
  /**
   * Proyecto destacado: tarjeta grande con una captura real y pares de
   * palabras flotando a su alrededor (original → traducción).
   */
  feature?: {
    image: { shot: Shot; alt: string };
    pairs: readonly (readonly [string, string])[];
  };
}

export const projects: readonly Project[] = [
  {
    id: 'vocabia',
    title: 'Vocabia',
    category: 'personal',
    summary:
      'Un diccionario personal multilingüe para guardar palabras y practicar idiomas. Organiza el ' +
      'vocabulario por parejas de idiomas y colecciones, permite buscar, importar y exportar tarjetas, ' +
      'y ofrece ejercicios escritos, de escucha y de voz.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL / PGlite'],
    detailHref: '/vocabia/',
    links: [{ label: 'Código en GitHub', href: 'https://github.com/SulimanHB/Vocabia', icon: 'github' }],
    note: 'Se ejecuta en local desde GitHub; actualmente no tiene demo web alojada.',
    status: 'Beta funcional en local',
    feature: {
      image: {
        shot: vocabiaShots.home,
        alt: 'Pantalla de inicio de Vocabia con el lema «Una palabra más. Un mundo más grande.»',
      },
      pairs: [
        ['hello', 'hola'],
        ['apprendre', 'aprender'],
        ['Wort', 'palabra'],
      ],
    },
  },
  {
    id: 'portfolio',
    title: 'Mi portfolio',
    category: 'personal',
    summary:
      'La web que estás viendo. Partí de una idea propia, generé versiones con dos IA, ChatGPT y Claude, ' +
      'comparé lo que proponía cada una y combiné lo mejor en un único proyecto en React.',
    tech: ['React', 'TypeScript', 'Vite', 'Vitest'],
    detailHref: '/portfolio/',
    links: [{ label: 'Código en GitHub', href: 'https://github.com/SulimanHB/portfolio', icon: 'github' }],
    status: 'Primera versión',
    feature: {
      image: {
        shot: portfolioShots.home,
        alt: 'Portada del portfolio con el titular «Ideas que toman forma.»',
      },
      pairs: [
        ['HTML', 'React'],
        ['dos IA', 'una web'],
        ['idea', 'proyecto'],
      ],
    },
  },
  {
    id: 'webs-academicas',
    title: 'Desarrollo web',
    category: 'universidad',
    summary: 'Dos páginas web funcionales realizadas como prácticas durante el grado.',
  },
  {
    id: 'clusteres-kvm',
    title: 'Clústeres con KVM',
    category: 'universidad',
    summary: 'Creación de clústeres mediante virtualización con KVM.',
  },
  {
    id: 'redes-neuronales',
    title: 'Redes neuronales',
    category: 'universidad',
    summary: 'Desarrollo de aplicaciones basadas en redes neuronales durante el grado.',
  },
];
