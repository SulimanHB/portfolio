import { profile } from '../data/profile';
import { Icon } from './Icon';
import './SiteFooter.css';

interface SiteFooterProps {
  /** Ancla a la que lleva «Volver arriba». */
  topHref?: string;
}

export function SiteFooter({ topHref = '#inicio' }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <a href={topHref}>Volver arriba <Icon name="arrow-up" /></a>
    </footer>
  );
}
