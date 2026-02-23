import ScrollReveal from '@/components/common/ScrollReveal';
import Link from 'next/link';
import { getWhatsAppUrl, PHONE_LANDLINE, PHONE_LANDLINE_DISPLAY } from '@/lib/data/navigation';
import './page.css';

export default function Home() {
  return (
    <>
      {/* Hero Section con Onda Decorativa */}
      <section className="hero-wave">
        <div className="hero-wave__content container">
          <div className="hero-wave__text">
            <div className="hero-glass-card">
              <span className="hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.87M19 21V10.87" /></svg>
                Desde 2003 en Zapotlanejo
              </span>
              <h1 className="hero-wave__title">
                Vivimos para servir
              </h1>
              <p className="hero-wave__subtitle">
                M&aacute;s de 20 a&ntilde;os ofreciendo atenci&oacute;n m&eacute;dica de excelencia, con calidez humana y compromiso genuino con cada paciente. Contamos con un equipo altamente capacitado dedicado a cuidar tu salud y bienestar.
              </p>
              <div className="hero-cta-group">
                <a href={getWhatsAppUrl('Hola, me gustaría agendar una cita')} className="btn btn--white btn--large" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Agenda tu cita
                </a>
                <Link href="/servicios" className="btn btn--ghost btn--large">
                  Nuestros servicios
                </Link>
              </div>
            </div>
          </div>

          {/* 3-Column Animated Carousel */}
          <div className="hero-carousel">
            {/* Column 1 — scrolls DOWN */}
            <div className="hero-carousel__col hero-carousel__col--down">
              <div className="hero-carousel__track">
                <img src="/images/hospital/instalaciones/recepcion.webp" alt="Recepci&oacute;n del hospital" />
                <img src="/images/hospital/instalaciones/quirofanos.webp" alt="Quir&oacute;fanos" />
                <img src="/images/hospital/instalaciones/cuartos_1.webp" alt="Suite" />
                <img src="/images/hospital/instalaciones/recepcion.webp" alt="Recepci&oacute;n del hospital" />
                <img src="/images/hospital/instalaciones/quirofanos.webp" alt="Quir&oacute;fanos" />
                <img src="/images/hospital/instalaciones/cuartos_1.webp" alt="Suite" />
              </div>
            </div>

            {/* Column 2 — scrolls UP */}
            <div className="hero-carousel__col hero-carousel__col--up">
              <div className="hero-carousel__track">
                <img src="/images/hospital/instalaciones/area-de-hospitalizacion_3.webp" alt="&Aacute;rea de cuneros" />
                <img src="/images/hospital/instalaciones/cafeteria.webp" alt="Cafeter&iacute;a" />
                <img src="/images/hospital/instalaciones/cuartos_2.webp" alt="Mastersuite" />
                <img src="/images/hospital/instalaciones/area-de-hospitalizacion_3.webp" alt="&Aacute;rea de cuneros" />
                <img src="/images/hospital/instalaciones/cafeteria.webp" alt="Cafeter&iacute;a" />
                <img src="/images/hospital/instalaciones/cuartos_2.webp" alt="Mastersuite" />
              </div>
            </div>

            {/* Column 3 — scrolls DOWN */}
            <div className="hero-carousel__col hero-carousel__col--down">
              <div className="hero-carousel__track">
                <img src="/images/hospital/instalaciones/consultorios_1.webp" alt="Equipo m&eacute;dico" />
                <img src="/images/hospital/instalaciones/area-de-hospitalizacion.webp" alt="&Aacute;rea de hospitalizaci&oacute;n" />
                <img src="/images/hospital/instalaciones/area-de-hospitalizacion_5.webp" alt="Sala de espera" />
                <img src="/images/hospital/instalaciones/consultorios_1.webp" alt="Equipo m&eacute;dico" />
                <img src="/images/hospital/instalaciones/area-de-hospitalizacion.webp" alt="&Aacute;rea de hospitalizaci&oacute;n" />
                <img src="/images/hospital/instalaciones/area-de-hospitalizacion_5.webp" alt="Sala de espera" />
              </div>
            </div>
          </div>
        </div>

        {/* Onda SVG decorativa */}
        <div className="wave-shape">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Barra de Confianza */}
      <section className="trust-bar">
        <div className="container">
          <ScrollReveal stagger className="trust-bar__grid">
            <div className="trust-bar__item" data-animate>
              <div className="trust-bar__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <span className="trust-bar__number">20+</span>
              <span className="trust-bar__label">A&ntilde;os de experiencia</span>
            </div>
            <div className="trust-bar__item" data-animate>
              <div className="trust-bar__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <span className="trust-bar__number">15+</span>
              <span className="trust-bar__label">M&eacute;dicos especialistas</span>
            </div>
            <div className="trust-bar__item" data-animate>
              <div className="trust-bar__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <span className="trust-bar__number">24/7</span>
              <span className="trust-bar__label">Urgencias</span>
            </div>
            <div className="trust-bar__item" data-animate>
              <div className="trust-bar__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
              <span className="trust-bar__number">2003</span>
              <span className="trust-bar__label">Desde</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Maternidad CTA — Servicio estrella */}
      <section className="section maternidad-destacada">
        <div className="container">
          <ScrollReveal className="maternidad-split">
            <div className="maternidad-content" data-animate="fade-right">
              <span className="section-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                Maternidad
              </span>
              <h2>Paquetes de Maternidad</h2>
              <p className="lead">
                Desde el primer d&iacute;a de tu embarazo hasta el nacimiento de tu beb&eacute;,
                nuestro equipo de especialistas te acompa&ntilde;ar&aacute; con calidez y profesionalismo.
              </p>

              <div className="paquetes-preview">
                <div className="paquete-mini">
                  <span className="paquete-label">Parto</span>
                  <span className="paquete-precio">$28,450.00</span>
                </div>
                <div className="paquete-mini">
                  <span className="paquete-label">Ces&aacute;rea</span>
                  <span className="paquete-precio">$33,000.00</span>
                </div>
              </div>

              <div className="beneficios-lista">
                <div className="beneficio-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Apartado desde $1,000 pesos</span>
                </div>
                <div className="beneficio-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Descuento en consultas prenatales</span>
                </div>
                <div className="beneficio-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Facilidades de pago</span>
                </div>
              </div>

              <div className="hero-cta-group">
                <a href={getWhatsAppUrl('Hola, me interesa el paquete de maternidad')} className="btn btn--rosa btn--medium" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Consulta por WhatsApp
                </a>
                <Link href="/maternidad" className="btn btn--rosa-outline btn--medium">
                  Ver paquetes completos
                </Link>
              </div>
            </div>

            <div className="maternidad-image" data-animate="fade-left">
              <img
                src="/images/hospital/maternidad/paquetes-de-maternidad.webp"
                alt="Paquetes de maternidad Hospital Santa Fe"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Servicios — Glass Cards */}
      <section className="section departments-modern">
        <div className="container">
          <ScrollReveal>
            <div className="section-label-row" data-animate>
              <span className="section-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                Servicios
              </span>
            </div>
            <h2 className="section-title-modern" data-animate>Nuestros Servicios</h2>
            <p className="section-subtitle-modern" data-animate>
              Atenci&oacute;n m&eacute;dica especializada con tecnolog&iacute;a de vanguardia y un equipo humano comprometido con tu bienestar.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="departments-grid">
            <div className="department-card-modern" data-animate="scale-in">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Cardiolog&iacute;a</h3>
              <p>Atenci&oacute;n y manejo integral de enfermedades cardiovasculares, apoyados en tecnolog&iacute;a actual y un equipo m&eacute;dico con experiencia y compromiso en el cuidado del coraz&oacute;n.</p>
              <Link href="/servicios/especialidades/cardiologia" className="card-link">
                Ver m&aacute;s
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="department-card-modern" data-animate="scale-in">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <h3>Diagn&oacute;stico</h3>
              <p>Servicios de estudios de imagen y apoyo diagn&oacute;stico, orientados a facilitar una evaluaci&oacute;n m&eacute;dica precisa y oportuna.</p>
              <Link href="/servicios/estudios-imagen" className="card-link">
                Ver m&aacute;s
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="department-card-modern" data-animate="scale-in">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Cirug&iacute;a</h3>
              <p>Contamos con quir&oacute;fanos funcionales y equipamiento adecuado para procedimientos quir&uacute;rgicos, con protocolos orientados a brindar atenci&oacute;n segura y confiable.</p>
              <Link href="/servicios/paquetes" className="card-link">
                Ver m&aacute;s
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="department-card-modern" data-animate="scale-in">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Urgencias</h3>
              <p>Atenci&oacute;n m&eacute;dica inmediata las 24 horas, los 365 d&iacute;as del a&ntilde;o.</p>
              <Link href="/contacto" className="card-link">
                Ver m&aacute;s
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="text-center section-cta-spacer">
            <Link href="/servicios" className="btn btn--primary btn--medium">
              Explorar todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Nosotros — Glass Card */}
      <section className="section about-preview">
        <div className="container">
          <ScrollReveal className="about-split">
            <div className="about-image" data-animate="fade-left">
              <img
                src="/images/hospital/instalaciones/recepcion-dr-juan-manuel.webp"
                alt="Recepci&oacute;n Hospital Santa Fe"
              />
            </div>
            <div className="about-content" data-animate="fade-right">
              <span className="section-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.87M19 21V10.87" /></svg>
                Nosotros
              </span>
              <h2>Tu confianza, nuestra prioridad</h2>
              <p>
                Con m&aacute;s de 20 a&ntilde;os de trayectoria, el Hospital Santa Fe se ha consolidado como
                una instituci&oacute;n de confianza en Zapotlanejo, Jalisco. Nuestro diferenciador es
                la atenci&oacute;n personalizada: cada paciente recibe un trato cercano, humano y
                enfocado en su bienestar integral.
              </p>
              <Link href="/nosotros" className="btn btn--primary">
                Conoce m&aacute;s sobre nosotros
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipo M&eacute;dico */}
      <section className="section doctors-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-label-row text-center" data-animate>
              <span className="section-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Equipo M&eacute;dico
              </span>
            </div>
            <h2 className="section-title-modern text-center" data-animate>Nuestro Equipo</h2>
            <p className="section-subtitle-modern text-center" data-animate>
              M&eacute;dicos con amplia experiencia y certificaci&oacute;n, comprometidos
              con brindarte atenci&oacute;n personalizada y de la m&aacute;s alta calidad.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="doctors-grid">
            <div className="doctor-card" data-animate>
              <div className="doctor-image">
                <img
                  src="/images/hospital/medicos/dr-juan-manuel-davalos.webp"
                  alt="Dr. Juan Manuel Dávalos"
                />
              </div>
              <div className="doctor-info">
                <h3>Dr. Juan Manuel Dávalos</h3>
                <span className="doctor-badge">Director del Área Médica</span>
              </div>
            </div>

            <div className="doctor-card" data-animate>
              <div className="doctor-image">
                <img
                  src="/images/hospital/medicos/dra-maria-gonzalez.webp"
                  alt="Dra. María González"
                />
              </div>
              <div className="doctor-info">
                <h3>Dra. María González</h3>
                <span className="doctor-badge">Coordinadora de Médicos</span>
              </div>
            </div>

            <div className="doctor-card" data-animate>
              <div className="doctor-image">
                <img
                  src="/images/hospital/medicos/dr-javier-barajas.webp"
                  alt="Dr. Javier Barajas"
                />
              </div>
              <div className="doctor-info">
                <h3>Dr. Javier Barajas</h3>
                <span className="doctor-badge">Cirujano General</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center section-cta-spacer">
            <Link href="/nosotros" className="btn btn--secondary">
              Conoce a nuestro equipo
            </Link>
          </div>
        </div>
      </section>

      {/* Instalaciones — Bento Grid */}
      <section className="section instalaciones-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-label-row text-center" data-animate>
              <span className="section-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Instalaciones
              </span>
            </div>
            <h2 className="section-title-modern text-center" data-animate>Nuestras Instalaciones</h2>
            <p className="section-subtitle-modern text-center" data-animate>
              Espacios dise&ntilde;ados para tu comodidad y tranquilidad
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="instalaciones-grid">
            <div className="instalacion-item instalacion-item--wide" data-animate="scale-in">
              <img
                src="/images/hospital/instalaciones/quirofanos.webp"
                alt="Quir&oacute;fanos del Hospital Santa Fe"
              />
              <div className="instalacion-overlay">
                <h4>Quir&oacute;fanos Equipados</h4>
              </div>
            </div>

            <div className="instalacion-item" data-animate="scale-in">
              <img
                src="/images/hospital/instalaciones/cuartos_1.webp"
                alt="Suite del Hospital Santa Fe"
              />
              <div className="instalacion-overlay">
                <h4>Habitaciones Privadas</h4>
              </div>
            </div>

            <div className="instalacion-item" data-animate="scale-in">
              <img
                src="/images/hospital/instalaciones/area-de-hospitalizacion_3.webp"
                alt="&Aacute;rea de cuneros"
              />
              <div className="instalacion-overlay">
                <h4>&Aacute;rea de Cuneros</h4>
              </div>
            </div>

            <div className="instalacion-item" data-animate="scale-in">
              <img
                src="/images/hospital/instalaciones/cafeteria.webp"
                alt="Cafetería del Hospital Santa Fe"
              />
              <div className="instalacion-overlay">
                <h4>Cafetería</h4>
              </div>
            </div>

            <div className="instalacion-item" data-animate="scale-in">
              <img
                src="/images/hospital/instalaciones/quirofanos-1.webp"
                alt="Tecnología moderna del Hospital Santa Fe"
              />
              <div className="instalacion-overlay">
                <h4>Tecnología Moderna</h4>
              </div>
            </div>

            <div className="instalacion-item instalacion-item--wide" data-animate="scale-in">
              <img
                src="/images/hospital/instalaciones/consultorios.webp"
                alt="Consultorios médicos"
              />
              <div className="instalacion-overlay">
                <h4>Consultorios</h4>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center section-cta-spacer">
            <Link href="/instalaciones" className="btn btn--primary">
              Ver galer&iacute;a completa
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-label-row text-center" data-animate>
              <span className="section-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                Testimonios
              </span>
            </div>
            <h2 className="section-title-modern text-center" data-animate>Lo que dicen nuestros pacientes</h2>
            <p className="section-subtitle-modern text-center" data-animate>
              La confianza de nuestros pacientes es nuestro mayor logro
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="testimonials-grid">
            <div className="testimonial-card" data-animate>
              <div className="testimonial-card__quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
              </div>
              <p className="testimonial-card__text">
                &quot;Desde mi primer embarazo eleg&iacute; Hospital Santa Fe y no me arrepiento. La atenci&oacute;n fue
                incre&iacute;blemente c&aacute;lida y profesional. Me sent&iacute; segura en todo momento.&quot;
              </p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">Mar&iacute;a G.</span>
                <div className="testimonial-card__stars">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
              </div>
            </div>

            <div className="testimonial-card" data-animate>
              <div className="testimonial-card__quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
              </div>
              <p className="testimonial-card__text">
                &quot;Llegu&eacute; a urgencias a las 3 de la ma&ntilde;ana y me atendieron de inmediato.
                El trato fue excelente y el seguimiento muy profesional. Totalmente recomendado.&quot;
              </p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">Roberto L.</span>
                <div className="testimonial-card__stars">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
              </div>
            </div>

            <div className="testimonial-card" data-animate>
              <div className="testimonial-card__quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
              </div>
              <p className="testimonial-card__text">
                &quot;Lo que m&aacute;s valoro es la atenci&oacute;n personalizada. No eres un n&uacute;mero m&aacute;s,
                realmente se preocupan por ti y tu familia. Un hospital con vocaci&oacute;n de servicio.&quot;
              </p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">Ana P.</span>
                <div className="testimonial-card__stars">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-final">
        <div className="container">
          <ScrollReveal>
          <div className="cta-final__content" data-animate>
            <h2>Estamos listos para atenderte</h2>
            <p>
              Agenda tu cita o resuelve tus dudas. Nuestro equipo te brinda
              atenci&oacute;n personalizada desde el primer contacto.
            </p>
            <div className="cta-final__buttons">
              <a href={getWhatsAppUrl('Hola, me gustaría agendar una cita')} className="btn btn--whatsapp btn--large" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Escríbenos por WhatsApp
              </a>
              <a href={`tel:${PHONE_LANDLINE}`} className="btn btn--secondary btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Llámanos: {PHONE_LANDLINE_DISPLAY}
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
