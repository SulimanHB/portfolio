// Saltos a secciones de la misma página sin tocar la URL.

/**
 * Posición de un elemento en el documento si no estuviera fijado.
 * Una tarjeta apilada (sticky) puede estar «parada» en pantalla, así que su
 * posición visible no sirve: se suma la altura de los hermanos anteriores.
 */
export function layoutTop(element: HTMLElement): number {
  const parent = element.parentElement;
  if (!parent) return element.getBoundingClientRect().top + window.scrollY;
  let top = parent.getBoundingClientRect().top + window.scrollY;
  for (let sibling = parent.firstElementChild; sibling && sibling !== element; sibling = sibling.nextElementSibling) {
    top += (sibling as HTMLElement).offsetHeight;
  }
  return top;
}

/**
 * Desplaza la página hasta `target` (dejando hueco para la cabecera) y le
 * pasa el foco, para que teclado y lectores de pantalla sigan el salto.
 * No usa `location.hash`, así que la URL no cambia.
 */
export function jumpTo(target: HTMLElement, behavior: ScrollBehavior) {
  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
  window.scrollTo({ top: Math.max(0, layoutTop(target) - headerHeight), behavior });

  // En una sección se enfoca su título; en <main> (enlace «Saltar al contenido»), el propio main.
  const focusTarget = target.matches('main') ? target : (target.querySelector<HTMLElement>('h1, h2') ?? target);
  if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
  focusTarget.focus({ preventScroll: true });
}

/** Devuelve la sección a la que apunta un clic en un enlace «#id», si la hay. */
export function inPageTarget(event: MouseEvent): { link: HTMLAnchorElement; target: HTMLElement } | null {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link) return null;
  const target = document.getElementById(link.getAttribute('href')!.slice(1));
  return target ? { link, target } : null;
}
