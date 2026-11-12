import { profile, skillGroups } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { StageSection } from './StageSection';
import './AboutSection.css';

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
        </Reveal>
      </div>
    </StageSection>
  );
}
