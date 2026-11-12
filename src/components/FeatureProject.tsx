import { categoryLabels, type Project } from '../data/projects';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { TagList } from './TagList';
import './FeatureProject.css';

interface FeatureProjectProps {
  project: Project & { feature: NonNullable<Project['feature']> };
  index: number;
}

// Tarjeta grande del proyecto destacado: ilustración con palabras flotando a
// la izquierda y descripción con enlaces a la derecha.
export function FeatureProject({ project, index }: FeatureProjectProps) {
  const titleId = `project-${project.id}-title`;
  // Las tarjetas pares ponen la imagen a la derecha para alternar el ritmo.
  const className = index % 2 === 0 ? 'feature-card feature-card--reverse' : 'feature-card';

  return (
    <Reveal className={className}>
      <article aria-labelledby={titleId}>
        <div className="feature-card__visual">
          <img
            className="feature-card__shot"
            src={project.feature.image.shot.src}
            width={project.feature.image.shot.width}
            height={project.feature.image.shot.height}
            alt={project.feature.image.alt}
            loading="lazy"
            decoding="async"
          />
          {/* Las palabras son decoración: el lector de pantalla ya tiene el alt. */}
          {project.feature.pairs.map(([from, to], i) => (
            <div key={from} className={`feature-card__word feature-card__word--${i + 1}`} aria-hidden="true">
              {from} <span>→</span> {to}
            </div>
          ))}
        </div>

        <div className="feature-card__copy">
          <p className="label">{String(index).padStart(2, '0')} / {categoryLabels[project.category]}</p>
          <h3 id={titleId}>{project.title}</h3>
          {project.status && <p className="status-pill">{project.status}</p>}
          <p className="feature-card__summary">{project.summary}</p>
          {project.tech && <TagList items={project.tech} label="Tecnologías" />}

          <div className="feature-card__actions">
            {project.detailHref && (
              <a className="button button--primary" href={project.detailHref}>
                Ver proyecto<span className="visually-hidden">: {project.title}</span> <Icon name="arrow-right" />
              </a>
            )}
            {project.links?.map((link) => (
              <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon && <Icon name={link.icon} />} {link.label} <span aria-hidden="true">↗</span>
                <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
              </a>
            ))}
          </div>
          {project.note && <p className="feature-card__note">{project.note}</p>}
        </div>
      </article>
    </Reveal>
  );
}
