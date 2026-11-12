import { Icon } from '../../components/Icon';
import { Reveal } from '../../components/Reveal';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { TagList } from '../../components/TagList';
import type { SectionMarker } from '../../data/navigation';
import { vocabiaShots } from '../../data/shots';
import { useInPageLinks } from '../../hooks/useInPageLinks';
import { StorySection } from '../../components/StorySection';
import { WordTrail } from './WordTrail';
import { words } from './words';
import '../../styles/project-page.css';
import './VocabiaPage.css';

const REPO_URL = 'https://github.com/SulimanHB/Vocabia';
// Fuera del componente para que la referencia sea estable entre renders.
const STORY_SECTION_IDS = ['origen', 'organizar', 'tarjetas', 'estudio', 'datos', 'arquitectura', 'calidad', 'estado'];
// Lo que anuncia la cabecera al pasar de un capítulo a otro.
const HEADER_SECTIONS: readonly SectionMarker[] = [
  { id: 'vocabia-inicio', label: 'Vocabia' },
  { id: 'origen', label: '01 / Origen' },
  { id: 'organizar', label: '02 / Organizar' },
  { id: 'tarjetas', label: '03 / Tarjetas' },
  { id: 'estudio', label: '04 / Estudiar' },
  { id: 'datos', label: '05 / Datos' },
  { id: 'arquitectura', label: '06 / Arquitectura' },
  { id: 'calidad', label: '07 / Calidad' },
  { id: 'estado', label: '08 / Estado' },
  { id: 'probar', label: 'Pruébala' },
];
const TECH = ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Zod', 'PostgreSQL / PGlite', 'Vitest'];

