// «Palabra» en los siete idiomas iniciales de Vocabia. Cada capítulo de la
// página muestra el siguiente idioma.
export interface LanguageWord {
  /** Código BCP 47 para que lectores de pantalla y tipografías usen el idioma correcto. */
  lang: string;
  language: string;
  word: string;
}

export const words: readonly LanguageWord[] = [
  { lang: 'es', language: 'Español', word: 'palabra' },
  { lang: 'en', language: 'Inglés', word: 'word' },
  { lang: 'fr', language: 'Francés', word: 'mot' },
  { lang: 'de', language: 'Alemán', word: 'Wort' },
  { lang: 'it', language: 'Italiano', word: 'parola' },
  { lang: 'pt', language: 'Portugués', word: 'palavra' },
  { lang: 'ja', language: 'Japonés', word: '単語' },
];

/**
 * Índice de palabra para un capítulo. Si hay más capítulos que idiomas,
 * los últimos se quedan con el último idioma.
 */
export function wordIndexForSection(sectionIndex: number, count: number): number {
  if (count <= 0) return 0;
  return Math.min(count - 1, Math.max(0, sectionIndex));
}
