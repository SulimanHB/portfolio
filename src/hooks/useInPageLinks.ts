import { useEffect, type RefObject } from 'react';
import { inPageTarget, jumpTo } from '../lib/inPageNavigation';

const COVER_MS = 530;
const TOTAL_MS = 1100;

/**
 * Gestiona los enlaces a secciones de la misma página («#proyectos»…):
 * - Llevan a la sección pero NO añaden «#proyectos» a la URL.
 * - Si se llega desde otra página con un «#» (p. ej. «/#proyectos» desde
 *   /vocabia/), se va a esa sección y se borra el «#» de la URL.
 * - Con `overlayRef`, una cortina verde con el nombre de la sección tapa el
 *   salto (solo si se permite el movimiento).
 * Las páginas propias (como /vocabia/) sí cambian la URL: son otra página.
 */
export function useInPageLinks(overlayRef?: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const overlay = overlayRef?.current ?? null;
    const label = overlay?.querySelector('span');
    const timers: number[] = [];
    let busy = false;

    // «#seccion» en la URL (al llegar desde otra página o al escribirlo a
    // mano): se salta allí y se limpia la URL.
    const consumeHash = () => {
      if (!location.hash) return;
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      history.replaceState(history.state, '', location.pathname + location.search);
      if (target) requestAnimationFrame(() => jumpTo(target, 'instant'));
    };
    consumeHash();
    window.addEventListener('hashchange', consumeHash);

    const onClick = (event: MouseEvent) => {
      const found = inPageTarget(event);
      if (!found) return;
      event.preventDefault();
      const { link, target } = found;

      const animate = overlay && !reducedMotion.matches && !link.classList.contains('skip-link');
      if (!animate) {
        jumpTo(target, reducedMotion.matches ? 'instant' : 'smooth');
        return;
      }

      if (busy) return;
      busy = true;
      if (label) label.textContent = target.querySelector('h1, h2')?.textContent ?? 'Explorar';
      overlay.classList.remove('is-leaving');
      overlay.classList.add('is-entering');

      // Con la pantalla cubierta se salta de golpe y la cortina se retira.
      timers.push(window.setTimeout(() => {
        jumpTo(target, 'instant');
        overlay.classList.replace('is-entering', 'is-leaving');
      }, COVER_MS));

      timers.push(window.setTimeout(() => {
        overlay.style.transition = 'none';
        overlay.classList.remove('is-leaving');
        requestAnimationFrame(() => overlay.style.removeProperty('transition'));
        busy = false;
      }, TOTAL_MS));
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', consumeHash);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [overlayRef]);
}