// Todo lo que se afirma aquí está comprobado en el repositorio de Vocabia
// (código, README y docs/historial-desarrollo.md) a 11 de noviembre de 2026.
export function VocabiaPage() {
  // «Cómo probarla» y «Saltar al contenido» llevan a su sitio sin cambiar la URL.
  useInPageLinks();

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader homePath="/" sections={HEADER_SECTIONS} />

      <main id="contenido">
        <section id="vocabia-inicio" className="project-hero" aria-labelledby="vocabia-title">
          <Reveal className="container project-hero__inner">
            <a className="project-hero__back" href="/#proyectos"><Icon name="arrow-left" /> Proyectos</a>
            <p className="project-hero__kicker">Proyecto personal</p>
            <h1 id="vocabia-title" className="project-hero__title">Vocabia</h1>
            <p className="project-hero__lead">
              Un diccionario personal para guardar palabras con su contexto y practicar idiomas.
            </p>
            <ul className="vocabia-words" aria-label="«Palabra» en los idiomas de Vocabia">
              {words.map((item) => (
                <li key={item.lang} lang={item.lang}>{item.word}</li>
              ))}
            </ul>
            <div className="project-hero__actions">
              <a className="button button--primary" href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> Código en GitHub<span className="visually-hidden"> (se abre en una pestaña nueva)</span>
              </a>
              <a className="button button--ghost" href="#probar"><Icon name="terminal" /> Cómo probarla</a>
              <span className="project-hero__status">Beta funcional en local</span>
            </div>
          </Reveal>
          <Reveal className="container">
            <img
              className="project-hero__shot"
              src={vocabiaShots.home.src}
              width={vocabiaShots.home.width}
              height={vocabiaShots.home.height}
              alt="Pantalla de inicio de Vocabia con el lema «Una palabra más. Un mundo más grande.»"
            />
          </Reveal>
        </section>

        <div className="container story story--aside">
          <aside className="story__aside">
            <WordTrail sectionIds={STORY_SECTION_IDS} />
          </aside>

          <div className="story__content">
            <StorySection id="origen" kicker="01 · Origen" title="Palabras que no quería olvidar">
              <p>
                Estudio idiomas y a veces olvidaba palabras que ya había aprendido. Quería un sitio propio
                donde guardarlas con su traducción y su contexto, organizarlas y volver a repasarlas.
              </p>
            </StorySection>

            <StorySection
              id="organizar"
              kicker="02 · Organizar"
              title="Por pareja de idiomas y colecciones"
              figure={{
                shot: vocabiaShots.collections,
                alt: 'Selector de idioma de estudio con seis banderas y colecciones A1, A2 y Viajes',
                caption: 'Elección del idioma de estudio y colecciones de la pareja seleccionada.',
              }}
            >
              <p>
                Cada palabra pertenece a una pareja de idiomas. Los idiomas iniciales son español, inglés,
                francés, alemán, italiano, portugués y japonés.
              </p>
              <p>
                Dentro de cada pareja se pueden crear colecciones propias, como «A1» o «Viajes», y combinarlas
                con la búsqueda y con el filtro por tipo de palabra.
              </p>
            </StorySection>

            <StorySection
              id="tarjetas"
              kicker="03 · Tarjetas"
              title="Cada palabra con su contexto"
              figure={{
                shot: vocabiaShots.cards,
                alt: 'Colección con buscador, filtros por tipo y tarjetas de expresiones y adverbios con ejemplos',
                caption: 'Tarjetas con ejemplos traducidos, filtros por tipo y botón para escuchar.',
              }}
            >
              <p>
                Una tarjeta guarda la palabra o expresión, su traducción, el tipo, notas y entre uno y diez
                ejemplos. En los verbos traducidos al inglés se pueden añadir el pasado simple, el participio
                y la forma en <i lang="en">-ing</i>.
              </p>
              <p>El botón «Escuchar» reproduce la palabra con la voz que ofrece el navegador.</p>
            </StorySection>

            <StorySection
              id="estudio"
              kicker="04 · Estudiar"
              title="Escribir, escuchar y hablar"
              figure={{
                shot: vocabiaShots.study,
                alt: 'Pantalla Estudio con selección de idioma, colecciones y tres tipos de ejercicio',
                caption: 'La pantalla Estudio, con los tres tipos de ejercicio.',
              }}
            >
              <ul className="story-list">
                <li><strong>Practicar:</strong> rondas de preguntas con la respuesta oculta; se puede mostrar o escribirla para comprobarla.</li>
                <li><strong>Escuchar y elegir:</strong> se oye la palabra y se elige su traducción entre varias opciones.</li>
                <li><strong>Hablar y comprobar:</strong> se pronuncia la palabra y se compara con lo que reconoce el navegador.</li>
              </ul>
              <p>
                Cada palabra se puede marcar como conocida o difícil para repasar solo las difíciles. Se guarda
                un historial de las últimas cinco rondas por pareja de idiomas.
              </p>
            </StorySection>

            <StorySection id="datos" kicker="05 · Datos" title="Importar, exportar y fusionar">
              <p>
                Las colecciones se exportan en JSON para conservar una copia. Al importar, una vista previa
                compara el archivo con las tarjetas existentes antes de guardar nada.
              </p>
              <p>
                Vocabia también detecta tarjetas que coinciden entre colecciones y prepara una fusión de
                ejemplos, notas y formas verbales, con vista previa y opción de deshacer.
              </p>
            </StorySection>

            <StorySection id="arquitectura" kicker="06 · Arquitectura" title="Cómo está construido">
              <ol className="architecture" aria-label="Flujo de una petición">
                <li><strong>Navegador</strong><span>React + TypeScript, servido con Vite</span></li>
                <li><strong>API</strong><span>Express, con validación de datos con Zod</span></li>
                <li><strong>Base de datos</strong><span>PGlite en local o PostgreSQL</span></li>
              </ol>
              <ul className="story-list">
                <li>Frontend y backend son paquetes separados dentro de un mismo repositorio (npm workspaces).</li>
                <li>Zod rechaza una tarjeta incorrecta antes de que llegue a la base de datos.</li>
                <li>PGlite permite arrancar sin instalar un servidor; con una URL de conexión usa PostgreSQL.</li>
                <li>
                  En la demo, cada navegador recibe una base temporal propia que se borra tras 30 minutos sin
                  actividad, así nadie ve los cambios de otra persona.
                </li>
              </ul>
              <TagList items={TECH} label="Tecnologías" />
            </StorySection>

            <StorySection id="calidad" kicker="07 · Calidad" title="Probado y revisado">
              <p>
                Tiene pruebas automáticas de la lógica, la interfaz y las rutas de la API con Vitest, Testing
                Library y Supertest: 130 en total a noviembre de 2026. El código pasa ESLint y la comprobación
                de tipos de TypeScript.
              </p>
            </StorySection>

            <StorySection id="estado" kicker="08 · Estado" title="Lo que todavía no hace">
              <ul className="story-list">
                <li>No está publicada en una URL: se ejecuta en local.</li>
                <li>No hay cuentas ni sincronización entre dispositivos.</li>
                <li>La voz depende del navegador; el reconocimiento de pronunciación puede fallar.</li>
                <li>Un tutor con IA y el dictado para crear tarjetas son ideas futuras, no funciones actuales.</li>
              </ul>
            </StorySection>
          </div>
        </div>

        <section id="probar" className="try" aria-labelledby="probar-title">
          <Reveal className="container try__inner">
            <h2 id="probar-title" className="try__title">Pruébala en tu equipo</h2>
            <p>
              Necesitas Node.js 22.12 o posterior. Descarga el repositorio desde GitHub y ejecuta en su carpeta:
            </p>
            <pre className="try__code"><code>{'npm ci\nnpm run build:demo\nnpm run start:demo'}</code></pre>
            <p>
              Después abre <code>http://localhost:3001</code>. La demo trae 40 tarjetas ficticias y las
              colecciones A1, A2 y Viajes; los cambios son temporales.
            </p>
            <div className="project-hero__actions">
              <a className="button button--primary" href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> Ver el repositorio<span className="visually-hidden"> (se abre en una pestaña nueva)</span>
              </a>
              <a className="button button--ghost" href="/#proyectos"><Icon name="arrow-left" /> Volver a proyectos</a>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter topHref="#contenido" />
    </>
  );
}
