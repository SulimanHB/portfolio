import { experience } from '../data/experience';
import { formatPeriod } from '../lib/formatPeriod';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { StageSection } from './StageSection';
import { TagList } from './TagList';
import './ExperienceSection.css';

export function ExperienceSection() {
  return (
    <StageSection id="experiencia" labelledBy="experience-title">
      <SectionHeading id="experience-title" label="02 / Recorrido" title="Experiencia" />

      {experience.map((entry) => (
        <div key={entry.id} className="experience split">
          <Reveal className="experience__date">
            <time dateTime={entry.start}>{formatPeriod(entry.start, entry.end)}</time>
            <br />
            <span>{entry.role}</span>
          </Reveal>
          <Reveal className="experience__body" delay={120}>
            <h3>{entry.organization}</h3>
            <p>{entry.summary}</p>
            <ul className="experience__highlights">
              {entry.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <TagList items={entry.tech} label="Tecnologías" />
          </Reveal>
        </div>
      ))}
    </StageSection>
  );
}
