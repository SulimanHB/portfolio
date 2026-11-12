import { Icon } from '../../components/Icon';
import { Reveal } from '../../components/Reveal';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { StorySection } from '../../components/StorySection';
import { TagList } from '../../components/TagList';
import type { SectionMarker } from '../../data/navigation';
import { portfolioShots } from '../../data/shots';
import { useInPageLinks } from '../../hooks/useInPageLinks';
import '../../styles/project-page.css';
import './PortfolioPage.css';

const TECH = ['React', 'TypeScript', 'Vite', 'CSS', 'Vitest', 'ESLint'];
const REPO_URL = 'https://github.com/SulimanHB/portfolio';

// Lo que anuncia la cabecera al pasar de un capítulo a otro.
const HEADER_SECTIONS: readonly SectionMarker[] = [
  { id: 'portfolio-inicio', label: 'Mi portfolio' },
  { id: 'idea', label: '01 / Idea' },
  { id: 'metodo', label: '02 / Método' },
  { id: 'carpetas', label: '03 / Carpetas' },
  { id: 'varias-ia', label: '04 / ChatGPT y Claude' },
  { id: 'construccion', label: '05 / Construcción' },
  { id: 'detalles', label: '06 / Detalles' },
  { id: 'calidad', label: '07 / Calidad' },
  { id: 'estado', label: '08 / Estado' },
];

// Estructura real de la carpeta de trabajo (sin datos privados).
const FOLDER_TREE = `Mi Portfolio/
├── AGENTS.md            ← reglas y forma de trabajar del agente
├── contexto/            ← perfil, objetivos y CV: fuente de datos verificados
├── memoria/MEMORIA.md   ← preferencias y decisiones aprendidas, con fecha
├── skills/              ← procedimientos ya probados y aprobados
└── proyectos/
    ├── portfolio/       ← esta web
    │   ├── entrada/     ← encargo y referencias
    │   ├── entregables/ ← capturas de revisión
    │   └── src/         ← código (React + TypeScript)
    └── vocabia/`;

