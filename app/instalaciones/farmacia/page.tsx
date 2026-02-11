import Link from 'next/link';
import '../instalaciones.css';

export default function Farmacia() {
    return (
        <>
            <section className="instalaciones-hero">
                <div className="container">
                    <h1>FARMACIA</h1>
                    <p className="lead">
                        Medicamentos y productos de salud siempre disponibles
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="farmacia-content">
                        <div className="content-text">
                            <h2>Farmacia Interna</h2>
                            <p>
                                Contamos con una farmacia dentro del hospital que ofrece medicamentos de
                                patente y genéricos, material de curación y productos de salud.
                            </p>

                            <div className="horarios-box">
                                <h3>Horario de Atención</h3>
                                <div className="horario-item">
                                    <strong>Lunes a Viernes:</strong>
                                    <span>8:00 AM - 8:00 PM</span>
                                </div>
                                <div className="horario-item">
                                    <strong>Sábados:</strong>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="horario-item">
                                    <strong>Domingos y festivos:</strong>
                                    <span>9:00 AM - 2:00 PM</span>
                                </div>
                            </div>

                            <div className="servicios-farmacia">
                                <h3>Servicios Disponibles</h3>
                                <div className="servicio-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Medicamentos de patente y genéricos</span>
                                </div>
                                <div className="servicio-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Material de curación</span>
                                </div>
                                <div className="servicio-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Productos para el cuidado de la salud</span>
                                </div>
                                <div className="servicio-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Surtido de recetas médicas</span>
                                </div>
                                <div className="servicio-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Toma de presión arterial (gratis)</span>
                                </div>
                            </div>

                            <div className="info-box">
                                <strong>Nota:</strong> Para urgencias fuera del horario de atención, el personal
                                de enfermería puede proporcionar medicamentos básicos de urgencia.
                            </div>
                        </div>

                        <div className="farmacia-image">
                            <img
                                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=700&fit=crop"
                                alt="Farmacia del hospital"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>¿Necesitas más información?</h2>
                    <Link href="/contacto" className="btn btn--primary btn--large">
                        Contactar ahora
                    </Link>
                </div>
            </section>
        </>
    );
}
