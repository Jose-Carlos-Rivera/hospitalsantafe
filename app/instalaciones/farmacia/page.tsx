import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/common/ScrollReveal';
import '../instalaciones.css';

export const metadata: Metadata = {
  title: 'Farmacia',
  description: 'Farmacia interna de Hospital Santa Fe en Zapotlanejo. Medicamentos de patente y genéricos, material de curación, surtido de recetas. Disponible para pacientes y público general.',
};

const serviciosFarmacia = [
  {
    titulo: 'Medicamentos de patente y genéricos',
    descripcion: 'Amplio inventario de medicamentos tanto de marca como genéricos intercambiables de la más alta calidad.',
  },
  {
    titulo: 'Material de curación',
    descripcion: 'Gasas, vendajes, algodón, cintas adhesivas y todo el material necesario para curaciones y cuidados postquirúrgicos.',
  },
  {
    titulo: 'Productos para la salud',
    descripcion: 'Artículos de higiene personal, suplementos vitamínicos y productos para el bienestar general.',
  },
  {
    titulo: 'Surtido de recetas médicas',
    descripcion: 'Surtimos recetas de los médicos del hospital y de consultorios externos. Medicamentos controlados con receta retenida.',
  },
  {
    titulo: 'Toma de presión arterial',
    descripcion: 'Servicio gratuito de medición de presión arterial disponible durante el horario de atención de la farmacia.',
  },
];

export default function Farmacia() {
  return (
    <>
      <section className="page-hero page-hero--farmacia">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/instalaciones">Instalaciones</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Farmacia</span>
          </nav>
          <h1>Farmacia</h1>
          <p className="page-hero__subtitle">
            Medicamentos y productos de salud dentro del hospital, siempre disponibles
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="farmacia-content" data-animate>
              <div className="content-text">
                <h2>Farmacia Interna</h2>
                <p>
                  Nuestra farmacia se encuentra ubicada dentro de las instalaciones del Hospital Santa Fe,
                  brindando comodidad y acceso inmediato a medicamentos para pacientes hospitalizados,
                  sus familiares y público en general. Contamos con farmacéuticos capacitados que te
                  orientarán en el correcto uso de tus medicamentos.
                </p>

                <div className="horarios-box">
                  <h3>Horario de Atención</h3>
                  <div className="horario-item">
                    <strong>Lunes a Viernes:</strong>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="horario-item">
                    <strong>Sábados:</strong>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="horario-item">
                    <strong>Domingos y festivos:</strong>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                </div>

                <h3>Servicios Disponibles</h3>
                <div className="servicios-farmacia">
                  {serviciosFarmacia.map((servicio, index) => (
                    <div key={index} className="servicio-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong>{servicio.titulo}</strong>
                        <p style={{ margin: '4px 0 0', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)' }}>
                          {servicio.descripcion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="info-box">
                  <strong>Urgencias fuera de horario:</strong> Para necesidades de medicamentos fuera del horario
                  de la farmacia, el personal de enfermería puede proporcionar medicamentos básicos de urgencia
                  a los pacientes hospitalizados.
                </div>
              </div>

              <div className="farmacia-image">
                <img
                  src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=700&fit=crop"
                  alt="Farmacia interna del Hospital Santa Fe"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <ScrollReveal>
            <h2 data-animate>¿Necesitas más información?</h2>
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
