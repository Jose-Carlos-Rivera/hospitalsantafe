import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import cafeteriaJson from '@/lib/data/cafeteria.json';
import horariosJson from '@/lib/data/horarios.json';
import '../instalaciones.css';

export const metadata: Metadata = {
  title: 'Cafetería "Del Buen Comer"',
  description: 'Cafetería "Del Buen Comer" en Hospital Santa Fe, Zapotlanejo. Desayunos, comidas y bebidas para pacientes, familiares y público en general. Abierta de 7AM a 8PM.',
};

export default function Cafeteria() {
  return (
    <>
      <section className="page-hero page-hero--cafeteria">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/instalaciones">Instalaciones</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Cafetería</span>
          </nav>
          <h1>Cafetería &ldquo;Del Buen Comer&rdquo;</h1>
          <p className="page-hero__subtitle">
            Alimentación saludable y accesible dentro del hospital, abierta para todos
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="cafeteria-content" data-animate>
              <div>
                <div className="cafeteria-image">
                  <img
                    src="/images/hospital/instalaciones/cafeteria.webp"
                    alt="Cafetería Del Buen Comer - Hospital Santa Fe"
                  />
                </div>
                <VideoPlayer
                  src="/videos/cafeteria.mp4"
                  style={{ width: '100%', maxWidth: '300px', maxHeight: '450px', margin: 'var(--space-6) auto 0', aspectRatio: '9/16' }}
                />
              </div>

              <div className="content-text">
                <h2>Cafetería &ldquo;Del Buen Comer&rdquo;</h2>
                <p>
                  Nuestra cafetería se encuentra ubicada dentro de las instalaciones del Hospital Santa Fe,
                  ofreciendo una variedad de alimentos frescos y nutritivos a precios accesibles.
                  Está abierta tanto para pacientes y sus familiares como para el público en general.
                </p>

                <div className="horarios-box">
                  <h3>Horario de Servicio</h3>
                  <div className="horario-item">
                    <strong>Lunes a Viernes:</strong>
                    <span>{horariosJson.cafeteria.horario_semana.split(': ')[1]}</span>
                  </div>
                  <div className="horario-item">
                    <strong>Sábado y Domingo:</strong>
                    <span>{horariosJson.cafeteria.horario_finde.split(': ')[1]}</span>
                  </div>
                </div>

                <h3>Menú</h3>
                <div className="menu-section">
                  {cafeteriaJson.secciones.map((seccion) => (
                    <div key={seccion.id}>
                      <h4>{seccion.titulo}</h4>
                      <ul>
                        {seccion.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="info-box">
                  <strong>Servicio a habitaciones:</strong> {cafeteriaJson.servicio_habitaciones}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-neutral-50)' }}>
        <div className="container">
          <ScrollReveal stagger className="info-grid">
            {cafeteriaJson.info_cards.map((card, idx) => (
              <div key={idx} className="info-item" data-animate>
                <h4>{card.titulo}</h4>
                <p>{card.texto}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <ScrollReveal>
            <h2 data-animate>¿Tienes alguna pregunta?</h2>
            <div data-animate>
              <Link href="/contacto" className="btn btn--primary btn--large">
                Contactar ahora
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
