import { useEffect, useState } from 'react';

/** Altura de la línea de lectura, como fracción de la pantalla. */
const READING_LINE = 0.45;

/**
 * Devuelve el índice de la sección que se está leyendo: la última cuyo borde
 * superior ya ha pasado la línea de lectura (45 % de la pantalla). Antes de
 * llegar a la primera, vale 0.
 *
 * Se recalcula desde las posiciones reales y no desde «quién ha entrado»,
 * porque con las tarjetas apiladas una sección fijada sigue en pantalla
 * mientras la siguiente le pasa por encima.
 */
export function useActiveSection(sectionIds: readonly string[]): number {
  const [active, setActive] = useState(0);
  // Los ids se comparan como texto: así da igual que el array sea nuevo en
  // cada render y la escucha solo se recrea si cambian de verdad.
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    if (idsKey === '') return;

    const elements = idsKey
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * READING_LINE;
      let index = 0;
      elements.forEach((element, i) => {
        if (element.getBoundingClientRect().top <= line) index = i;
      });
      setActive(index);
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [idsKey]);

  return active;
}
