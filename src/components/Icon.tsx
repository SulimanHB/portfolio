import type { ReactNode } from 'react';
import './Icon.css';

// Iconos dibujados a mano en SVG (24×24, trazo de 2 px) para no añadir una
// librería por una decena de dibujos. Heredan el color del texto (currentColor)
// y miden 1em, así que se adaptan solos al botón en el que van.
// El de GitHub es el logotipo oficial «mark-github» de Octicons (licencia MIT).

const strokeIcons = {
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  terminal: (
    <>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11m-5-5 5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  'arrow-right': <path d="M5 12h14m-6-6 6 6-6 6" />,
  'arrow-left': <path d="M19 12H5m6-6-6 6 6 6" />,
  'arrow-up': <path d="M12 19V5m-6 6 6-6 6 6" />,
  'arrow-down': <path d="M12 5v14m-6-6 6 6 6-6" />,
} satisfies Record<string, ReactNode>;

const filledIcons = {
  github: {
    viewBox: '0 0 16 16',
    path: 'M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z',
  },
  // Silueta simplificada de Gran Canaria, siguiendo su costa: La Isleta al
  // noreste (unida por el istmo de Las Palmas), la punta de Gando al este,
  // Maspalomas al sur y la costa oeste casi recta hasta Agaete.
  'gran-canaria': {
    viewBox: '3 2 18 20',
    path:
      'M17 3 18.6 4.2 17.4 6 17.8 8.5 19.4 11.5 18.6 14.4 16.2 17.6 13 20.6 9.6 19.4 7 17 ' +
      '5 13.8 4.6 10.4 5.8 7.6 8.2 6.2 11.6 6 14.4 6.4 15.8 5.6 15.6 3.8Z',
  },
  linkedin: {
    viewBox: '0 0 24 24',
    path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4v15h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V23h-4V8Z',
  },
};

export type IconName = keyof typeof strokeIcons | keyof typeof filledIcons;

interface IconProps {
  name: IconName;
}

/** Icono decorativo: el texto del botón ya dice lo que hace (aria-hidden). */
export function Icon({ name }: IconProps) {
  if (name in filledIcons) {
    const icon = filledIcons[name as keyof typeof filledIcons];
    return (
      <svg className="icon" viewBox={icon.viewBox} fill="currentColor" aria-hidden="true" focusable="false">
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {strokeIcons[name as keyof typeof strokeIcons]}
    </svg>
  );
}
