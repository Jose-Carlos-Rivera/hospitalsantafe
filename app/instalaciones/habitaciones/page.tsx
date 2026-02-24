import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import ImageCarousel from '@/components/common/ImageCarousel';
import { getWhatsAppUrl } from '@/lib/data/navigation';
import habitacionesJson from '@/lib/data/habitaciones.json';
import '../instalaciones.css';

export const metadata: Metadata = {
  title: 'Habitaciones',
  description: 'Habitaciones privadas en Hospital Santa Fe: Normal, Suite y Mastersuite. Cama eléctrica, baño privado, TV, A/C, teléfono. Comodidad para tu recuperación en Zapotlanejo.',
};

export default function Habitaciones() {
  return (
    <>
      <section className="page-hero page-hero--habitaciones">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/instalaciones">Instalaciones</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Habitaciones</span>
          </nav>
          <h1>Habitaciones</h1>
          <p className="page-hero__subtitle">
            Espacios privados, cómodos y seguros diseñados para tu recuperación
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Elige la habitación ideal para ti</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                Todas nuestras habitaciones son privadas y cuentan con los servicios necesarios para una estancia cómoda.
                Elige el tipo que mejor se adapte a tus necesidades.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger className="habitaciones-container">
            {habitacionesJson.map((hab, index) => (
              <div key={index} className={`habitacion-card ${hab.featured ? 'featured' : ''}`} data-animate>
                {hab.featured && <div className="habitacion-badge">La más exclusiva</div>}

                {/* Media row: carrusel de fotos + video */}
                <div className="habitacion-media-row">
                  <div className="habitacion-media-img">
                    <ImageCarousel images={hab.imagenes} />
                  </div>
                  {hab.video && (
                    <VideoPlayer src={hab.video} className="habitacion-media-video" />
                  )}
                </div>

                <div className="habitacion-info">
                  <h2>{hab.nombre}</h2>
                  <p className="habitacion-descripcion">{hab.descripcion}</p>

                  <h3>Amenidades:</h3>
                  <ul>
                    {hab.amenidades.map((amenidad, idx) => (
                      <li key={idx}>{amenidad}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal>
            <div className="info-box" data-animate>
              <h3>Información Importante</h3>
              <p>
                Todas nuestras habitaciones cuentan con llamado de enfermería las 24 horas y
                personal médico disponible en todo momento.
              </p>
              <p>
                <strong>Check-in:</strong> Previa asignación médica<br />
                <strong>Check-out:</strong> Hasta las 12:00 PM (mediodía)
              </p>
              <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)' }}>
                Consulta disponibilidad y precios contactándonos directamente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <ScrollReveal>
            <h2 data-animate>¿Necesitas hospitalización?</h2>
            <p data-animate style={{ maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
              Contáctanos para conocer la disponibilidad de habitaciones y precios.
            </p>
            <div data-animate style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppUrl('Hola, me gustaría información sobre las habitaciones disponibles')}
                className="btn btn--primary btn--large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
              <Link href="/contacto" className="btn btn--secondary btn--large">
                Contactar ahora
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
