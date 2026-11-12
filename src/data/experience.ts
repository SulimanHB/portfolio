// Trayectoria profesional según el CV. Suliman confirmó que realizó él las
// tareas de DISOFT. Las fechas van en formato ISO (AAAA-MM) para <time>.
// La formación aparece en «Sobre mí» (ver profile.ts).

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  start: string;
  end?: string;
  summary: string;
  highlights: readonly string[];
  tech: readonly string[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    id: 'disoft',
    role: 'Desarrollador de software',
    organization: 'DISOFT',
    start: '2026-03',
    end: '2026-05',
    summary: 'Desarrollo full stack de una plataforma de firma digital.',
    highlights: [
      'Autenticación y gestión de usuarios y certificados.',
      'Firma de documentos XML y PDF con certificado digital FNMT, en modo manual y automático, con historial de operaciones y control de versiones.',
      'Cliente de escritorio para Windows que firma XML y PDF desde el menú contextual, con firma local para no custodiar ciertos certificados en el servidor.',
      'Integración con Google Drive y Dropbox, y API para firmar XML desde sistemas externos.',
      'Despliegue en un servidor Hetzner y revisión de requisitos normativos sobre firma electrónica y Hacienda.',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
];
