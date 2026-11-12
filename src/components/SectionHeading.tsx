import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <p className="label">{label}</p>
      <h2 id={id}>{title}<span className="accent">.</span></h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}
