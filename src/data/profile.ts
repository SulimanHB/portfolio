import type { IconName } from '../components/Icon';

// Única fuente de datos personales del sitio. Todo procede del CV y de lo que
// Suliman ha autorizado publicar; si cambia algo, se cambia solo aquí.

export interface ContactLink {
  /** Nombre del canal, por ejemplo «LinkedIn». */
  label: string;
  /** Texto visible del enlace. */
  text: string;
  href: string;
  icon: IconName;
  /** Los perfiles externos se abren en otra pestaña. */
  external?: boolean;
}

export const profile = {
  name: 'Suliman Hassan El Boutaybi',
  role: 'Desarrollador de software · Full stack',
  location: 'Gran Canaria, España',
  intro:
    'Soy Suliman Hassan El Boutaybi, graduado en Ingeniería Informática. He desarrollado una plataforma ' +
    'de firma digital con React, Node.js y PostgreSQL, y construyo proyectos propios como Vocabia.',
  approach:
    'Me interesa entender el problema completo y construir soluciones que funcionen de verdad.',
  education:
    'Me gradué en Ingeniería Informática por la Universidad de Las Palmas de Gran Canaria (2022–2026). ' +
    'Me interesa seguir creciendo en frontend, backend y desarrollo full stack, con código que pueda ' +
    'comprender, mantener y explicar.',
} as const;

export const email: ContactLink = {
  label: 'Email',
  icon: 'mail',
  text: 'hsuliman358@gmail.com',
  href: 'mailto:hsuliman358@gmail.com',
};

// LinkedIn y GitHub muestran el nombre de Suliman y llevan a su perfil.
export const contactLinks: readonly ContactLink[] = [
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    text: profile.name,
    href: 'https://www.linkedin.com/in/suliman-hassan-el-boutaybi-54340b3b0/',
    external: true,
  },
  { label: 'GitHub', icon: 'github', text: profile.name, href: 'https://github.com/SulimanHB', external: true },
];

/** Tecnologías del CV agrupadas para la sección «Sobre mí». */
export const skillGroups: readonly { label: string; items: string }[] = [
  { label: 'Lenguajes', items: 'JavaScript, TypeScript, Java, Python, HTML, CSS' },
  { label: 'Interfaz y servidor', items: 'React, Angular, Node.js, Express' },
  { label: 'Datos y herramientas', items: 'PostgreSQL, Git, GitHub, Docker, Firebase' },
  { label: 'Competencias', items: 'APIs REST, autenticación, integración de servicios, despliegue' },
];
