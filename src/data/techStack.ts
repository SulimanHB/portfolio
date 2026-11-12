import {
  siAngular,
  siCss,
  siDocker,
  siExpress,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siTypescript,
} from 'simple-icons';

// Tecnologías del CV para la cinta de la portada. Los logotipos vienen de
// Simple Icons (licencia CC0). Java usa el logo de OpenJDK, porque Simple
// Icons no incluye el de Oracle Java.
export interface Tech {
  name: string;
  /** Trazado SVG del logotipo en una cuadrícula de 24×24. */
  path: string;
}

export const techStack: readonly Tech[] = [
  { name: 'JavaScript', path: siJavascript.path },
  { name: 'TypeScript', path: siTypescript.path },
  { name: 'React', path: siReact.path },
  { name: 'Angular', path: siAngular.path },
  { name: 'Node.js', path: siNodedotjs.path },
  { name: 'Express', path: siExpress.path },
  { name: 'PostgreSQL', path: siPostgresql.path },
  { name: 'Java', path: siOpenjdk.path },
  { name: 'Python', path: siPython.path },
  { name: 'HTML', path: siHtml5.path },
  { name: 'CSS', path: siCss.path },
  { name: 'Git', path: siGit.path },
  { name: 'GitHub', path: siGithub.path },
  { name: 'Docker', path: siDocker.path },
  { name: 'Firebase', path: siFirebase.path },
];
