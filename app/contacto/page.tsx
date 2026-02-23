import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import {
  PHONE_LANDLINE,
  PHONE_LANDLINE_DISPLAY,
  PHONE_MOBILE,
  PHONE_MOBILE_DISPLAY,
  PHONE_WHATSAPP,
  PHONE_WHATSAPP_DISPLAY,
  getWhatsAppUrl,
  HOSPITAL_ADDRESS,
  GOOGLE_MAPS_LINK,
  GOOGLE_MAPS_EMBED_URL,
} from '@/lib/data/navigation';
import './contacto.css';

export const metadata = {
  title: 'Contacto',
  description: `Contáctanos en Hospital Santa Fe, Zapotlanejo. Teléfono ${PHONE_LANDLINE_DISPLAY}, ${PHONE_MOBILE_DISPLAY}. WhatsApp ${PHONE_WHATSAPP_DISPLAY}. ${HOSPITAL_ADDRESS.full}. Urgencias 24/7.`,
};

export default function Contacto() {
  return (
    <>
      {/* Banner compacto */}
      <section className="contacto-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Contacto</span>
          </nav>
          <h1>CONTACTO</h1>
          <p className="contacto-banner__subtitle">Estamos aquí para atenderte</p>
          <p className="contacto-banner__lead">Contáctanos por cualquiera de estos medios</p>
        </div>
      </section>

      {/* Tarjetas de información */}
      <section className="section contacto-section">
        <div className="container">
          <ScrollReveal stagger className="contacto-cards">

            {/* Ubicación */}
            <div className="contacto-card" data-animate>
              <div className="contacto-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="contacto-card__title">Ubicación</h3>
              <p className="contacto-card__text">
                Calle Galeana No.22<br />
                Santa Fe, Zapotlanejo<br />
                Jalisco, México
              </p>
              <a
                href="https://www.google.com/maps?q=20.525694,-103.084389"
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-card__link"
              >
                Ver en Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Teléfonos */}
            <div className="contacto-card" data-animate>
              <div className="contacto-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="contacto-card__title">Teléfonos</h3>
              <div className="contacto-card__phones">
                <div className="phone-item">
                  <span className="phone-label">Conmutador</span>
                  <a href={`tel:${PHONE_LANDLINE}`} className="phone-number">{PHONE_LANDLINE_DISPLAY}</a>
                </div>
                <div className="phone-item">
                  <span className="phone-label">Celular</span>
                  <a href={`tel:${PHONE_MOBILE}`} className="phone-number">{PHONE_MOBILE_DISPLAY}</a>
                </div>
                <div className="phone-item">
                  <span className="phone-label">WhatsApp</span>
                  <a href={`tel:${PHONE_WHATSAPP}`} className="phone-number">{PHONE_WHATSAPP_DISPLAY}</a>
                </div>
                <div className="phone-item phone-item--urgencias">
                  <span className="phone-label">Urgencias 24/7</span>
                  <a href={`tel:${PHONE_WHATSAPP}`} className="phone-number">{PHONE_WHATSAPP_DISPLAY}</a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="contacto-card" data-animate>
              <div className="contacto-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="contacto-card__title">Horarios</h3>
              <div className="contacto-card__schedule">
                <div className="schedule-item">
                  <span className="schedule-label">Urgencias</span>
                  <span className="schedule-value schedule-value--highlight">24 horas, 365 días</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-label">Consultas</span>
                  <span className="schedule-value">Lun - Vie: 8:00 AM - 8:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-label">Sábados</span>
                  <span className="schedule-value">9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contacto-card contacto-card--whatsapp" data-animate>
              <div className="contacto-card__icon contacto-card__icon--whatsapp">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="contacto-card__title">WhatsApp</h3>
              <p className="contacto-card__text">
                Escríbenos directamente para agendar citas, pedir informes o resolver cualquier duda.
              </p>
              <a
                href={getWhatsAppUrl('Hola, me gustaría obtener información')}
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Abrir WhatsApp
              </a>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* Mapa */}
      <section className="contacto-mapa" id="mapa">
        <div className="container">
          <ScrollReveal>
          <h2 className="contacto-mapa__title" data-animate>Encuéntranos</h2>
          <div className="contacto-mapa__wrapper" data-animate="scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.0844!3d20.5257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMxJzMyLjUiTiAxMDPCsDA1JzAzLjgiVw!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Hospital Santa Fe - Zapotlanejo, Jalisco"
            />
          </div>
          <p className="contacto-mapa__address" data-animate>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Calle Galeana No.22, Santa Fe, Zapotlanejo, Jalisco
          </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
