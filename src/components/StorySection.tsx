import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import type { Shot } from '../data/shots';

interface StorySectionProps {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
  /** Captura opcional que acompaña al texto. */
  figure?: { shot: Shot; alt: string; caption: string };
}

// Un capítulo del recorrido: título, texto y, si la hay, una captura.
export function StorySection({ id, kicker, title, children, figure }: StorySectionProps) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className="story-section" aria-labelledby={titleId}>
      <Reveal>
        <p className="story-section__kicker">{kicker}</p>
        <h2 id={titleId} className="story-section__title">{title}</h2>
        <div className="story-section__body">{children}</div>
      </Reveal>
      {figure && (
        <Reveal>
          <figure className="story-section__figure">
            <img
              src={figure.shot.src}
              width={figure.shot.width}
              height={figure.shot.height}
              alt={figure.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{figure.caption}</figcaption>
          </figure>
        </Reveal>
      )}
    </section>
  );
}
