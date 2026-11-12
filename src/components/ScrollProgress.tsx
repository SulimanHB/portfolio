import type { CSSProperties } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { PixelCar } from './PixelCar';
import './ScrollProgress.css';

interface ScrollProgressProps {
  /** Cambia al entrar en otra sección; cada cambio hace saltar al coche. */
  hopKey?: string;
}

// React solo actualiza la variable CSS --progress; el CSS decide cómo se
// dibuja (ancho de la línea y posición del coche) usando transform, que el
// navegador anima sin recalcular el diseño de la página.
export function ScrollProgress({ hopKey }: ScrollProgressProps) {
  const progress = useScrollProgress();
  const style = { '--progress': progress } as CSSProperties;

  return (
    <div className="scroll-progress" style={style} aria-hidden="true">
      <div className="scroll-progress__track">
        <div className="scroll-progress__fill" />
      </div>
      <div className="scroll-progress__lane">
        {/* Con una key nueva React recrea el envoltorio y la animación de salto se repite. */}
        <div key={hopKey} className={hopKey ? 'scroll-progress__car is-hopping' : 'scroll-progress__car'}>
          <PixelCar />
        </div>
      </div>
    </div>
  );
}
