import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/common/ScrollReveal';
import { getWhatsAppUrl } from '@/lib/data/navigation';
import '../instalaciones.css';

export const metadata: Metadata = {
  title: 'Habitaciones',
  description: 'Habitaciones privadas en Hospital Santa Fe: Normal, Suite y Mastersuite. Cama eléctrica, baño privado, TV, A/C, teléfono. Comodidad para tu recuperación en Zapotlanejo.',
};

const habitaciones = [
  {
    nombre: 'Habitación Normal',
    descripcion: 'Habitación privada cómoda y funcional con todo lo necesario para una estancia tranquila y una pronta recuperación.',
    amenidades: [
      'Habitación privada',
      'Cama hospitalaria con control eléctrico',
      'Sillón reclinable para acompañante',
      'Sofá para familiares',
      'Baño completo privado',
      'Televisión con cable',
      'Aire acondicionado central',
      'Teléfono',
      'Llamado de enfermería 24 horas',
    ],
    featured: false,
    imagen: '/images/hospital/instalaciones/cuartos.webp',
    video: '/videos/habitacion-normal.mp4',
  },
  {
    nombre: 'Suite',
    descripcion: 'Habitación privada amplia con amenidades adicionales para una estancia más confortable, ideal para quienes buscan mayor comodidad.',
    amenidades: [
      'Habitación privada amplia',
      'Cama hospitalaria con control eléctrico',
      'Sillón reclinable',
      '2 sofás amplios para acompañantes',
      'Baño completo privado',
      '2 televisores LCD (paciente + acompañantes)',
      'Aire acondicionado Minisplit frío/calor',
      'Teléfono',
      'Ventana con vista exterior',
      'Decoración con colores y adornos',
      'Llamado de enfermería 24 horas',
    ],
    featured: false,
    imagen: '/images/hospital/instalaciones/cuartos_1.webp',
    video: '/videos/habitacion-suite.mp4',
  },
  {
    nombre: 'Mastersuite',
    descripcion: 'Nuestra habitación más amplia y exclusiva, diseñada para brindar la máxima comodidad y una experiencia premium durante tu estancia.',
    amenidades: [
      'Habitación privada muy amplia',
      'Cama hospitalaria con control eléctrico',
      'Sillón reclinable de lujo',
      '3 sofás amplios para acompañantes',
      'Baño completo privado',
      '2 televisores LCD de pantalla grande',
      'Aire acondicionado Minisplit frío/calor',
      'Teléfono',
      'Ventana con vista exterior',
      'Decoración especial con colores y adornos',
      'Llamado de enfermería 24 horas',
    ],
    featured: true,
    imagen: '/images/hospital/instalaciones/cuartos_2.webp',
    video: '/videos/habitacion-master-suite.mp4',
  },
];

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
            {habitaciones.map((hab, index) => (
              <div key={index} className={`habitacion-card ${hab.featured ? 'featured' : ''}`} data-animate>
                {hab.featured && <div className="habitacion-badge">La más exclusiva</div>}
                <div className="habitacion-image">
                  <img src={hab.imagen} alt={hab.nombre} />
                </div>
                {hab.video && (
                  <div className="habitacion-video">
                    <video controls preload="metadata" playsInline style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}>
                      <source src={hab.video} type="video/mp4" />
                    </video>
                  </div>
                )}
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
