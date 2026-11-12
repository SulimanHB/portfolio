import { techStack } from '../data/techStack';
import { ScrollProgress } from './ScrollProgress';
import { TechTicker } from './TechTicker';
import './SiteDock.css';

// Barra fija en la parte de abajo, compañera de la cabecera: lleva la cinta
// de tecnologías y, en su borde superior, el mismo coche que avanza con el scroll.
export function SiteDock() {
  return (
    <div className="site-dock">
      <ScrollProgress placement="dock" />
      <TechTicker items={techStack} />
    </div>
  );
}
