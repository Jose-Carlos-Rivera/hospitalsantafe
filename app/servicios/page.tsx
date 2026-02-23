import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import './servicios.css';

export const metadata = {
  title: 'Servicios Médicos',
  description: 'Conoce todos nuestros servicios médicos: 23 especialidades, paquetes quirúrgicos, estudios de imagen y cuneros. Atención de calidad en Zapotlanejo, Jalisco.',
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--servicios">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Servicios Médicos</span>
          </nav>
          <h1>Servicios Médicos</h1>
          <p className="page-hero__subtitle">
            Atención médica integral con más de 23 especialidades, tecnología de vanguardia y un equipo humano comprometido con tu bienestar.
          </p>
        </div>
      </section>

      {/* Categorías de Servicios */}
      <section className="section">
        <div className="container">
          <ScrollReveal stagger className="servicios-hub-grid">

            {/* Especialidades */}
            <Link href="/servicios/especialidades" className="servicio-hub-card" data-animate>
              <div className="servicio-hub-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="servicio-hub-card__title">Especialidades Médicas</h2>
              <p className="servicio-hub-card__desc">
                Contamos con más de 23 especialidades médicas para atender todas tus necesidades de salud. Desde medicina general hasta cardiología, ginecología, pediatría y más.
              </p>
              <span className="servicio-hub-card__count">23 especialidades</span>
              <span className="servicio-hub-card__link">
                Ver especialidades
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Procedimientos Quirúrgicos */}
            <Link href="/servicios/paquetes" className="servicio-hub-card" data-animate>
              <div className="servicio-hub-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" />
                </svg>
              </div>
              <h2 className="servicio-hub-card__title">Procedimientos Quirúrgicos</h2>
              <p className="servicio-hub-card__desc">
                Realizamos una amplia variedad de cirugías: ginecología, cirugía general, urología, cirugía plástica y otorrinolaringología. Contáctanos para cotización.
              </p>
              <span className="servicio-hub-card__count">5 especialidades quirúrgicas</span>
              <span className="servicio-hub-card__link">
                Ver procedimientos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Estudios de Imagen */}
            <Link href="/servicios/estudios-imagen" className="servicio-hub-card" data-animate>
              <div className="servicio-hub-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h2 className="servicio-hub-card__title">Estudios de Imagen</h2>
              <p className="servicio-hub-card__desc">
                Rayos X, ultrasonido, mastografía y electrocardiograma con equipo moderno y resultados oportunos interpretados por radiólogos certificados.
              </p>
              <span className="servicio-hub-card__count">4 tipos de estudios</span>
              <span className="servicio-hub-card__link">
                Ver estudios
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Cuneros */}
            <Link href="/servicios/cuneros" className="servicio-hub-card" data-animate>
              <div className="servicio-hub-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
                </svg>
              </div>
              <h2 className="servicio-hub-card__title">Cuneros y Neonatología</h2>
              <p className="servicio-hub-card__desc">
                Atención especializada para recién nacidos con monitoreo continuo 24/7, enfermeras especializadas en neonatología, tamiz neonatal y vacunación.
              </p>
              <span className="servicio-hub-card__count">Cunero general y de cuidados especiales</span>
              <span className="servicio-hub-card__link">
                Ver cuneros
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-final">
        <div className="container">
          <ScrollReveal>
          <div className="cta-final__content" data-animate>
            <h2>¿Necesitas orientación sobre nuestros servicios?</h2>
            <p>Contáctanos y con gusto te asesoramos sobre el servicio que necesitas.</p>
            <div className="cta-final__buttons">
              <a href="https://wa.me/523331198625?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios%20m%C3%A9dicos" className="btn btn--whatsapp btn--large" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Escríbenos por WhatsApp
              </a>
              <a href="tel:7344205" className="btn btn--secondary btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Llámanos: 73-44205
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
