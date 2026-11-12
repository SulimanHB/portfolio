import type { IconName } from '../components/Icon';

// Cada entrada apunta al `id` de una sección de la portada.
export interface NavItem {
  id: string;
  label: string;
  icon: IconName;
  /** Se muestra como botón con borde (llamada a la acción). */
  highlight?: boolean;
}

export const navItems: readonly NavItem[] = [
  { id: 'proyectos', label: 'Proyectos', icon: 'briefcase' },
  { id: 'experiencia', label: 'Experiencia', icon: 'route' },
  { id: 'sobre-mi', label: 'Sobre mí', icon: 'user' },
  { id: 'contacto', label: 'Contacto', icon: 'mail', highlight: true },
];

/** Sección que se anuncia en la cabecera al llegar a ella haciendo scroll. */
export interface SectionMarker {
  id: string;
  label: string;
}

// Secciones de la portada en orden de aparición.
export const homeSections: readonly SectionMarker[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: '01 / Proyectos' },
  { id: 'enfoque', label: 'Mi enfoque' },
  { id: 'experiencia', label: '02 / Experiencia' },
  { id: 'sobre-mi', label: '03 / Sobre mí' },
  { id: 'contacto', label: '04 / Contacto' },
];
