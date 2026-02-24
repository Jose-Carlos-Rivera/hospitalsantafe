import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import EstudiosGrid from '@/components/servicios/EstudiosGrid';
import { estudiosImagen, otrosServicios } from '@/lib/data/estudios-imagen';
import { getWhatsAppUrl } from '@/lib/data/navigation';
import horariosJson from '@/lib/data/horarios.json';
import '../servicios.css';

export const metadata = {
  title: 'Estudios de Imagen',
  description: 'Estudios de imagen: Rayos X digital, Ecosonogramas 2D/3D/4D/5D, Doppler, Electrocardiograma, Endoscopía, Colonoscopía y más en Hospital Santa Fe, Zapotlanejo.',
};

export default function EstudiosImagenPage() {
  // Separar el eco 3D/4D para sección especial
  const estudiosPrincipales = estudiosImagen.filter(e => e.id !== 'eco-3d-4d');
  const eco3d4d = estudiosImagen.find(e => e.id === 'eco-3d-4d');

  return (
    <>
      <section className="page-hero page-hero--estudios">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Estudios de Imagen</span>
          </nav>
          <h1>Estudios de Imagen</h1>
          <p className="page-hero__subtitle">
            Contamos con equipos de vanguardia para ofrecer diagnósticos precisos y oportunos. Nuestro personal técnico está capacitado para brindarte la mejor atención.
          </p>
        </div>
      </section>

      {/* Grid de estudios principales */}
      <section className="section">
        <div className="container">
          <EstudiosGrid estudios={estudiosPrincipales} />
        </div>
      </section>

      {/* Sección especial: Ecosonograma 3D/4D */}
      {eco3d4d && (
        <section className="section highlight-section">
          <div className="container">
            <ScrollReveal>
              <div className="highlight-section__content" data-animate>
                <div className="highlight-section__text">
                  <h2>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={eco3d4d.iconPath} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {eco3d4d.nombre}
                  </h2>
                  <p className="highlight-section__desc">{eco3d4d.descripcionLarga}</p>

                  {eco3d4d.indicaciones && (
                    <ul className="highlight-section__tips">
                      {eco3d4d.indicaciones.map((tip, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="highlight-section__prep">
                    <h4>Preparación:</h4>
                    <p>{eco3d4d.preparacion}</p>
                  </div>

                  {eco3d4d.procedimiento && (
                    <div className="highlight-section__delivery">
                      <h4>Al concluir el estudio:</h4>
                      <p>{eco3d4d.procedimiento}</p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Media Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Nuestro Equipo de Diagnóstico</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                Conoce el equipo con el que realizamos nuestros estudios de imagen.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
            <ScrollReveal>
              <div data-animate>
                <VideoPlayer src="/videos/radiografia.mp4" style={{ width: '100%', aspectRatio: '9/16', maxHeight: '400px' }} />
                <p style={{ textAlign: 'center', marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Equipo de Radiografía Digital</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div data-animate>
                <img src="/images/hospital/servicios/electrocardiograma.webp" alt="Electrocardiograma" style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)' }} />
                <p style={{ textAlign: 'center', marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Electrocardiograma</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="info-box" data-animate>
              <h3>Información Importante</h3>
              <p>
                <strong>Resultados rápidos:</strong> La mayoría de nuestros estudios están disponibles en un plazo de 24 a 48 horas. Los rayos X y electrocardiogramas tienen resultados inmediatos.
              </p>
              <p>
                <strong>Horarios:</strong> {horariosJson.estudios_imagen.horario_semana}. {horariosJson.estudios_imagen.horario_urgencias}.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Otros Servicios */}
      <section id="otros-servicios" className="section" style={{ background: 'var(--color-neutral-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Otros Servicios</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                Además de estudios de imagen, ofrecemos una variedad de servicios médicos para tu atención integral.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger className="otros-servicios-grid">
            {otrosServicios.map((servicio) => (
              <div key={servicio.id} className="otro-servicio-card" data-animate>
                {servicio.video && (
                  <VideoPlayer src={servicio.video} style={{ width: '100%', aspectRatio: '9/16', maxHeight: '300px', marginBottom: 'var(--space-4)' }} />
                )}
                {servicio.imagen && !servicio.video && (
                  <img src={servicio.imagen} alt={servicio.nombre} style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-4)' }} />
                )}
                <h4>{servicio.nombre}</h4>
                <p>{servicio.descripcion}</p>
                <a
                  href={getWhatsAppUrl(`Hola, me gustaría información sobre ${servicio.nombre}`)}
                  className="btn btn--whatsapp btn--small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar
                </a>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-final">
        <div className="container">
          <ScrollReveal>
            <div className="cta-final__content" data-animate>
              <h2>¿Necesitas agendar un estudio?</h2>
              <p>Contáctanos por WhatsApp o llámanos para programar tu cita. No necesitas referencia médica para la mayoría de los estudios.</p>
              <div className="cta-final__buttons">
                <a
                  href={getWhatsAppUrl('Hola, me gustaría agendar un estudio de imagen')}
                  className="btn btn--whatsapp btn--large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Agendar por WhatsApp
                </a>
                <a href="tel:3737344205" className="btn btn--secondary btn--large">
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
