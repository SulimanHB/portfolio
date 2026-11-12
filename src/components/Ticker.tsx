import './Ticker.css';

interface TickerProps {
  words: readonly string[];
}

// Cinta de texto en bucle. El contenido se repite dos veces para que, al
// desplazarse la mitad, el corte no se note.
export function Ticker({ words }: TickerProps) {
  const text = `${words.join(' · ')} · `;
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">{text}{text}</div>
    </div>
  );
}
