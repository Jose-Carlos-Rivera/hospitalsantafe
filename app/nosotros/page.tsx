import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import type { Metadata } from 'next';
import nosotrosJson from '@/lib/data/nosotros.json';
import './nosotros.css';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce la historia de Hospital Santa Fe. Más de 20 años brindando atención médica de calidad en Zapotlanejo, Jalisco. Nuestro equipo, misión y valores.',
};

const VALOR_ICONS: Record<string, React.ReactNode> = {
  compromiso: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  excelencia: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  humanidad: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  disponibilidad: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  confianza: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  cercania: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

export default function Nosotros() {
    return (
        <>
            {/* Hero Section */}
            <section className="nosotros-hero">
                <div className="container">
                    <div className="nosotros-hero__content">
                        <h1>Nosotros</h1>
                    </div>
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="section">
                <div className="container">
                    <ScrollReveal className="content-split">
                        <div className="content-text" data-animate="fade-right">
                            <h2>¿Quiénes somos?</h2>
                            <p>
                                El Hospital Santa Fe es una institución médica privada con más de 20 años de trayectoria en Zapotlanejo, Jalisco. Nacimos como un proyecto impulsado por la vocación de servicio y el compromiso con la comunidad, y hoy somos un hospital consolidado que brinda atención médica continua las 24 horas. Nos caracterizamos por ofrecer un entorno hospitalario seguro, cercano y profesional, respaldado por infraestructura en constante crecimiento y un equipo multidisciplinario de especialistas y personal de salud comprometido con el bienestar de cada paciente y su familia.
                            </p>
                        </div>
                        <div className="content-image" data-animate="fade-left">
                            <img
                                src="/images/hospital/instalaciones/recepcion.webp"
                                alt="Hospital Santa Fe - Recepción"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="section mision-vision-section">
                <div className="container">
                    <ScrollReveal stagger className="mision-vision-grid">
                        <div className="mision-vision-card" data-animate="fade-right">
                            <div className="mision-vision-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <h3>Misión</h3>
                            <p>
                                {nosotrosJson.mision}
                            </p>
                        </div>
                        <div className="mision-vision-card" data-animate="fade-left">
                            <div className="mision-vision-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>Visión</h3>
                            <p>
                                {nosotrosJson.vision}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Valores */}
            <section className="section valores-section">
                <div className="container">
                    <h2 className="text-center">Nuestros Valores</h2>

                    <ScrollReveal stagger className="valores-grid">
                        {nosotrosJson.valores.map((valor) => (
                            <div key={valor.id} className="valor-card" data-animate>
                                <div className="valor-icon">
                                    {VALOR_ICONS[valor.id]}
                                </div>
                                <h3>{valor.nombre}</h3>
                                <p>{valor.descripcion}</p>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            {/* Nuestra Historia */}
            <section className="section historia-section">
                <div className="container">
                    <ScrollReveal className="content-split">
                        <div className="content-text" data-animate="fade-right">
                            <h2>Nuestra Historia</h2>
                            <p>
                                El Hospital Santa Fe inició en 1999 como un consultorio médico y farmacia, fundado por el Dr. Juan Manuel Dávalos González tras detectar la necesidad de servicios médicos permanentes en la comunidad de Santa Fe, Zapotlanejo. Gracias a la confianza de los pacientes y al trabajo constante, el proyecto creció rápidamente, incorporando servicios, equipamiento y mayor capacidad de atención.
                            </p>
                            <p>
                                En 2003 se inauguró la primera etapa de la entonces Clínica Santa Fe, que con el paso de los años se amplió en infraestructura, especialidades y servicios quirúrgicos hasta consolidarse como Hospital Santa Fe. Hoy, continúa evolucionando con el mismo compromiso que le dio origen: brindar atención médica accesible, profesional y cercana.
                            </p>
                        </div>
                        <div className="content-image" data-animate="fade-left">
                            <img
                                src="/images/hospital/instalaciones/entrada-estacionamiento-nosotros.webp"
                                alt="Hospital Santa Fe - Entrada principal"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Video Presentación */}
            <section className="section video-section">
                <div className="container">
                    <h2 className="text-center">Conoce Nuestras Instalaciones</h2>

                    <ScrollReveal stagger>
                        <div className="nosotros-videos-grid" data-animate>
                            <div className="nosotros-video-item">
                                <VideoPlayer src="/videos/instalaciones.mp4" style={{ width: '100%', aspectRatio: '9/16' }} />
                                <p className="nosotros-video-caption">Instalaciones</p>
                            </div>
                            <div className="nosotros-video-item">
                                <VideoPlayer src="/videos/quirofanos.mp4" style={{ width: '100%', aspectRatio: '9/16' }} />
                                <p className="nosotros-video-caption">Quirófanos</p>
                            </div>
                            <div className="nosotros-video-item">
                                <VideoPlayer src="/videos/farmacia.mp4" style={{ width: '100%', aspectRatio: '9/16' }} />
                                <p className="nosotros-video-caption">Farmacia</p>
                            </div>
                            <div className="nosotros-video-item">
                                <VideoPlayer src="/videos/cafeteria.mp4" style={{ width: '100%', aspectRatio: '9/16' }} />
                                <p className="nosotros-video-caption">Cafetería</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Galería de Fotos */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center">Galería</h2>

                    <ScrollReveal stagger className="gallery-grid">
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/quirofanos.webp"
                                alt="Quir&oacute;fano equipado"
                            />
                        </div>
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/cuartos.webp"
                                alt="Habitaci&oacute;n privada"
                            />
                        </div>
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/area-de-hospitalizacion.webp"
                                alt="&Aacute;rea de hospitalizaci&oacute;n"
                            />
                        </div>
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/consultorios.webp"
                                alt="Consultorios m&eacute;dicos"
                            />
                        </div>
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/farmacia-nueva.webp"
                                alt="Farmacia"
                            />
                        </div>
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/cafeteria.webp"
                                alt="Cafetería"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <ScrollReveal>
                        <h2 data-animate>¿Necesitas atención médica?</h2>
                        <p className="lead" data-animate>Estamos aquí para cuidar de ti y tu familia</p>
                        <div className="cta-buttons" data-animate>
                            <Link href="/contacto" className="btn btn--primary btn--large">
                                Contáctanos
                            </Link>
                            <Link href="/servicios/especialidades" className="btn btn--secondary btn--large">
                                Ver servicios
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
