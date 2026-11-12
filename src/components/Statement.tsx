import { profile } from '../data/profile';
import { Reveal } from './Reveal';
import { StageSection } from './StageSection';
import './Statement.css';

// Franja verde con la forma de trabajar de Suliman.
export function Statement() {
  return (
    <StageSection id="enfoque" className="statement" ariaLabel="Enfoque de trabajo">
      <Reveal>
        <p className="label">Mi enfoque</p>
        <p className="statement__text">
          Del primer <em>¿y si…?</em> al último detalle de la interfaz. {profile.approach}
        </p>
      </Reveal>
    </StageSection>
  );
}
