import { navItems, type SectionMarker } from '../data/navigation';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { Icon } from './Icon';
import { ScrollProgress } from './ScrollProgress';
import './SiteHeader.css';

const NO_SECTIONS: readonly SectionMarker[] = [];

interface SiteHeaderProps {
  /**
   * Página donde viven las secciones. En la portada es '' (anclas locales);
   * en una página de proyecto es '/' para volver a la portada.
   */
  homePath?: '' | '/';
  /**
   * Secciones de la página actual, en orden. Al pasar de una a otra haciendo
   * scroll, la cabecera anuncia la nueva y el coche da un saltito.
   * Debe ser una constante para que la referencia no cambie entre renders.
   */
  sections?: readonly SectionMarker[];
}

export function SiteHeader({ homePath = '', sections = NO_SECTIONS }: SiteHeaderProps) {
  const brandHref = homePath === '' ? '#inicio' : '/';
  const active = useActiveSection(sections.map((section) => section.id));
  const current = sections[active];

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="site-header__left">
          <a className="site-header__brand" href={brandHref} aria-label={`${profile.name}, volver al inicio`}>
            S<span className="site-header__star" aria-hidden="true">✳</span>
          </a>
          {current && (
            // La key nueva recrea el nodo y repite la animación de entrada.
            <p key={current.id} className="site-header__section" aria-hidden="true">
              {current.label}
            </p>
          )}
        </div>
        <nav aria-label="Navegación principal">
          <ul className="site-header__nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={[item.highlight && 'site-header__cta', homePath === '' && current?.id === item.id && 'is-current']
                    .filter(Boolean)
                    .join(' ') || undefined}
                  href={`${homePath}#${item.id}`}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ScrollProgress hopKey={current?.id} />
    </header>
  );
}
