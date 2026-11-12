/**
 * Devuelve cuánto se ha recorrido la página, de 0 (arriba) a 1 (abajo).
 * Es una función pura: no lee `window`, así que se puede probar sin navegador.
 */
export function calculateScrollProgress(scrollTop: number, scrollHeight: number, viewportHeight: number): number {
  const scrollable = scrollHeight - viewportHeight;
  if (scrollable <= 0) return 0;
  return Math.min(1, Math.max(0, scrollTop / scrollable));
}
