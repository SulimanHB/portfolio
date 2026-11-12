import type { ReactNode } from 'react';
import { revealProps, useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en milisegundos, útil para escalonar elementos seguidos. */
  delay?: number;
}

// Envoltorio que hace aparecer su contenido al entrar en pantalla.
export function Reveal({ children, className, delay }: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const reveal = revealProps(isVisible, delay);

  return (
    <div ref={ref} className={className ? `${className} ${reveal.className}` : reveal.className} style={reveal.style}>
      {children}
    </div>
  );
}
