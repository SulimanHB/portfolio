import { useEffect } from 'react';
import { coverProgress, stickyTop } from '../lib/stacking';

/**
 * Efecto «tarjetas apiladas» entre las secciones `.scroll-scene`:
 * - --stick-top: dónde se queda fija cada sección (depende de su altura).
 * - --cover: cuánto la ha tapado ya la siguiente (0–1).
 * El CSS usa esas variables para fijarla, alejarla y oscurecerla.
 *
 * Con movimiento reducido no hace nada y las secciones se desplazan normal.
 */
export function useScrollScenes() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scenes = Array.from(document.querySelectorAll<HTMLElement>('.scroll-scene'));
    const header = document.querySelector('.site-header');
    const headerHeight = () => header?.getBoundingClientRect().height ?? 0;
    let frame = 0;

    // La altura cambia al cargar fuentes o al girar el móvil: se recalcula.
    const updateStickyTops = () => {
      for (const scene of scenes) {
        const top = stickyTop(scene.offsetHeight, window.innerHeight, headerHeight());
        scene.style.setProperty('--stick-top', `${top}px`);
      }
    };

    const updateCover = () => {
      frame = 0;
      scenes.forEach((scene, i) => {
        const next = scenes[i + 1];
        const cover = next ? coverProgress(next.getBoundingClientRect().top, window.innerHeight, headerHeight()) : 0;
        scene.style.setProperty('--cover', cover.toFixed(3));
      });
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(updateCover);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateStickyTops();
      schedule();
    });
    scenes.forEach((scene) => resizeObserver.observe(scene));

    updateStickyTops();
    updateCover();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', updateStickyTops);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', updateStickyTops);
    };
  }, []);
}
