import { Icon } from '../../components/Icon';
import { PixelCar } from '../../components/PixelCar';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import '../../styles/project-page.css';
import './NotFoundPage.css';

// Página que Vercel muestra cuando la dirección no existe (dist/404.html).
export function NotFoundPage() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader homePath="/" />

      <main id="contenido" className="project-hero not-found" aria-labelledby="not-found-title">
        <div className="container">
          <div className="not-found__car" aria-hidden="true"><PixelCar /></div>
          <p className="project-hero__kicker">Error 404</p>
          <h1 id="not-found-title" className="project-hero__title">Fuera de la carretera.</h1>
          <p className="project-hero__lead">
            Esta página no existe o ha cambiado de sitio. Vuelve al inicio para seguir explorando.
          </p>
          <div className="project-hero__actions">
            <a className="button button--primary" href="/"><Icon name="arrow-left" /> Volver al inicio</a>
            <a className="button button--ghost" href="/#proyectos"><Icon name="briefcase" /> Ver proyectos</a>
          </div>
        </div>
      </main>

      <SiteFooter topHref="#contenido" />
    </>
  );
}
