// Cochecito pixelado dibujado con rectángulos sobre una cuadrícula de 16×10.
// `crispEdges` evita el suavizado para que los píxeles se vean nítidos.
// Es decorativo: aria-hidden lo oculta a los lectores de pantalla.
export function PixelCar() {
  return (
    <svg className="pixel-car" viewBox="0 0 16 10" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {/* Carrocería */}
      <rect className="pixel-car__body" x="4" y="0" width="7" height="1" />
      <rect className="pixel-car__body" x="3" y="1" width="9" height="3" />
      <rect className="pixel-car__body" x="0" y="4" width="16" height="3" />
      {/* Ventanillas */}
      <rect className="pixel-car__window" x="4" y="1" width="3" height="2" />
      <rect className="pixel-car__window" x="8" y="1" width="3" height="2" />
      {/* Faro delantero y piloto trasero */}
      <rect className="pixel-car__light" x="15" y="5" width="1" height="1" />
      <rect className="pixel-car__tail" x="0" y="5" width="1" height="1" />
      {/* Ruedas */}
      <rect className="pixel-car__wheel" x="2" y="6" width="3" height="3" />
      <rect className="pixel-car__wheel" x="11" y="6" width="3" height="3" />
      <rect className="pixel-car__hub" x="3" y="7" width="1" height="1" />
      <rect className="pixel-car__hub" x="12" y="7" width="1" height="1" />
    </svg>
  );
}
