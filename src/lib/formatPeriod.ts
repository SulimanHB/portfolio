// Convierte meses ISO («2026-03») en un periodo legible: «mar 2026 – may 2026».
const monthFormatter = new Intl.DateTimeFormat('es-ES', { month: 'short', year: 'numeric', timeZone: 'UTC' });

function formatMonth(isoMonth: string): string {
  const [year, month] = isoMonth.split('-').map(Number);
  // Algunas versiones de Intl añaden punto («mar.»); se quita para un formato uniforme.
  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 1))).replace('.', '');
}

export function formatPeriod(start: string, end?: string): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'actualidad'}`;
}
