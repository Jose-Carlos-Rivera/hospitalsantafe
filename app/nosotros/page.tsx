import Link from 'next/link';
import './nosotros.css';

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
                    <div className="content-split">
                        <div className="content-text">
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
                        <div className="content-image">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=700&fit=crop"
                                alt="Hospital Santa Fe - Instalaciones modernas"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="section valores-section">
                <div className="container">
                    <h2 className="text-center">Nuestros Valores</h2>

                    <div className="valores-grid">
                        <div className="valor-card">
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <h3>Compromiso</h3>
                            <p>Dedicados al bienestar y recuperación de cada paciente</p>
                        </div>

                        <div className="valor-card">
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Excelencia</h3>
                            <p>Estándares de calidad en todos nuestros servicios médicos</p>
                        </div>

                        <div className="valor-card">
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

                        <div className="valor-card">
                            <div className="valor-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3>Disponibilidad</h3>
                            <p>Atención médica 24/7 para emergencias y urgencias</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Presentación */}
            <section className="section video-section">
                <div className="container">
                    <h2 className="text-center">Conoce Nuestras Instalaciones</h2>
                    <div className="video-container">
                        <div className="video-placeholder">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            <p>Video presentación próximamente</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Fotos */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center">Galería</h2>

                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop"
                                alt="Quirófano equipado"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=400&fit=crop"
                                alt="Habitación privada"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop"
                                alt="Área de cuneros"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=500&h=400&fit=crop"
                                alt="Equipamiento médico"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop"
                                alt="Área de urgencias"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=400&fit=crop"
                                alt="Recepción"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Necesitas atención médica?</h2>
                    <p className="lead">Estamos aquí para cuidar de ti y tu familia</p>
                    <div className="cta-buttons">
                        <Link href="/contacto" className="btn btn--primary btn--large">
                            Contáctanos
                        </Link>
                        <Link href="/servicios/especialidades" className="btn btn--secondary btn--large">
                            Ver servicios
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
