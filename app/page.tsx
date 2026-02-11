import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <>
      {/* Hero Section con Onda Decorativa */}
      <section className="hero-wave">
        <div className="hero-wave__content container">
          <div className="hero-wave__text">
            <div className="hero-glass-card">
              <span className="hero-badge">🏥 Desde 2003 en Zapotlanejo</span>
              <h1 className="hero-wave__title">
                Tu salud,<br />nuestra misión
              </h1>
              <p className="hero-wave__subtitle">
                Más de 20 años brindando atención médica de calidad con calidez humana.
                Tecnología de vanguardia y un equipo comprometido con tu bienestar.
              </p>
              <div className="hero-cta-group">
                <Link href="/contacto" className="btn btn--white btn--large">
                  Agenda tu cita
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
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
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80" alt="Hospital moderno" />
                <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop&q=80" alt="Habitación privada" />
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop&q=80" alt="Equipo médico" />
                {/* Duplicated for seamless loop */}
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80" alt="Hospital moderno" />
                <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop&q=80" alt="Habitación privada" />
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop&q=80" alt="Equipo médico" />
              </div>
            </div>

            {/* Column 2 — scrolls UP */}
            <div className="hero-carousel__col hero-carousel__col--up">
              <div className="hero-carousel__track">
                <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop&q=80" alt="Recepción hospital" />
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop&q=80" alt="Cunero" />
                <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop&q=80" alt="Tecnología médica" />
                {/* Duplicated for seamless loop */}
                <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop&q=80" alt="Recepción hospital" />
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop&q=80" alt="Cunero" />
                <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop&q=80" alt="Tecnología médica" />
              </div>
            </div>

            {/* Column 3 — scrolls DOWN */}
            <div className="hero-carousel__col hero-carousel__col--down">
              <div className="hero-carousel__track">
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop&q=80" alt="Doctores profesionales" />
                <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop&q=80" alt="Farmacia" />
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80" alt="Laboratorio" />
                {/* Duplicated for seamless loop */}
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop&q=80" alt="Doctores profesionales" />
                <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop&q=80" alt="Farmacia" />
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80" alt="Laboratorio" />
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

        {/* Pagination dots */}
        <div className="hero-wave__pagination">
          <span className="pagination-dot pagination-dot--active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </section>

      {/* Servicios — Glass Cards */}
      <section className="section departments-modern">
        <div className="container">
          <div className="section-label-row">
            <span className="section-pill">💚 Servicios</span>
          </div>
          <h2 className="section-title-modern">Nuestros Servicios</h2>
          <p className="section-subtitle-modern">
            Atención médica especializada con tecnología de vanguardia y un equipo humano comprometido con tu bienestar.
          </p>

          <div className="departments-grid">
            <div className="department-card-modern">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Cardiología</h3>
              <p>Diagnóstico y tratamiento integral de enfermedades cardiovasculares con equipos de última generación.</p>
              <Link href="/servicios/cardiologia" className="card-link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="department-card-modern">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <h3>Diagnóstico</h3>
              <p>Laboratorio clínico y estudios de imagen con resultados precisos en tiempo récord.</p>
              <Link href="/servicios/diagnostico" className="card-link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="department-card-modern">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Cirugía</h3>
              <p>Quirófanos equipados con tecnología avanzada para procedimientos de alta complejidad y seguridad.</p>
              <Link href="/servicios/cirugia" className="card-link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="department-card-modern">
              <div className="card-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Urgencias</h3>
              <p>Atención médica inmediata las 24 horas, los 365 días del año con personal calificado.</p>
              <Link href="/servicios/urgencias" className="card-link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
            <Link href="/servicios" className="btn btn--primary btn--medium">
              Explorar todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Nosotros — Glass Card + Stats */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-split">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Doctora profesional"
              />
            </div>
            <div className="about-content">
              <span className="section-pill">🏥 Nosotros</span>
              <h2>Tu confianza, nuestra prioridad</h2>
              <p>
                Con más de 20 años de trayectoria, el Hospital Santa Fe se ha consolidado como
                una institución de confianza en Zapotlanejo, Jalisco. Nuestro compromiso es
                ofrecer atención médica de calidad, personalizada y con calidez humana.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat__number">20+</span>
                  <span className="about-stat__label">Años de experiencia</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat__number">50+</span>
                  <span className="about-stat__label">Médicos especialistas</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat__number">24/7</span>
                  <span className="about-stat__label">Urgencias</span>
                </div>
              </div>
              <Link href="/nosotros" className="btn btn--primary">
                Conoce más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Médico — Soft Green Gradient */}
      <section className="section doctors-section">
        <div className="container">
          <div className="section-label-row text-center">
            <span className="section-pill section-pill--light">👨‍⚕️ Equipo Médico</span>
          </div>
          <h2 className="section-title-modern text-center" style={{ color: 'var(--color-white)' }}>Nuestro Equipo</h2>
          <p className="section-subtitle-modern text-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Médicos especialistas con amplia experiencia y certificación, comprometidos
            con brindarte atención personalizada y de la más alta calidad.
          </p>

          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-image">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop"
                  alt="Dra. Ana Martínez"
                />
              </div>
              <div className="doctor-info">
                <h3>Dra. Ana Martínez</h3>
                <span className="doctor-badge">Ginecología y Obstetricia</span>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-image">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop"
                  alt="Dr. Carlos González"
                />
              </div>
              <div className="doctor-info">
                <h3>Dr. Carlos González</h3>
                <span className="doctor-badge">Medicina General</span>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-image">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop"
                  alt="Dra. María López"
                />
              </div>
              <div className="doctor-info">
                <h3>Dra. María López</h3>
                <span className="doctor-badge">Pediatría</span>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
            <Link href="/equipo" className="btn btn--ghost">
              Ver todo el equipo médico
            </Link>
          </div>
        </div>
      </section>

      {/* Maternidad CTA */}
      <section className="section maternidad-destacada">
        <div className="container">
          <div className="maternidad-split">
            <div className="maternidad-content">
              <span className="label">Tu embarazo en buenas manos</span>
              <h2>Paquetes de Maternidad</h2>
              <p className="lead">
                Desde el primer día de tu embarazo hasta el nacimiento de tu bebé,
                nuestro equipo de especialistas te acompañará con calidez y profesionalismo.
              </p>

              <div className="paquetes-preview">
                <div className="paquete-mini">
                  <span className="paquete-label">Parto</span>
                  <span className="paquete-precio">$11,000</span>
                </div>
                <div className="paquete-mini">
                  <span className="paquete-label">Cesárea</span>
                  <span className="paquete-precio">$15,000</span>
                </div>
              </div>

              <div className="beneficios-lista">
                <div className="beneficio-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Apartado desde $500 pesos</span>
                </div>
                <div className="beneficio-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Consultas prenatales incluidas</span>
                </div>
                <div className="beneficio-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Facilidades de pago</span>
                </div>
              </div>

              <Link href="/maternidad" className="btn btn--primary">
                Ver paquetes completos
              </Link>
            </div>

            <div className="maternidad-image">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop"
                alt="Mamá con bebé recién nacido"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones — Bento Grid */}
      <section className="section instalaciones-preview">
        <div className="container">
          <div className="section-label-row text-center">
            <span className="section-pill">🏨 Instalaciones</span>
          </div>
          <h2 className="section-title-modern text-center">Nuestras Instalaciones</h2>
          <p className="section-subtitle-modern text-center">
            Espacios diseñados para tu comodidad y tranquilidad
          </p>

          <div className="instalaciones-grid">
            <div className="instalacion-item instalacion-item--wide">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop"
                alt="Quirófano moderno"
              />
              <div className="instalacion-overlay">
                <h4>Quirófanos Equipados</h4>
              </div>
            </div>

            <div className="instalacion-item">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop"
                alt="Habitación privada"
              />
              <div className="instalacion-overlay">
                <h4>Habitaciones Privadas</h4>
              </div>
            </div>

            <div className="instalacion-item">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
                alt="Área de cuneros"
              />
              <div className="instalacion-overlay">
                <h4>Área de Cuneros</h4>
              </div>
            </div>

            <div className="instalacion-item instalacion-item--wide">
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=500&fit=crop"
                alt="Equipamiento médico"
              />
              <div className="instalacion-overlay">
                <h4>Tecnología Moderna</h4>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
            <Link href="/instalaciones" className="btn btn--primary">
              Ver galería completa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
