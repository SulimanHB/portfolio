// Cálculos del efecto «tarjetas apiladas». Funciones puras: reciben medidas
// y devuelven números, sin tocar el DOM, para poder probarlas sin navegador.

/**
 * Distancia desde arriba a la que una sección se queda fija (position: sticky).
 * - Si cabe en pantalla, se fija justo debajo de la cabecera.
 * - Si es más alta, se fija cuando su final llega al fondo de la pantalla
 *   (valor negativo), para que antes se pueda leer entera.
 */
export function stickyTop(sectionHeight: number, viewportHeight: number, headerHeight: number): number {
  return Math.min(headerHeight, viewportHeight - sectionHeight);
}

/**
 * Cuánto ha tapado la siguiente tarjeta a la actual (0–1): 0 cuando la
 * siguiente asoma por abajo y 1 cuando ha llegado a la cabecera.
 */
export function coverProgress(nextTop: number, viewportHeight: number, headerHeight: number): number {
  const distance = viewportHeight - headerHeight;
  if (distance <= 0) return 0;
  return Math.min(1, Math.max(0, (viewportHeight - nextTop) / distance));
}
