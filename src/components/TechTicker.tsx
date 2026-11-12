import type { Tech } from '../data/techStack';
import './TechTicker.css';

interface TechTickerProps {
  items: readonly Tech[];
}

function TechItems({ items }: TechTickerProps) {
  return (
    <>
      {items.map((tech) => (
        <li key={tech.name} className="tech-ticker__item">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d={tech.path} />
          </svg>
          {tech.name}
        </li>
      ))}
    </>
  );
}

// Cinta de tecnologías en bucle. La primera lista es la que leen los lectores
// de pantalla; la segunda es una copia decorativa para que el bucle no se corte.
// Con movimiento reducido la cinta se queda quieta y la copia se oculta.
export function TechTicker({ items }: TechTickerProps) {
  return (
    <div className="tech-ticker">
      <div className="tech-ticker__track">
        <ul className="tech-ticker__list" aria-label="Tecnologías con las que trabajo">
          <TechItems items={items} />
        </ul>
        <ul className="tech-ticker__list tech-ticker__list--copy" aria-hidden="true">
          <TechItems items={items} />
        </ul>
      </div>
    </div>
  );
}
