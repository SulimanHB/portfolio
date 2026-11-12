import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SectionTransition } from './components/SectionTransition';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { Statement } from './components/Statement';
import { homeSections } from './data/navigation';
import { useScrollScenes } from './hooks/useScrollScenes';

export function App() {
  useScrollScenes();

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader sections={homeSections} />
      <SectionTransition />
      <main id="contenido">
        <Hero />
        <ProjectsSection />
        <Statement />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
