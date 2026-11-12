import { useEffect, useRef, useState } from 'react';

/**
 * Activa una sección cada vez que entra en pantalla bajando.
 *
 * Cuando la sección vuelve a quedar por debajo de la pantalla (porque se ha
 * subido), se desactiva; así la animación de entrada se repite la próxima vez
 * que se llegue a ella. Si sale por arriba se queda activa: ya se vio entrar.
 */
export function useStageActivation<T extends Element>() {
  const ref = useRef<T>(null);
  const [isActive, setIsActive] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
        else if (entry.boundingClientRect.top > 0) setIsActive(false);
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isActive };
}
