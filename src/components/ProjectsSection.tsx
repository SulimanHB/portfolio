import { categoryLabels, projects, type Project } from '../data/projects';
import { FeatureProject } from './FeatureProject';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { StageSection } from './StageSection';
import './ProjectsSection.css';

function hasFeature(project: Project): project is Project & { feature: NonNullable<Project['feature']> } {
  return project.feature !== undefined;
}

// Los proyectos se numeran en el orden de la lista: primero el destacado
// en una tarjeta grande y después el resto en filas.
export function ProjectsSection() {
  return (
    <StageSection id="proyectos" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        label="01 / Trabajo"
        title="Proyectos"
        description="Productos personales y trabajos académicos que muestran diferentes maneras de resolver problemas."
      />

      {projects.map((project, i) =>
        hasFeature(project) ? <FeatureProject key={project.id} project={project} index={i + 1} /> : null,
      )}

      <div className="project-rows">
        {projects.map((project, i) =>
          hasFeature(project) ? null : (
            <Reveal key={project.id} className="project-row">
              <div>
                <p className="label">{String(i + 1).padStart(2, '0')} / {categoryLabels[project.category]}</p>
                <h3>{project.title}</h3>
              </div>
              <p className="project-row__summary">{project.summary}</p>
            </Reveal>
          ),
        )}
      </div>
    </StageSection>
  );
}
