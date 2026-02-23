import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
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
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="horario-item">
                    <strong>Sábado y Domingo:</strong>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                </div>

                <h3>Menú</h3>
                <div className="menu-section">
                  <h4>Desayunos (9:00 AM - 11:00 AM)</h4>
                  <ul>
                    <li>Desayunos completos desde $60.00</li>
                    <li>Jugos naturales</li>
                    <li>Fruta fresca</li>
                    <li>Chilaquiles</li>
                    <li>Huevo al gusto</li>
                  </ul>

                  <h4>Comidas (1:00 PM - 4:00 PM)</h4>
                  <ul>
                    <li>Menú del día $90.00</li>
                    <li>Platos a la carta</li>
                    <li>Ensaladas</li>
                  </ul>

                  <h4>Todo el día</h4>
                  <ul>
                    <li>Café y bebidas</li>
                    <li>Refrescos y agua</li>
                    <li>Snacks</li>
                    <li>Sandwiches</li>
                    <li>Burritos</li>
                  </ul>
                </div>

                <div className="info-box">
                  <strong>Servicio a habitaciones:</strong> Disponible para pacientes hospitalizados y sus familiares, Ext. 30.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-neutral-50)' }}>
        <div className="container">
          <ScrollReveal stagger className="info-grid">
            <div className="info-item" data-animate>
              <h4>Abierta al público</h4>
              <p>No necesitas ser paciente para visitarnos. Nuestra cafetería está abierta a cualquier persona que desee disfrutar de nuestros alimentos.</p>
            </div>
            <div className="info-item" data-animate>
              <h4>Dentro del hospital</h4>
              <p>Ubicada en la planta baja del hospital, a pasos de la recepción principal. Ideal para familiares que acompañan a sus pacientes.</p>
            </div>
            <div className="info-item" data-animate>
              <h4>Precios accesibles</h4>
              <p>Desayunos desde $60 y comidas completas desde $90. Ofrecemos opciones para todos los presupuestos.</p>
            </div>
            <div className="info-item" data-animate>
              <h4>Variedad de opciones</h4>
              <p>Desde desayunos completos hasta comidas balanceadas y snacks saludables, tenemos opciones para todos los gustos y necesidades dietéticas.</p>
            </div>
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
