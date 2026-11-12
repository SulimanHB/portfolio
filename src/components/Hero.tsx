import { profile } from '../data/profile';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import './Hero.css';

export function Hero() {
  return (
    <section id="inicio" className="hero section-pad scroll-scene" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <Reveal className="hero__inner">
        <p className="hero__status"><span className="hero__status-dot" aria-hidden="true" />{profile.availability}</p>
        <p className="hero__eyebrow label">{profile.role}</p>
        <h1 id="hero-title" className="hero__title">
          Ideas que<br /><em>toman forma.</em>
        </h1>
        <div className="hero__bottom">
          <p>{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">
              <Icon name="briefcase" /> Ver proyectos
            </a>
            <a className="button button--ghost" href="#contacto">
              <Icon name="mail" /> Contactar
            </a>
            <a className="button button--ghost" href={profile.cv} download>
              <Icon name="download" /> Descargar CV
            </a>
          </div>
        </div>
      </Reveal>
      <p className="hero__index" aria-hidden="true">PORTFOLIO / {new Date().getFullYear()}</p>
    </section>
  );
}
