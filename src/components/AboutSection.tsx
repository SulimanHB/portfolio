import { education, nextGoals, profile, skillGroups, type StudyItem } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { StageSection } from './StageSection';
import './AboutSection.css';

function StudyList({ items }: { items: readonly StudyItem[] }) {
  return (
    <ul className="about__studies">
      {items.map((item) => (
        <li key={item.title}>
          <div>
            <p className="about__study-title">{item.title}</p>
            <p className="about__study-detail">
              {item.detail}
              {item.period && <> · {item.period}</>}
            </p>
          </div>
          <span className="status-pill">{item.status}</span>
        </li>
      ))}
    </ul>
  );
}

export function AboutSection() {
  return (
    <StageSection id="sobre-mi" className="about-section" labelledBy="about-title">
      <SectionHeading id="about-title" label="03 / Perfil" title="Sobre mí" />

      <div className="about split">
        <Reveal className="about__lead">
          Ingeniero informático con curiosidad por <em>todo el recorrido</em> de una aplicación.
        </Reveal>
        <Reveal className="about__detail" delay={120}>
          <p>{profile.education}</p>
          <h3>Herramientas y tecnologías</h3>
          <dl className="about__skills">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>

          <h3>Formación</h3>
          <StudyList items={education} />

          <h3>Próximos objetivos</h3>
          <StudyList items={nextGoals} />
        </Reveal>
      </div>
    </StageSection>
  );
}
