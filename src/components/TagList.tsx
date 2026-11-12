import './TagList.css';

interface TagListProps {
  items: readonly string[];
  /** Nombre accesible de la lista, por ejemplo «Tecnologías». */
  label: string;
}

// Lista de etiquetas compartida por proyectos y experiencia.
export function TagList({ items, label }: TagListProps) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
