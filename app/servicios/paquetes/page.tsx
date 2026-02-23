import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import { categoriasPaquetes, procedimientosQuirurgicos } from '@/lib/data/paquetes';
import { getWhatsAppUrl, PHONE_LANDLINE_DISPLAY, PHONE_LANDLINE } from '@/lib/data/navigation';
import ProcedimientosContent from '@/components/servicios/ProcedimientosContent';
import '../servicios.css';

export const metadata = {
  title: 'Procedimientos Quirúrgicos',
  description: 'Procedimientos quirúrgicos en Hospital Santa Fe, Zapotlanejo: maternidad, ginecología, cirugía general, urología, cirugía plástica y otorrinolaringología. Contáctanos para cotización.',
};

const quirofanoImages = [
  { src: '/images/hospital/instalaciones/quirofanos-1.webp', alt: 'Quirófano Hospital Santa Fe 1' },
  { src: '/images/hospital/instalaciones/quirofanos-2.webp', alt: 'Quirófano Hospital Santa Fe 2' },
  { src: '/images/hospital/instalaciones/quirofanos-3.webp', alt: 'Quirófano Hospital Santa Fe 3' },
  { src: '/images/hospital/instalaciones/quirofanos-4.webp', alt: 'Quirófano Hospital Santa Fe 4' },
];

const maternidad = categoriasPaquetes.find(c => c.id === 'maternidad');

export default function ProcedimientosPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--paquetes">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Procedimientos Quirúrgicos</span>
          </nav>
          <h1>Procedimientos Quirúrgicos</h1>
          <p className="page-hero__subtitle">
            Realizamos una amplia variedad de cirugías con los más altos estándares de calidad.
            Contáctanos para recibir una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="paquetes-quick-nav">
        <div className="container">
          <div className="paquetes-quick-nav__inner">
            <a href="#maternidad" className="paquetes-quick-nav__pill">Maternidad</a>
            {procedimientosQuirurgicos.map((cat) => (
              <a key={cat.nombre} href={`#${cat.nombre.toLowerCase().replace(/\s+/g, '-')}`} className="paquetes-quick-nav__pill">
                {cat.nombre}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container">

          {/* ===== MATERNIDAD SECTION ===== */}
          {maternidad && (
            <div id="maternidad" className="paquete-categoria">
              <ScrollReveal>
                <h2 className="paquete-categoria__title" data-animate>{maternidad.nombre}</h2>
                <p className="paquete-categoria__desc" data-animate>{maternidad.descripcion}</p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="paquete-maternidad-link" data-animate>
                  <p>Conoce todos los detalles de nuestros paquetes de maternidad, beneficios, tipos de habitaciones y preguntas frecuentes.</p>
                  <Link href="/maternidad" className="btn btn--rosa">
                    Ver paquetes de maternidad completos →
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal stagger className="paquetes-grid">
                {maternidad.paquetes.map((paquete) => (
                  <div key={paquete.id} className={`paquete-card paquete-card--rosa ${paquete.destacado ? 'paquete-card--destacado' : ''}`} data-animate>
                    {paquete.destacado && (
                      <span className="paquete-card__badge">Más solicitado</span>
                    )}
                    <h3 className="paquete-card__nombre">{paquete.nombre}</h3>
                    <div className="paquete-card__precio">{paquete.precio}</div>

                    {paquete.descripcion && (
                      <p className="paquete-card__descripcion">{paquete.descripcion}</p>
                    )}

                    <h4 className="paquete-card__incluye-title">Incluye:</h4>
                    <ul className="paquete-card__lista">
                      {paquete.incluye.map((item, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {paquete.nota && (
                      <p className="paquete-card__nota">{paquete.nota}</p>
                    )}

                    <a
                      href={getWhatsAppUrl(`Hola, me interesa información sobre el ${paquete.nombre}`)}
                      className="btn btn--whatsapp btn--medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: '100%' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Consultar por WhatsApp
                    </a>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          )}

          {/* ===== CIRUGÍAS POR ESPECIALIDAD ===== */}
          <ProcedimientosContent />

          {/* ===== VIDEO + QUIRÓFANO GALLERY ===== */}
          <ScrollReveal>
            <div data-animate style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
              <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-primary-900)', fontSize: 'var(--text-2xl)', fontWeight: 700 }}>Conoce Nuestros Quirófanos</h3>
              <div style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
                <VideoPlayer src="/videos/quirofanos.mp4" style={{ width: '100%', aspectRatio: '9/16', maxHeight: '500px' }} />
              </div>

              <div className="quirofano-gallery">
                {quirofanoImages.map((img, idx) => (
                  <div key={idx} className="quirofano-gallery__item">
                    <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Payment Banner */}
      <section className="section payment-banner">
        <div className="container">
          <ScrollReveal>
            <div className="payment-banner__content" data-animate>
              <h2>Formas de Pago</h2>
              <p>Aceptamos diversas formas de pago para tu comodidad</p>

              <div className="payment-banner__methods">
                <div className="payment-method">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  <div>
                    <strong>Tarjetas de Crédito y Débito</strong>
                    <p>Visa y MasterCard (no American Express)</p>
                  </div>
                </div>

                <div className="payment-method">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <div>
                    <strong>Meses Sin Intereses</strong>
                    <p>3, 6, 9 y 12 MSI con tarjetas Bancomer. 6 y 12 MSI con HSBC y Scotiabank (cirugía plástica).</p>
                  </div>
                </div>

                <div className="payment-method">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong>Plan de Pagos (Maternidad)</strong>
                    <p>Aparta tu paquete con $1,000 y realiza abonos mensuales durante tu control prenatal.</p>
                  </div>
                </div>

                <div className="payment-method">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                  <div>
                    <strong>Efectivo y Transferencia</strong>
                    <p>También aceptamos pagos en efectivo y transferencias bancarias.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final - No encuentras tu cirugia */}
      <section className="section cta-final">
        <div className="container">
          <ScrollReveal>
            <div className="cta-final__content" data-animate>
              <h2>¿No encuentras tu cirugía?</h2>
              <p>Realizamos muchos más procedimientos. Contáctanos para resolver tus dudas, solicitar una cotización o agendar tu procedimiento. Con gusto te atenderemos a la brevedad.</p>
              <div className="cta-final__buttons">
                <a href={getWhatsAppUrl('Hola, me gustaría información sobre un procedimiento quirúrgico')} className="btn btn--whatsapp btn--large" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Escríbenos por WhatsApp
                </a>
                <a href={`tel:${PHONE_LANDLINE}`} className="btn btn--secondary btn--large">
                  Llámanos: ({PHONE_LANDLINE_DISPLAY})
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
