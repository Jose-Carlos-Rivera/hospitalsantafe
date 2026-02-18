import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import type { Metadata } from 'next';
import './nosotros.css';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce la historia de Hospital Santa Fe. Más de 20 años brindando atención médica de calidad en Zapotlanejo, Jalisco. Nuestro equipo, misión y valores.',
};

export default function Nosotros() {
    return (
        <>
            {/* Hero Section */}
            <section className="nosotros-hero">
                <div className="container">
                    <div className="nosotros-hero__content">
                        <h1>NOSOTROS</h1>
                        <p className="lead">
                            Más de 20 años brindando atención médica de calidad con calidez humana
                        </p>
                    </div>
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="section">
                <div className="container">
                    <ScrollReveal className="content-split">
                        <div className="content-text" data-animate="fade-right">
                            <h2>¿Quiénes Somos?</h2>
                            <p>
                                El Hospital Santa Fe es una institución médica privada con más de dos décadas
                                de experiencia brindando servicios de salud de calidad en Zapotlanejo, Jalisco.
                            </p>
                            <p>
                                Nuestra misión es proporcionar atención médica integral, personalizada y de
                                excelencia, con un equipo de profesionales altamente capacitados y tecnología
                                de vanguardia.
                            </p>
                            <p>
                                Nos distingue nuestro compromiso con el bienestar de nuestros pacientes y sus
                                familias, ofreciendo un trato cercano, humano y profesional en cada consulta
                                y procedimiento.
                            </p>
                        </div>
                        <div className="content-image" data-animate="fade-left">
                            <img
                                src="/images/hospital/instalaciones/recepcion.webp"
                                alt="Hospital Santa Fe - Recepci&oacute;n"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Valores */}
            <section className="section valores-section">
                <div className="container">
                    <h2 className="text-center">Nuestros Valores</h2>

                    <ScrollReveal stagger className="valores-grid">
                        <div className="valor-card" data-animate>
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <h3>Compromiso</h3>
                            <p>Dedicados al bienestar y recuperación de cada paciente</p>
                        </div>

                        <div className="valor-card" data-animate>
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Excelencia</h3>
                            <p>Estándares de calidad en todos nuestros servicios médicos</p>
                        </div>

                        <div className="valor-card" data-animate>
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Humanidad</h3>
                            <p>Trato cálido y empático con cada paciente y familiar</p>
                        </div>

                        <div className="valor-card" data-animate>
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3>Disponibilidad</h3>
                            <p>Atención médica 24/7 para emergencias y urgencias</p>
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
                                <VideoPlayer src="/videos/cuneros.mp4" style={{ width: '100%', aspectRatio: '9/16' }} />
                                <p className="nosotros-video-caption">Cuneros</p>
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
                                src="/images/hospital/instalaciones/cafeteria.webp"
                                alt="Cafeter&iacute;a"
                            />
                        </div>
                        <div className="gallery-item" data-animate="scale-in">
                            <img
                                src="/images/hospital/instalaciones/estacionamiento_1.webp"
                                alt="Estacionamiento"
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