// Todo lo que se cuenta aquí ocurrió al construir esta web (noviembre de 2026).
export function PortfolioPage() {
  // Los enlaces internos llevan a su sitio sin cambiar la URL.
  useInPageLinks();

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader homePath="/" sections={HEADER_SECTIONS} />

      <main id="contenido">
        <section id="portfolio-inicio" className="project-hero" aria-labelledby="portfolio-title">
          <Reveal className="container project-hero__inner">
            <a className="project-hero__back" href="/#proyectos"><Icon name="arrow-left" /> Proyectos</a>
            <p className="project-hero__kicker">Proyecto personal</p>
            <h1 id="portfolio-title" className="project-hero__title">Mi portfolio</h1>
            <p className="project-hero__lead">
              Cómo construí la web que estás viendo: partí de una idea propia, generé versiones con ChatGPT y
              con Claude, y combiné lo mejor de cada una en un único proyecto.
            </p>
            <TagList items={TECH} label="Tecnologías" />
            <div className="project-hero__actions">
              <a className="button button--primary" href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> Código en GitHub<span className="visually-hidden"> (se abre en una pestaña nueva)</span>
              </a>
              <a className="button button--ghost" href="#metodo"><Icon name="route" /> Ver el proceso</a>
              <span className="project-hero__status">Primera versión</span>
            </div>
          </Reveal>
          <Reveal className="container">
            <img
              className="project-hero__shot"
              src={portfolioShots.home.src}
              width={portfolioShots.home.width}
              height={portfolioShots.home.height}
              alt="Portada del portfolio con el titular «Ideas que toman forma.»"
            />
          </Reveal>
        </section>

        <div className="container story">
          <div className="story__content">
            <StorySection id="idea" kicker="01 · Idea" title="Un portfolio que también sea un proyecto">
              <p>
                La idea fue mía: una web para presentar mis aplicaciones con descripciones honestas (solo
                funciones que existen, enlaces que funcionan y capturas reales), con una portada oscura en verde
                lima, tarjetas y una narrativa que avanza con el scroll.
              </p>
            </StorySection>

            <StorySection id="metodo" kicker="02 · Método" title="Trabajar con un agente de IA">
              <p>
                Uso un agente de IA como compañero de programación, con unas reglas escritas para él. Antes de
                cada tarea lee esas reglas, mi perfil y su memoria; propone un paso pequeño; yo lo reviso, lo
                corrijo y decido si sigue adelante.
              </p>
              <ul className="story-list">
                <li>Los datos del perfil se comprueban con mi CV y con el código: el agente no inventa experiencia ni funciones.</li>
                <li>Cada corrección que vale para el futuro se apunta en la memoria, con fecha.</li>
                <li>Cuando un proceso queda probado y aprobado, se guarda como «skill» para repetirlo.</li>
                <li>Nada se publica ni se sube sin que yo lo pida.</li>
              </ul>
            </StorySection>

            <StorySection id="carpetas" kicker="03 · Carpetas" title="Cada cosa en su sitio">
              <p>
                El agente trabaja dentro de una carpeta organizada para que siempre sepa dónde mirar. El contexto
                es común a todos mis proyectos; cada proyecto tiene su encargo y sus entregables.
              </p>
              <pre className="folder-tree" aria-label="Estructura de carpetas del espacio de trabajo"><code>{FOLDER_TREE}</code></pre>
            </StorySection>

            <StorySection
              id="varias-ia"
              kicker="04 · ChatGPT y Claude"
              title="Comparar y combinar"
              figure={{
                shot: portfolioShots.stack,
                alt: 'Sección «Mi enfoque» quedándose fija mientras la tarjeta de Experiencia sube por encima',
                caption: 'Resultado de la combinación: el estilo de una versión con las tarjetas apiladas que se añadieron después.',
              }}
            >
              <p>
                Con esa idea generé dos versiones con IA distintas para comparar qué proponía cada una: con
                ChatGPT, una web estática en HTML, CSS y JavaScript; con Claude (Claude Code), otra en React.
                Después elegí qué tomar de cada una y las combiné en un solo proyecto.
              </p>
              <div className="compare">
                <div className="compare__column">
                  <h3>De la versión de ChatGPT</h3>
                  <ul className="story-list">
                    <li>Tipografías Space Grotesk y DM Sans</li>
                    <li>Titulares enormes y cinta de palabras</li>
                    <li>Franja verde «Mi enfoque» y contacto claro</li>
                    <li>Cortina con el nombre de la sección al usar el menú</li>
                  </ul>
                </div>
                <div className="compare__column">
                  <h3>De la versión de Claude</h3>
                  <ul className="story-list">
                    <li>El cochecito pixelado que avanza con el scroll</li>
                    <li>Una página propia para cada proyecto</li>
                    <li>Etiquetas monoespaciadas y línea de tiempo</li>
                    <li>Textos comprobados con mi CV</li>
                  </ul>
                </div>
              </div>
            </StorySection>

            <StorySection id="construccion" kicker="05 · Construcción" title="Decisiones técnicas">
              <ul className="story-list">
                <li><strong>Vite multipágina:</strong> cada proyecto es un HTML real con su propia URL, sin router.</li>
                <li><strong>React + TypeScript:</strong> componentes pequeños y tipos para detectar errores antes.</li>
                <li><strong>Datos separados de la vista:</strong> perfil, proyectos y experiencia viven en archivos de datos.</li>
                <li><strong>CSS por componente</strong> con variables de color y tipografía comunes.</li>
                <li><strong>Iconos SVG propios</strong> y animaciones con CSS: sin librerías extra.</li>
              </ul>
            </StorySection>

            <StorySection
              id="detalles"
              kicker="06 · Detalles"
              title="Lo que se nota al usarla"
              figure={{
                shot: portfolioShots.contact,
                alt: 'Sección de contacto con email, LinkedIn, GitHub y ubicación con iconos',
                caption: 'Contacto con iconos propios, incluida la silueta de Gran Canaria.',
              }}
            >
              <ul className="story-list">
                <li>La barra de progreso con el coche, que salta al cambiar de sección.</li>
                <li>La cabecera anuncia la sección en la que estás.</li>
                <li>Las secciones se apilan como tarjetas al bajar.</li>
                <li>Los enlaces llevan a cada sección sin ensuciar la URL.</li>
                <li>Si el sistema pide menos movimiento, las animaciones se desactivan.</li>
              </ul>
            </StorySection>

            <StorySection id="calidad" kicker="07 · Calidad" title="Comprobado, no supuesto">
              <p>
                Las partes con lógica (progreso del scroll, apilado de tarjetas, fechas, datos de proyectos)
                tienen pruebas automáticas con Vitest. El código pasa ESLint y la comprobación de tipos, y cada
                cambio se revisó en Chrome a tamaño de escritorio y de móvil.
              </p>
            </StorySection>

            <StorySection id="estado" kicker="08 · Estado" title="Primera versión">
              <ul className="story-list">
                <li>Publicada en Vercel con el código en GitHub: cada cambio que subo se publica solo.</li>
                <li>Iré añadiendo proyectos con su propia página, como Vocabia.</li>
              </ul>
            </StorySection>
          </div>
        </div>

        <section className="try" aria-labelledby="mas-title">
          <Reveal className="container try__inner">
            <h2 id="mas-title" className="try__title">Sigue explorando</h2>
            <p>Mira cómo apliqué la misma forma de trabajar en Vocabia o vuelve a la lista de proyectos.</p>
            <div className="project-hero__actions">
              <a className="button button--primary" href="/vocabia/">Ver Vocabia <Icon name="arrow-right" /></a>
              <a className="button button--ghost" href="/#proyectos"><Icon name="arrow-left" /> Volver a proyectos</a>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter topHref="#contenido" />
    </>
  );
}
