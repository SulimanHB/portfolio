import { describe, expect, it } from 'vitest';
import { categoryLabels, projects } from './projects';

// Protegen el contrato de los datos: los ids se usan como `key` de React
// y cada proyecto debe tener una etiqueta de categoría.
describe('datos de proyectos', () => {
  it('no repite ids', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('solo usa categorías con etiqueta', () => {
    for (const project of projects) expect(categoryLabels[project.category]).toBeTruthy();
  });

  it('enlaza fuera solo a direcciones https', () => {
    const hrefs = projects.flatMap((project) => project.links ?? []).map((link) => link.href);
    for (const href of hrefs) expect(href).toMatch(/^https:\/\//);
  });

  it('las páginas internas son rutas absolutas del propio sitio', () => {
    for (const project of projects) {
      if (project.detailHref) expect(project.detailHref).toMatch(/^\/[a-z-]+\/$/);
    }
  });
});
