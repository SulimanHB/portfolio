import { contactLinks, email, profile } from '../data/profile';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { StageSection } from './StageSection';
import './ContactSection.css';

export function ContactSection() {
  return (
    <StageSection id="contacto" className="contact" labelledBy="contact-title">
      <Reveal>
        <p className="label">04 / Contacto</p>
        <h2 id="contact-title">Hablemos de<br /><em>lo próximo.</em></h2>
        <p className="contact__intro">
          Si tienes una idea, un proyecto o una oportunidad, me encantará conocerla.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <a className="contact__email" href={email.href}>
          <Icon name={email.icon} /> {email.text} <span aria-hidden="true">↗</span>
        </a>
        <p className="contact__cv">
          <a className="button button--dark" href={profile.cv} download>
            <Icon name="download" /> Descargar CV
          </a>
        </p>
        <ul className="contact__links">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <span className="contact__channel"><Icon name={link.icon} /> {link.label}</span>
              <a href={link.href} {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}>
                {link.text} <span aria-hidden="true">↗</span>
                {link.external && <span className="visually-hidden"> (se abre en una pestaña nueva)</span>}
              </a>
            </li>
          ))}
          <li>
            <span className="contact__channel"><Icon name="gran-canaria" /> Ubicación</span>
            {profile.location}
          </li>
        </ul>
      </Reveal>
    </StageSection>
  );
}
