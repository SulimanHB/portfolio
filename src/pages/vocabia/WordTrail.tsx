import { useActiveSection } from '../../hooks/useActiveSection';
import { wordIndexForSection, words } from './words';

interface WordTrailProps {
  /** Ids de los capítulos, en orden; cada uno muestra el siguiente idioma. */
  sectionIds: readonly string[];
}

// Narrativa visual: la misma palabra cambia de idioma en cada capítulo.
// Es decorativa (aria-hidden): el contenido real está en el texto.
export function WordTrail({ sectionIds }: WordTrailProps) {
  const section = useActiveSection(sectionIds);
  const index = wordIndexForSection(section, words.length);
  const current = words[index];

  return (
    <div className="word-trail" aria-hidden="true">
      <p className="word-trail__language">{current.language}</p>
      {/* La key nueva hace que React recree el nodo y se repita la animación de entrada. */}
      <p key={current.lang} className="word-trail__word" lang={current.lang}>
        {current.word}
      </p>
      <ol className="word-trail__steps">
        {words.map((item, i) => (
          <li key={item.lang} className={i === index ? 'is-active' : undefined} />
        ))}
      </ol>
    </div>
  );
}
