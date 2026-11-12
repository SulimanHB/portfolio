import { describe, expect, it } from 'vitest';
import { calculateScrollProgress } from './scrollProgress';

describe('calculateScrollProgress', () => {
  it('vale 0 arriba del todo y 1 al final', () => {
    expect(calculateScrollProgress(0, 3000, 1000)).toBe(0);
    expect(calculateScrollProgress(2000, 3000, 1000)).toBe(1);
  });

  it('calcula la fracción intermedia', () => {
    expect(calculateScrollProgress(500, 3000, 1000)).toBe(0.25);
  });

  it('se queda entre 0 y 1 con el rebote del scroll en móvil', () => {
    expect(calculateScrollProgress(-40, 3000, 1000)).toBe(0);
    expect(calculateScrollProgress(2100, 3000, 1000)).toBe(1);
  });

  it('vale 0 si la página no tiene scroll', () => {
    expect(calculateScrollProgress(0, 800, 1000)).toBe(0);
  });
});
