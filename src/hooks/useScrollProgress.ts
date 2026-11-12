import { useEffect, useState } from 'react';
import { calculateScrollProgress } from '../lib/scrollProgress';

/**
 * Progreso de scroll de la página (0–1).
 * El evento `scroll` puede dispararse muchas veces por fotograma; con
 * requestAnimationFrame se calcula como mucho una vez por fotograma.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      setProgress(calculateScrollProgress(window.scrollY, root.scrollHeight, window.innerHeight));
    };

    const scheduleUpdate = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return progress;
}
