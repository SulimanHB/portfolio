import { useEffect, useRef, useState, type CSSProperties } from 'react';

/**
 * Indica si un elemento ya ha entrado en pantalla. Solo se activa una vez:
 * cuando el elemento aparece, el observador se desconecta.
 *
 * Sin IntersectionObserver (navegadores muy antiguos) el contenido se muestra
 * directamente. La preferencia de movimiento reducido se resuelve en CSS.
 */
export function useRevealOnScroll<T extends Element>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Se activa cuando el elemento ya ha subido un poco desde el borde inferior.
      { rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}

/** Clase y estilo comunes para cualquier elemento que se revele. */
export function revealProps(isVisible: boolean, delayMs = 0): { className: string; style?: CSSProperties } {
  return {
    className: isVisible ? 'reveal is-visible' : 'reveal',
    style: delayMs > 0 ? ({ '--reveal-delay': `${delayMs}ms` } as CSSProperties) : undefined,
  };
}
