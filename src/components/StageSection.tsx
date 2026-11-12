import type { ReactNode } from 'react';
import { useStageActivation } from '../hooks/useStageActivation';
import './StageSection.css';

interface StageSectionProps {
  id?: string;
  className?: string;
  labelledBy?: string;
  ariaLabel?: string;
  children: ReactNode;
}

// Sección que «entra en escena»: cada vez que se llega a ella bajando, se
// retira una cortina verde y se dibuja una línea en su borde superior
// (ver StageSection.css).
export function StageSection({ id, className, labelledBy, ariaLabel, children }: StageSectionProps) {
  const { ref, isActive } = useStageActivation<HTMLElement>();
  const classes = ['section-stage', 'section-pad', 'scroll-scene', className, isActive && 'is-active']
    .filter(Boolean)
    .join(' ');

  return (
    <section ref={ref} id={id} className={classes} aria-labelledby={labelledBy} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
