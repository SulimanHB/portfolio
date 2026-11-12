import { describe, expect, it } from 'vitest';
import { wordIndexForSection, words } from './words';

describe('wordIndexForSection', () => {
  it('asigna un idioma por capítulo', () => {
    expect(wordIndexForSection(0, 7)).toBe(0);
    expect(wordIndexForSection(3, 7)).toBe(3);
  });

  it('mantiene el último idioma si hay más capítulos que idiomas', () => {
    expect(wordIndexForSection(7, 7)).toBe(6);
    expect(wordIndexForSection(20, 7)).toBe(6);
  });

  it('no baja de la primera palabra', () => {
    expect(wordIndexForSection(-1, 7)).toBe(0);
  });

  it('incluye los siete idiomas de Vocabia sin repetir', () => {
    expect(new Set(words.map((item) => item.lang)).size).toBe(7);
  });
});
