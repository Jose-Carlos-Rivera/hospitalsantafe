import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import preciosJson from '@/lib/data/precios-editables.json';
import './instalaciones.css';

export const metadata = {
  title: 'Instalaciones',
  description: 'Conoce nuestras instalaciones: habitaciones privadas y compartidas, farmacia, cafetería y galería fotográfica. Hospital moderno en Zapotlanejo, Jalisco.',
};

export default function InstalacionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--instalaciones">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Instalaciones</span>
          </nav>
          <h1>Nuestras Instalaciones</h1>
          <p className="page-hero__subtitle">
            Espacios modernos y confortables diseñados para tu bienestar y tranquilidad durante tu estancia.
          </p>
        </div>
      </section>

      {/* Grid de Instalaciones */}
      <section className="section">
        <div className="container">
          <ScrollReveal stagger className="instalaciones-hub-grid">

            {/* Habitaciones */}
            <Link href="/instalaciones/habitaciones" className="instalacion-hub-card" data-animate>
              <div className="instalacion-hub-card__image">
                <img
                  src="/images/hospital/instalaciones/cuartos_1.webp"
                  alt="Habitaciones del Hospital Santa Fe"
                />
              </div>
              <div className="instalacion-hub-card__content">
                <h2>Habitaciones</h2>
                <p>{`Habitaciones privadas desde $${preciosJson.habitacion_privada}/día y compartidas desde $${preciosJson.habitacion_compartida}/día. Cómodas, limpias y con atención de enfermería 24/7.`}</p>
                <span className="instalacion-hub-card__link">
                  Ver habitaciones
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>

            {/* Farmacia */}
            <Link href="/instalaciones/farmacia" className="instalacion-hub-card" data-animate>
              <div className="instalacion-hub-card__image">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop"
                  alt="Farmacia del Hospital Santa Fe"
                />
              </div>
              <div className="instalacion-hub-card__content">
                <h2>Farmacia</h2>
                <p>Farmacia interna con medicamentos de patente y genéricos, material de curación y toma de presión gratuita.</p>
                <span className="instalacion-hub-card__link">
                  Ver farmacia
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>

            {/* Cafetería */}
            <Link href="/instalaciones/cafeteria" className="instalacion-hub-card" data-animate>
              <div className="instalacion-hub-card__image">
                <img
                  src="/images/hospital/instalaciones/cafeteria.webp"
                  alt="Cafeter&iacute;a del Hospital Santa Fe"
                />
              </div>
              <div className="instalacion-hub-card__content">
                <h2>Cafetería</h2>
                <p>{`Abierta de 7AM a 8PM con desayunos desde $${preciosJson.desayuno_desde}, menú del día desde $${preciosJson.menu_dia_desde} y servicio a habitación disponible.`}</p>
                <span className="instalacion-hub-card__link">
                  Ver cafetería
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>

            {/* Galería */}
            <Link href="/instalaciones/galeria" className="instalacion-hub-card" data-animate>
              <div className="instalacion-hub-card__image">
                <img
                  src="/images/hospital/instalaciones/quirofanos.webp"
                  alt="Instalaciones del Hospital Santa Fe"
                />
              </div>
              <div className="instalacion-hub-card__content">
                <h2>Galería Fotográfica</h2>
                <p>Conoce nuestras instalaciones a través de nuestra galería de fotos: quirófanos, habitaciones, cuneros y áreas comunes.</p>
                <span className="instalacion-hub-card__link">
                  Ver galería
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>

          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section instalaciones-cta">
        <div className="container">
          <ScrollReveal>
          <div className="cta-final__content" data-animate>
            <h2>¿Te gustaría conocer nuestras instalaciones?</h2>
            <p>Agenda una visita o contáctanos para más información sobre nuestros espacios.</p>
            <div className="cta-final__buttons">
              <a href="https://wa.me/523331198625?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20las%20instalaciones%20del%20hospital" className="btn btn--whatsapp btn--large" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Escríbenos por WhatsApp
              </a>
              <a href="tel:3737344205" className="btn btn--primary btn--large">
                Llámanos: (373) 734-4205
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
