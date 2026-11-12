import { useRef } from 'react';
import { useInPageLinks } from '../hooks/useInPageLinks';
import './SectionTransition.css';

// Cortina decorativa que acompaña los saltos entre secciones de la portada.
// También se encarga de que esos saltos no añadan «#seccion» a la URL.
export function SectionTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  useInPageLinks(overlayRef);

  return (
    <div ref={overlayRef} className="section-transition" aria-hidden="true">
      <span>Explorar</span>
    </div>
  );
}
