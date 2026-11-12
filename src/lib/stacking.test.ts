import { describe, expect, it } from 'vitest';
import { coverProgress, stickyTop } from './stacking';

// Pantalla de 1000 px con cabecera de 74 px.
const VH = 1000;
const HEADER = 74;

describe('stickyTop', () => {
  it('una sección que cabe se fija bajo la cabecera', () => {
    expect(stickyTop(600, VH, HEADER)).toBe(HEADER);
  });

  it('una sección alta se fija cuando su final llega al fondo', () => {
    expect(stickyTop(2500, VH, HEADER)).toBe(-1500);
  });
});

describe('coverProgress', () => {
  it('vale 0 mientras la siguiente tarjeta no ha asomado', () => {
    expect(coverProgress(1000, VH, HEADER)).toBe(0);
    expect(coverProgress(1400, VH, HEADER)).toBe(0);
  });

  it('crece mientras la siguiente sube', () => {
    expect(coverProgress(537, VH, HEADER)).toBeCloseTo(0.5);
  });

  it('vale 1 cuando la siguiente llega a la cabecera', () => {
    expect(coverProgress(HEADER, VH, HEADER)).toBe(1);
    expect(coverProgress(-300, VH, HEADER)).toBe(1);
  });
});
